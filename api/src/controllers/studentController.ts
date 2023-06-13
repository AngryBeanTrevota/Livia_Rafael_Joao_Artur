import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCient";
import { hash } from "bcryptjs";
import { Class, Item, Prisma, Teacher } from "@prisma/client";
import { loginController } from "./loginController";

export class studentController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, register, password } = request.body;

      const passwordHash = await hash(password, 8);

      const existingStudent = await prismaClient.student.findUnique({
        where: {
          registerStudent: register,
        },
      });

      if (existingStudent) {
        return response.status(400).json({
          error: "Já existe um estudante com este número de registro",
        });
      }

      const student = await prismaClient.student.create({
        data: {
          name: name,
          registerStudent: register,
          password: passwordHash,
          shots: 1000,
          xp: 1000,
        },
      });

      return response.json(student);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async register(request: Request, response: Response): Promise<Response> {
    try {
      const { name, registerStudent, password } = request.body;
      const passwordHash = await hash(password, 8);

      const existingStudent = await prismaClient.student.findUnique({
        where: {
          registerStudent: registerStudent,
        },
      });

      if (existingStudent) {
        return response.status(400).json({
          error: "Já existe um estudante com este número de registro",
        });
      }

      try {
        const student = await prismaClient.student.create({
          data: {
            name: name,
            registerStudent: registerStudent,
            password: passwordHash,
            shots: 1000,
            xp: 1000,
          },
        });
      } catch (err) {
        console.log("Erro ao criar o estudante:", err);
        return response
          .status(500)
          .json({ error: "Erro ao criar o estudante" });
      }

      const loginCtrl = new loginController();
      return loginCtrl.login(
        {
          body: {
            register: registerStudent,
            password: password,
            is_student: true,
          },
        } as Request,
        response
      );
    } catch (err) {
      return response.status(500).json({ error: "Erro ao registrar" });
    }
  }

  async view(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const student = await prismaClient.student.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          classroom: true,
          itens: true,
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

  async getItens(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const student = await prismaClient.student.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          itens: true,
        },
      });

      if (!student) {
        return response.status(404).json({ error: "Aluno não encontrado!" });
      }

      return response.json(student.itens);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const {
        name,
        register,
        password,
        shots,
        xp,
        number_quizzes,
        number_quizzes_success,
        class_id,
        itens_id,
      } = request.body;

      const updateData: Prisma.StudentUpdateInput = {
        name: name ?? undefined,
        registerStudent: register ?? undefined,
        password: password ? await hash(password, 8) : undefined,
        shots: shots !== undefined ? shots : undefined,
        xp: xp !== undefined ? xp : undefined,
        number_quizzes:
          number_quizzes !== undefined ? number_quizzes : undefined,
        number_quizzes_success:
          number_quizzes_success !== undefined
            ? number_quizzes_success
            : undefined,
        classroom: {
          connect: class_id ? { id: class_id } : undefined,
        },
        itens: {
          connect: itens_id?.map((itemId: number) => ({ id: itemId })),
        },
      };

      const student = await prismaClient.student.update({
        where: {
          id: Number(id),
        },
        data: updateData,
        include: {
          classroom: true,
          itens: true,
        }
      });

      return response.json(student);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const student = await prismaClient.student.delete({
        where: {
          id: Number(id),
        },
      });
      return response.json(student);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }
}
