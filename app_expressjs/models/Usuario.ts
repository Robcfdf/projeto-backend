import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db/db";

interface UsuarioAttributes {
  id: number;
  nome: string;
  email: string;
  senha: string; // será armazenada com hash
}

interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, "id"> {}

class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  public id!: number;
  public nome!: string;
  public email!: string;
  public senha!: string;
}

Usuario.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING(200), // hash da senha
    allowNull: false
  }
}, {
  sequelize,
  tableName: "usuarios",
  timestamps: false
});

export default Usuario;
