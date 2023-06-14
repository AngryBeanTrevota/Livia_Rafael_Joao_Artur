import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCient";
import { Prisma } from "@prisma/client";
import { Sql } from "@prisma/client/runtime";

export class itemController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const {
        name,
        image,
        image_chibi,
        quotes,
        is_character,
        description,
        bonus,
        colors,
        rarity,
      } = request.body;

      const item = await prismaClient.item.create({
        data: {
          name: name,
          image: image,

          is_character: is_character,
          description: description,
          bonus: bonus,
          colors: colors,
          rarity: rarity,
          image_chibi: image_chibi ?? undefined,
          quotes: quotes ?? undefined,
        },
      });
      return response.json(item);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async createMany(request: Request, response: Response): Promise<Response> {
    try {
      const items = request.body as Prisma.ItemCreateInput[];
      const createdItems = await prismaClient.item.createMany({
        data: items,
      });
      return response.json(createdItems);
    }
    catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }
 

  async view(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const item = await prismaClient.item.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (!item) {
        return response
          .status(404)
          .json({ error: "Item não encontrado!" });
      }
      return response.json(item);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async index(request: Request, response: Response): Promise<Response> {
    try {
      const items = await prismaClient.item.findMany();
      return response.json(items);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const {
        name,
        image,
        image_chibi,
        quotes,
        is_character,
        description,
        bonus,
        colors,
        rarity,
        student_ids, 
      } = request.body;

      const updateData: Prisma.ItemUpdateInput = {
        name: name ?? undefined,
        image: image ?? undefined,
        is_character: is_character ?? undefined,
        description: description ?? undefined,
        bonus: bonus ?? undefined,
        colors: colors ?? undefined,
        rarity: rarity ?? undefined,
        image_chibi: image_chibi ?? undefined,
        quotes: quotes ?? undefined,
        students: student_ids
          ? { set: student_ids.map((id: number) => ({ id })) }
          : undefined,
      };

      const item = await prismaClient.item.update({
        where: {
          id: Number(id),
        },
        data: updateData,
      });
      return response.json(item);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const item = await prismaClient.item.delete({
        where: {
          id: Number(id),
        },
      });
      return response.json(item);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

    async deleteAll(request: Request, response: Response): Promise<Response> {
    try {
      await prismaClient.item.deleteMany();
      //zerar o auto incremento
      await prismaClient.$executeRaw<Sql>`ALTER SEQUENCE "items_id_seq" RESTART WITH 1;`;
      return response.json("Itens deletados com sucesso!");
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }
}