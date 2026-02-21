import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const autenticar = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.token || (req.headers["authorization"]?.split(" ")[1]);

  if (!token) return res.redirect("/usuarios/login");

  try {
    const usuario = jwt.verify(token, process.env.JWT_SECRET || "segredo");
    (req as any).usuario = usuario;
    next();
  } catch (err) {
    return res.redirect("/usuarios/login");
  }
};
