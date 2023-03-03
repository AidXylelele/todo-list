import SubTask from '../models/SubTask';
import { ITodo } from '../types/todos.type';

export class SubTaskService {
  static async create(userId: string, data: ITodo) {
    return SubTask.build(data);
  }

  static async update(id: string, data: ITodo) {
    return SubTask.update(data, { where: { id } });
  }

  static async delete(id: string) {
    return SubTask.destroy({ where: { id } });
  }

  static async findAll() {
    return SubTask.findAll();
  }

  static async getAllByUser(userId: string) {
    return await SubTask.findAll({ where: { userId } });
  }

  static async findById(id: string) {
    return SubTask.findOne({ where: { id } });
  }
}
