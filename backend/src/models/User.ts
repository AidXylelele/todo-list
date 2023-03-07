import { sequelize } from '../config/database';
import Group from './Group';
import SubTask from './SubTask';
import Todo from './Todo';
import Token from './Token';
const { DataTypes } = require('sequelize');

const foreignKey = 'userId';

const User = sequelize.define(
  'users',
  {
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
  },
  {
    timestamps: false,
  }
);

User.hasMany(Todo, { as: 'todos', foreignKey });
User.hasMany(Token, { as: 'tokens', foreignKey });
User.hasMany(SubTask, { as: 'sub-tasks', foreignKey });
User.hasMany(Group, { as: 'groups', foreignKey });

export default User;
