import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCient";
import { hash } from "bcryptjs";

export class studentController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, register, password } = request.body;
      const registerAlreadyExists = await prismaClient.student.findUnique({
        where: {
          registerStudent: register,
        },
      });

      if (registerAlreadyExists) {
        return response.status(400).json({ error: "Matrícula já cadastrada!" });
      }

      const passwordHash = await hash(password, 8);

      const student = await prismaClient.student.create({
        data: {
          name: name,
          registerStudent: register,
          password: passwordHash,
        },
      });

      return response.json(student);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async view(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const student = await prismaClient.student.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!student) {
        return response.status(404).json({ error: "Aluno não encontrado!" });
      }

      return response.json(student);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async index(request: Request, response: Response): Promise<Response> {
    try {
      const students = await prismaClient.student.findMany();

      return response.json(students);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

    async update(request: Request, response: Response): Promise<Response> {
        try{
            const { id } = request.params;
            const { name, register, password } = request.body;

            const student = await prismaClient.student.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name: name,
                    registerStudent: register,
                    password: password
                }
            });

            return response.json(student);

        }catch(err){
          return response.status(500).json({ error: err.message });
        }
    }

    async delete(request: Request, response: Response): Promise<Response> {
        try{
            const { id } = request.params;

            const student = await prismaClient.student.delete({
                where: {
                    id: Number(id)
                }
            });

            return response.json(student);

        }catch(err){
          return response.status(500).json({ error: err.message });
        }
    }
}
