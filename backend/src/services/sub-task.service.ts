import { ISubTaskDBRecord } from '../types/sub-task.types';
import SubTask from '../models/SubTask';
import { ITodo } from '../types/todos.type';

export class SubTaskService {
  static async create(
    userId: string,
    data: ITodo
  ): Promise<ISubTaskDBRecord | null> {
    return await SubTask.build({ ...data, userId }).save();
  }

  static async update(
    userId: string,
    id: string,
    data: ITodo
  ): Promise<ISubTaskDBRecord | null> {
    await SubTask.update(data, { where: { id, userId } });
    return await SubTaskService.getById(userId, id);
  }

  static async delete(userId: string, id: string) {
    return await SubTask.destroy({ where: { id, userId } });
  }

  static async getAll(userId: string): Promise<ISubTaskDBRecord[] | null> {
    return await SubTask.findAll({ where: { userId } });
  }

  static async getById(
    userId: string,
    id: string
  ): Promise<ISubTaskDBRecord | null> {
    return await SubTask.findOne({ where: { id, userId } });
  }
}
