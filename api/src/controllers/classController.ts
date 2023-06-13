import { Request, Response } from "express";
import { Prisma, PrismaClient, Teacher } from "@prisma/client";

const prisma = new PrismaClient();

export class classController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, password, teacher_id } = request.body;
      const teacherId = parseInt(teacher_id);
      const teacher = await prisma.teacher.findUnique(
        {
          where: {
            id: teacherId,
          }
        }
      )

      if (!teacher) {
        return response
          .status(404)
          .json({ error: "Professor não encontrado!" });
      }

      const classe = await prisma.class.create({
        data: {
          name: name,
          password: password,
          teacher: {
            connect: {
              id: teacherId,
            },
          },
        },
        include: {
          teacher: true,
        }
      });

      return response.json(classe);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async view(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const classe = await prisma.class.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!classe) {
        return response.status(404).json({ error: "Turma não encontrada!" });
      }

      return response.json(classe);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async index(request: Request, response: Response): Promise<Response> {
    try {
      const classes = await prisma.class.findMany(
        {
          include: {
            teacher: true,
            Students: true,
          }
        }
      );

      return response.json(classes);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { name, password, teacher_id, students_ids } = request.body;
      const updateData: Prisma.ClassUpdateInput = {
        name: name ?? undefined,
        password: password ?? undefined,
        teacher: teacher_id ? { connect: { id: teacher_id } } : undefined,
        Students: students_ids ? { connect: students_ids.map((student_id: number) => { return { id: student_id } }) } : undefined,
      }

      const classe = await prisma.class.update({
        where: {
          id: Number(id),
        },
        data: updateData,
      });

      return response.json(classe);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      await prisma.class.delete({
        where: {
          id: Number(id),
        },
      });

      return response.status(204).send();
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }
}
