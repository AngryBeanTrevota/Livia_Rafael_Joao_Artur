import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class studentItemsController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { student_id, item_id } = request.body;
      const studentId = parseInt(student_id);
      const itemId = parseInt(item_id);
      const student = await prisma.student.findUnique({
        where: {
          id: studentId,
        },
      });
      const item = await prisma.item.findUnique({
        where: {
          id: itemId,
        },
      });
      if (!student) {
        return response.status(404).json({ error: "Aluno não encontrado!" });
      }
      if (!item) {
        return response.status(404).json({ error: "Item não encontrado!" });
      }
      const studentItem = await prisma.studentItem.create({
        data: {
          student: {
            connect: {
              id: studentId,
            },
          },
          item: {
            connect: {
              id: itemId,
            },
          },
          quantity: 0
        },
        include: {
          student: true,
          item: true,
        },
      });
      return response.json(studentItem);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const studentItems = await prisma.studentItem.findMany({
        include: {
          student: true,
          item: true,
        },
      });
      return response.json(studentItems);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  async view(request: Request, response: Response): Promise<Response> {
    try {
      const { student_id, item_id } = request.params;
      const studentId = parseInt(student_id);
      const itemId = parseInt(item_id);

      const studentItem = await prisma.studentItem.findUnique({
        where: {
          student_id_item_id: {
            student_id: studentId,
            item_id: itemId,
          },
        },
        include: {
          student: true,
          item: true,
        },
      });

      if (!studentItem) {
        return response
          .status(404)
          .json({ error: "Item do aluno não encontrado!" });
      }
      return response.json(studentItem);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { student_id, item_id } = request.body;
      const studentItemId = parseInt(id);
      const studentId = parseInt(student_id);
      const itemId = parseInt(item_id);

      const student = await prisma.student.findUnique({
        where: {
          id: studentId,
        },
      });
      const item = await prisma.item.findUnique({
        where: {
          id: itemId,
        },
      });
      if (!student) {
        return response.status(404).json({ error: "Aluno não encontrado!" });
      }
      if (!item) {
        return response.status(404).json({ error: "Item não encontrado!" });
      }

      const studentItem = await prisma.studentItem.update({
        where: {
          student_id_item_id: {
            student_id: studentId,
            item_id: itemId,
          },
        },
        data: {
          student: {
            connect: {
              id: studentId,
            },
          },
          item: {
            connect: {
              id: itemId,
            },
          },
        },
        include: {
          student: true,
          item: true,
        },
      });
      return response.json(studentItem);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { student_id, item_id } = request.body;
      const studentId = parseInt(student_id);
      const itemId = parseInt(item_id);
      const studentItem = await prisma.studentItem.findUnique({
        where: {
          student_id_item_id: {
            student_id: studentId,
            item_id: itemId,
          },
        },
        include: {
          student: true,
          item: true,
        },
      });
      if (!studentItem) {
        return response
          .status(404)
          .json({ error: "Item do aluno não encontrado!" });
      }
      await prisma.studentItem.delete({
        where: {
          student_id_item_id: {
            student_id: studentId,
            item_id: itemId,
          },
        },
      });
      return response.json(studentItem);
    } catch (error) {
      console.log(error)
      return response.status(400).json({ error: error.message });
    }
  }

  async equipItem(request: Request, response: Response): Promise<Response> {
    try {
      const { student_id, item_id } = request.body;
      const studentId = parseInt(student_id);
      const itemId = parseInt(item_id);

      let isEquipped: boolean;
      

      const studentItem = await prisma.studentItem.findUnique({
        where: {
          student_id_item_id: {
            student_id: studentId,
            item_id: itemId,
          },
        },
        include: {
          student: true,
          item: true,
        },
      });
      if (!studentItem) {
        return response
          .status(404)
          .json({ error: "Item do aluno não encontrado!" });
      }

      isEquipped = !studentItem.is_equipped;

      await prisma.studentItem.update({
        where: {
          student_id_item_id: {
            student_id: studentId,
            item_id: itemId,
          },
        },
        data: {
          is_equipped: isEquipped,
        },
      });
      return response.json(studentItem);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  async getEquippedItem(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { student_id } = request.params;
      const studentId = parseInt(student_id);
      const studentItems = await prisma.studentItem.findMany({
        where: {
          student_id: studentId,
          is_equipped: true,
        },
        include: {
          student: true,
          item: true,
        },
      });
      let characterEquipped, itemEquipped;
      studentItems.map((studentItem) => {
        if(studentItem.item.is_character){
           characterEquipped = studentItem.item;
           return;
        }else {
          itemEquipped = studentItem.item;
          return;
        }
      });

      return response.json({characterEquipped, itemEquipped});
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  async findStudentItems(request: Request, response: Response): Promise<Response> {
    try {
      const { student_id } = request.params;
      const studentId = parseInt(student_id);
      
      const studentItems = await prisma.studentItem.findMany({
        where: {
          student_id: studentId,
        },
        include: {
          student: true,
          item: true,
        },
      });
  
      return response.json(studentItems);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  async updateQuantity(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { student_id, item_id } = request.params;
      const { quantity } = request.body;

      const quantityInt = parseInt(quantity);

      const studentId = parseInt(student_id);
      const itemId = parseInt(item_id);

      const studentItem = await prisma.studentItem.findUnique({
        where: {
          student_id_item_id: {
            student_id: studentId,
            item_id: itemId,
          },
        },
        include: {
          student: true,
          item: true,
        },
      });
      if (!studentItem) {
        return response
          .status(404)
          .json({ error: "Item do aluno não encontrado!" });
      }
      await prisma.studentItem.update({
        where: {
          student_id_item_id: {
            student_id: studentId,
            item_id: itemId,
          },
        },
        data: {
          quantity: quantityInt,
        },
      });
      return response.json(studentItem);
    } catch (error) {
      console.log(error)
      return response.status(400).json({ error: error.message });
    }
  }
}
