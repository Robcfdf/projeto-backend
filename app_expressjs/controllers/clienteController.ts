import { Request, Response } from "express";
import ClienteService from "../services/clienteService";

// READ - listar todos
export const listarClientes = async (req: Request, res: Response) => {
  const clientes = await ClienteService.listar();
  res.render("clientes", { clientes });
};

// READ - obter por ID (para edição)
export const obterCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const cliente = await ClienteService.obter(Number(id));
  res.render("edit", { cliente });
};

// CREATE - mostrar formulário vazio
export const mostrarFormulario = (req: Request, res: Response) => {
  res.render("create");
};

// CREATE - salvar novo cliente
export const criarCliente = async (req: Request, res: Response) => {
  const { nome, email } = req.body;
  await ClienteService.criar(nome, email);
  res.redirect("/clientes");
};

// UPDATE
export const editarCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  await ClienteService.atualizar(Number(id), nome, email);
  res.redirect("/clientes");
};

// DELETE
export const deletarCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  await ClienteService.excluir(Number(id));
  res.redirect("/clientes");
};
