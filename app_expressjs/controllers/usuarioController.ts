import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario";

// Mostrar formulário de registro
export const mostrarFormularioRegistro = (req: Request, res: Response) => {
  res.render("register");
};

// Mostrar formulário de login
export const mostrarFormularioLogin = (req: Request, res: Response) => {
  res.render("login");
};

// Cadastro
export const registrarUsuario = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;
  const senhaHash = await bcrypt.hash(senha, 10);
  await Usuario.create({ nome, email, senha: senhaHash });
  res.redirect("/usuarios/login");
};

// Login
export const loginUsuario = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) return res.status(401).send("Usuário não encontrado");

  const senhaValida = await bcrypt.compare(senha, usuario.senha);
  if (!senhaValida) return res.status(401).send("Senha inválida");

  const token = jwt.sign(
    { id: usuario.id, email: usuario.email },
    process.env.JWT_SECRET || "segredo",
    { expiresIn: "1h" }
  );

  // Salva token em cookie para navegação automática
  res.cookie("token", token, { httpOnly: true });

  // Redireciona para clientes
  res.redirect("/clientes");
};
