import { sequelize } from "../config/database";
import Group from "./Group";
import Todo from "./Todo";
const { DataTypes } = require("sequelize");

const User = sequelize.define("users", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Todo);
User.hasMany(Group);

export default User;
