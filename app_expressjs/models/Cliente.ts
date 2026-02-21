import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db/db";

interface ClienteAttributes {
  id: number;
  nome: string;
  email: string;
}

interface ClienteCreationAttributes extends Optional<ClienteAttributes, "id"> {}

class Cliente extends Model<ClienteAttributes, ClienteCreationAttributes> implements ClienteAttributes {
  public id!: number;
  public nome!: string;
  public email!: string;
}

Cliente.init({
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
    allowNull: false
  }
}, {
  sequelize,
  tableName: "clientes",
  timestamps: false
});

export default Cliente;
