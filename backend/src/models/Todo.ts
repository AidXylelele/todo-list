import { sequelize } from "../config/database";
import Group from "./Group";
import User from "./User";
const { DataTypes } = require("sequelize");

const Todo = sequelize.define("todos", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  text: { type: DataTypes.TEXT, allowNull: false },
  isDone: { type: DataTypes.BOOLEAN, default: false, allowNull: false },
});

Todo.belongsTo(User);
Todo.hasOne(Group);

export default Todo;
