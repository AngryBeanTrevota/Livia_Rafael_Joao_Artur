import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../database/prismaCient";
import { Request, Response } from "express";

interface IRequest {
  userType: string;
  register: string;
  password: string;
}


export class loginController {
  async execute({ register, password, userType }: IRequest, response: Response) {
    try {
      let user:any;

      if (userType === "teacher") {
        user = await prismaClient.teacher.findUnique({
          where: {
            registerTeacher: register,
          },
        });
      } else if (userType === "student") {
        user = await prismaClient.student.findUnique({
          where: {
            registerStudent: register,
          },
        });
      } else {
        return response
          .status(400)
          .json({ error: "Tipo de usuário inválido!" });
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
        subject: user.id,
        expiresIn: "1h",
      });

      return { token };
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async login(request: Request, response: Response): Promise<Response> {
    const { register, password, userType } = request.body;

    try {
      const token = await this.execute(
        {
          register,
          password,
          userType,
        },
        response
      );

      return response.json(token);
    } catch (err) {
      return response.status(403).json({ error: err.message });
    }
  }
}