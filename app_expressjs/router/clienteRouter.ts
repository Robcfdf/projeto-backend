import { Router } from "express";
import { listarClientes, obterCliente, mostrarFormulario, criarCliente, editarCliente, deletarCliente } from "../controllers/clienteController";

const router = Router();

router.get("/", listarClientes);
router.get("/create", mostrarFormulario);
router.post("/", criarCliente);
router.get("/:id", obterCliente);
router.post("/:id", editarCliente);
router.post("/:id/delete", deletarCliente);

export default router;
