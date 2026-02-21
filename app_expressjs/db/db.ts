import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import path from "path";

// Carrega o .env antes de usar process.env
dotenv.config({ path: path.resolve("C:/Users/T-GAMER/OneDrive/Área de Trabalho/node/app_expressjs/.env") });

// Teste: imprime variáveis do .env
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PORT:", process.env.DB_PORT);

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    dialect: "mysql"
  }
);

export default sequelize;
