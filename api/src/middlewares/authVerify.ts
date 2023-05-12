import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function authVerify(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ error: "Token não encontrado!" });
  }
  const [, token] = authToken.split(" ");
  try {
    verify(token, "code");
    return next();
  } catch (err) {
    return response.status(401).json({ error: "Token inválido!" });
  }
}
