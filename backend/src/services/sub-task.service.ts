import SubTask from '../models/SubTask';
import { ITodo } from '../types/todos.type';

export class SubTaskService {
  static async create(userId: string, data: ITodo) {
    return SubTask.build({ ...data, userId }).save();
  }

  static async update(userId: string, id: string, data: ITodo) {
    return SubTask.update(data, { where: { id } });
  }

  static async delete(userId: string, id: string) {
    return SubTask.destroy({ where: { id } });
  }

  static async getAll(userId: string) {
    return await SubTask.findAll({ where: { userId } });
  }

  static async getById(userId: string, id: string) {
    return SubTask.findOne({ where: { id } });
  }
}
