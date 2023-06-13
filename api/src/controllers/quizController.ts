import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCient";

export class quizController {
    async create(request: Request, response: Response): Promise<Response> {
        try {
            const { title, option1, option2, option3, option4, answer } = request.body;
            const options = [option1, option2, option3, option4];

            const quiz = await prismaClient.quiz.create({
                data: {
                    title: title,
                    options: options,
                    answer: answer,                
                },
            });

            return response.json(quiz);
        } catch (err) {
            return response.status(500).json({ error: err.message });
        }
    }

    async view(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const quiz = await prismaClient.quiz.findUnique({
                where: {
                    id: Number(id),
                },
            });

            if (!quiz) {
                return response.status(404).json({ error: "Quiz não encontrado!" });
            }

            return response.json(quiz);
        } catch (err) {
            return response.status(500).json({ error: err.message });
        }
    }

    async index(request: Request, response: Response): Promise<Response> {
        try {
            const quizzes = await prismaClient.quiz.findMany();

            return response.json(quizzes);
        } catch (err) {
            return response.status(500).json({ error: err.message });
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const { title, option1, option2, option3, option4, answer } = request.body;
            const options = [option1, option2, option3, option4];

            const quiz = await prismaClient.quiz.update({
                where: {
                    id: Number(id),
                },
                data: {
                    title: title,
                    options: options,
                    answer: answer,                
                },
            });

            return response.json(quiz);
        } catch (err) {
            return response.status(500).json({ error: err.message });
        }
    }

    async delete(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            await prismaClient.quiz.delete({
                where: {
                    id: Number(id),
                },
            });

            return response.status(204).send();
        } catch (err) {
            return response.status(500).json({ error: err.message });
        }
    }

/*     async indexByClass(request: Request, response: Response): Promise<Response> {
        try {
            const { classId } = request.params;

            const quizzes = await prismaClient.quiz.findMany({
                where: {
                    classId: Number(classId),
                },
            });

            return response.json(quizzes);
        } catch (err) {
            return response.status(500).json({ error: err.message });
        }
    } */
}