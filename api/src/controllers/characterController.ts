import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCient";

export class characterController {
    async create(request: Request, response: Response): Promise<Response> {
        try{
            const { name, image } = request.body;
            const character = await prismaClient.character.create({
                data: {
                    name: name,
                    image: image,
                },
            });
            return response.json(character);
        }
        catch(err){
            return response.status(500).json({ error: err.message });
        }
    }

    async view(request: Request, response: Response): Promise<Response> {
        try{
            const { id } = request.params;
            const character = await prismaClient.character.findUnique({
                where: {
                    id: Number(id),
                },
            });
            if(!character){
                return response.status(404).json({ error: "Personagem não encontrado!" });
            }
            return response.json(character);
        }
        catch(err){
            return response.status(500).json({ error: err.message });
        }
    }

    async index(request: Request, response: Response): Promise<Response> {
        try{
            const characters = await prismaClient.character.findMany();
            return response.json(characters);
        }
        catch(err){
            return response.status(500).json({ error: err.message });
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        try{
            const { id } = request.params;
            const { name, image } = request.body;
            const character = await prismaClient.character.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name: name,
                    image: image,
                }
            });
            return response.json(character);
        }
        catch(err){
            return response.status(500).json({ error: err.message });
        }
    }

    async delete(request: Request, response: Response): Promise<Response> {
        try{
            const { id } = request.params;
            const character = await prismaClient.character.delete({
                where: {
                    id: Number(id)
                }
            });
            return response.json(character);
        }
        catch(err){
            return response.status(500).json({ error: err.message });
        }
    }
}