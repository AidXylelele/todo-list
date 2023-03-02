import { sequelize } from "../config/database";
import Todo from "./Todo";
import User from "./User";
const { DataTypes } = require("sequelize");

const Group = sequelize.define("groups", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: { type: DataTypes.TEXT, allowNull: false },
});

Group.belongsTo(User);
Group.hasMany(Todo);

export default Group;
