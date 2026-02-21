import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

import usuarioRouter from "./router/usuarioRouter";
import clienteRouter from "./router/clienteRouter";
import { autenticar } from "./middleware/auth";

const app = express();

// Configuração do Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middlewares globais
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Tela principal
app.get("/", (req, res) => {
  res.render("index");
});

// Rotas públicas
app.use("/usuarios", usuarioRouter);

// Rotas protegidas
app.use("/clientes", autenticar, clienteRouter);

// Middleware global de erros
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Erro interno, tente novamente mais tarde.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
