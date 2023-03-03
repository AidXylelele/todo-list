import { sequelize } from '../config/database';
import SubTask from './SubTask';
const { DataTypes } = require('sequelize');

const Todo = sequelize.define('todos', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: { type: DataTypes.TEXT, allowNull: false },
  isDone: { type: DataTypes.BOOLEAN, default: false, allowNull: false },
});

Todo.hasMany(SubTask, {
  as: 'sub-tasks',
  foreignKey: 'todoId',
});

export default Todo;
