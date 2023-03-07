import { sequelize } from '../config/database';
const { DataTypes } = require('sequelize');

const SubTask = sequelize.define(
  'subtasks',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: { type: DataTypes.TEXT, allowNull: false },
    isDone: { type: DataTypes.BOOLEAN, allowNull: false, default: false },
  },
  {
    timestamps: false,
  }
);

export default SubTask;
