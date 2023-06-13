import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../database/prismaCient";
import e, { Request, Response } from "express";
import { json } from "stream/consumers";

interface IRequest {
  register: string;
  password: string;
  is_student: boolean;
}

export class loginController {
  constructor() {
    this.login = this.login.bind(this);
  }

  async execute(
    { register, password, is_student }: IRequest,
    response: Response
  ) {
    try {
      let user;
      if (is_student) {
        user = await prismaClient.student.findUnique({
          where: {
            registerStudent: register,
          },
        });
      } else {
        user = await prismaClient.teacher.findUnique({
          where: {
            registerTeacher: register,
          },
        });
      }

      if (!user) {
        return response
          .status(403)
          .json({ error: "Matrícula ou senha inválidos!" });
      }

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        return response
          .status(403)
          .json({ error: "Matrícula ou senha inválidos!" });
      }

      const token = sign({}, "code", {
        subject: "user.id",
        expiresIn: "60h",
      });
      return { token };
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async login(request: Request, response: Response): Promise<Response> {
    const { register, password, is_student } = request.body;
    try {
      const token = await this.execute(
        {
          register,
          password,
          is_student,
        },
        response
      );
      response.cookie("token", token, { httpOnly: true, secure: true });

      let user;
      if (is_student) {
        user = await prismaClient.student.findUnique({
          where: {
            registerStudent: register,
          },
          include: {
            classroom: true,
            itens: true,
          },
        });
      } else {
        user = await prismaClient.teacher.findUnique({
          where: {
            registerTeacher: register,
          },
          include: {
            classroom: true,
          },
        });
      }

      return response.json(user);
    } catch (err) {
      return response.status(403).json({ error: err.message });
    }
  }
}
