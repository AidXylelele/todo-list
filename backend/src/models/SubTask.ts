import { sequelize } from "../config/database";
import User from "./User";
const { DataTypes } = require("sequelize");

const SubTask = sequelize.define("subtasks", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: { type: DataTypes.TEXT, allowNull: false },
});

SubTask.belongsTo(User);

export default SubTask;
