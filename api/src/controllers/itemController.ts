import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCient";

export class itemController {
    async create(request: Request, response: Response): Promise<Response> {
        try{
            const { name, image } = request.body;
            const item = await prismaClient.item.create({
                data: {
                    name: name,
                    image: image,
                },
            });
            return response.json(item);
        }
        catch(err){
            return response.status(500).json({ error: err.message });
        }
    }

    async view(request: Request, response: Response): Promise<Response> {
        try{
            const { id } = request.params;
            const item = await prismaClient.item.findUnique({
                where: {
                    id: Number(id),
                },
            });
            if(!item){
                return response.status(404).json({ error: "Personagem não encontrado!" });
            }
            return response.json(item);
        }
        catch(err){
            return response.status(500).json({ error: err.message });
        }
    }

    async index(request: Request, response: Response): Promise<Response> {
        try{
            const items = await prismaClient.item.findMany();
            return response.json(items);
        }
        catch(err){
            return response.status(500).json({ error: err.message });
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        try{
            const { id } = request.params;
            const { name, image } = request.body;
            const item = await prismaClient.item.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name: name,
                    image: image,
                }
            });
            return response.json(item);
        }
        catch(err){
            return response.status(500).json({ error: err.message });
        }
    }

    async delete(request: Request, response: Response): Promise<Response> {
        try{
            const { id } = request.params;
            const item = await prismaClient.item.delete({
                where: {
                    id: Number(id)
                }
            });
            return response.json(item);
        }
        catch(err){
            return response.status(500).json({ error: err.message });
        }
    }
}