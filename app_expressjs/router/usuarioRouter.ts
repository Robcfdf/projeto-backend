import { Router } from "express";
import { registrarUsuario, loginUsuario, mostrarFormularioRegistro, mostrarFormularioLogin } from "../controllers/usuarioController";

const router = Router();

// Formulários (GET)
router.get("/register", mostrarFormularioRegistro);
router.get("/login", mostrarFormularioLogin);

// Ações (POST)
router.post("/register", registrarUsuario);
router.post("/login", loginUsuario);

export default router;
