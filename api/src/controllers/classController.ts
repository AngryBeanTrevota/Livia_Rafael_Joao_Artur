import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCient";

export class classController {
    async create(request: Request, response: Response): Promise<Response> {
        try{
            const { name, password, teacherId } = request.body;
            const classe = await prismaClient.class.create({
                data: {
                    name: name,
                    password: password,
                    teacherId: teacherId,
                }
            });
        }catch(err){
            return response.status(500).json({ error: err.message });
        }
    }

    async view(request: Request, response: Response): Promise<Response> {
        try{
            const { id } = request.params;
            const classe = await prismaClient.class.findUnique({
                where: {
                    id: Number(id),
                },
            });
            if(!classe){
                return response.status(404).json({ error: "Turma não encontrada!" });
            }
            return response.json(classe);
        }catch(err){
            return response.status(500).json({ error: err.message });
        }
    }

    async index(request: Request, response: Response): Promise<Response> {
        try{
            const classes = await prismaClient.class.findMany();
            return response.json(classes);
        }catch(err){
            return response.status(500).json({ error: err.message });
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        try{
            const { id } = request.params;
            const { name, password, teacherId } = request.body;
            const classe = await prismaClient.class.update({
                where: {
                    id: Number(id),
                },
                data: {
                    name: name,
                    password: password,
                    teacherId: teacherId,
                },
            });
            return response.json(classe);
        }catch(err){
            return response.status(500).json({ error: err.message });
        }
    }

    async delete(request: Request, response: Response): Promise<Response> {
        try{
            const { id } = request.params;
            await prismaClient.class.delete({
                where: {
                    id: Number(id),
                },
            });
            return response.status(204).send();
        }catch(err){
            return response.status(500).json({ error: err.message });
        }
    }
}