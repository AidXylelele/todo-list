import SubTask from '../models/SubTask';
import Todo from '../models/Todo';
import { ITodo, ITodoDBRecord } from '../types/todos.type';

export class TodoService {
  static async create(
    userId: string,
    data: ITodo
  ): Promise<ITodoDBRecord | null> {
    return await Todo.build({ ...data, userId }).save();
  }

  static async update(
    userId: string,
    id: string,
    data: ITodo
  ): Promise<ITodoDBRecord | null> {
    await Todo.update(data, { where: { id, userId } });
    return await TodoService.getById(userId, id);
  }

  static async delete(userId: string, id: string) {
    return await Todo.destroy({ where: { id, userId } });
  }

  static async getAll(userId: string): Promise<ITodoDBRecord[] | null> {
    return await Todo.findAll({
      where: { userId },
    });
  }

  static async getById(
    userId: string,
    id: string
  ): Promise<ITodoDBRecord | null> {
    return await Todo.findOne({
      where: { id, userId },
      include: [{ as: 'sub-tasks', model: SubTask }],
    });
  }
}
