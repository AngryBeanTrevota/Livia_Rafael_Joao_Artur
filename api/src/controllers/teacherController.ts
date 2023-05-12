import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCient";
import { hash } from "bcryptjs";

export class teacherController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, register, password } = request.body;
      const registerAlreadyExists = await prismaClient.teacher.findUnique({
        where: {
          registerTeacher: register,
        },
      });

      if (registerAlreadyExists) {
        return response.status(400).json({ error: "Matrícula já cadastrada!" });
      }

      const passwordHash = await hash(password, 8);

      const teacher = await prismaClient.teacher.create({
        data: {
          name: name,
          registerTeacher: register,
          password: passwordHash,
        },
      });

      return response.json(teacher);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async view(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const teacher = await prismaClient.teacher.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!teacher) {
        return response
          .status(404)
          .json({ error: "Professor não encontrado!" });
      }

      return response.json(teacher);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async index(request: Request, response: Response): Promise<Response> {
    try {
      const teachers = await prismaClient.teacher.findMany();

      return response.json(teachers);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { name, registerTeacher, password } = request.body;

      const teacher = await prismaClient.teacher.update({
        where: {
          id: Number(id),
        },
        data: {
          name,
          registerTeacher,
          password,
        },
      });

      console.log("Teacher:", teacher);

      return response.json(teacher);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const teacher = await prismaClient.teacher.delete({
        where: {
          id: Number(id),
        },
      });

      return response.json(teacher);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }
}