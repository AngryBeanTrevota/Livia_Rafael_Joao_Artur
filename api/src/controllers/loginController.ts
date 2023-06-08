import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../database/prismaCient";
import { Request, Response } from "express";

interface IRequest {
  registerStudent: string;
  password: string;
}

export class loginController {
  constructor() {
    this.login = this.login.bind(this);
  }

  async execute({ registerStudent, password }: IRequest, response: Response) {
    try {
      const student = await prismaClient.student.findUnique({
        where: {
          registerStudent: registerStudent,
        },
      });

      if (!student) {
        return response
          .status(403)
          .json({ error: "Matrícula ou senha inválidos!" });
      }

      const passwordMatch = await compare(password, student.password);

      if (!passwordMatch) {
        return response
          .status(403)
          .json({ error: "Matrícula ou senha inválidos!" });
      }

      const token = sign({}, "code", {
        subject: "student.id",
        expiresIn: "1h",
      });
      return { token };
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  async getUser(request: Request, response: Response) {
    const { registerStudent } = request.body;

    const student = await prismaClient.student.findUnique({
      where: {
        registerStudent: registerStudent,
      },
    });

    return student;
  }

  async login(request: Request, response: Response): Promise<Response> {
    const { registerStudent, password } = request.body;

    try {

      const token = await this.execute(
        {
          registerStudent,
          password,
        },
        response
      );

      const student = await this.getUser(request, response);
      return response.json({student, token});
    } catch (err) {
      return response.status(403).json({ error: err.message });
    }
  }
}
