import { sequelize } from '../config/database';
import Todo from './Todo';
const { DataTypes } = require('sequelize');

const Group = sequelize.define('groups', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: { type: DataTypes.TEXT, allowNull: false },
});

Group.hasMany(Todo, {
  as: 'todos',
  foreignKey: 'groupId',
});

export default Group;
