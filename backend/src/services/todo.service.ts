import SubTask from '../models/SubTask';
import Todo from '../models/Todo';
import { ITodo } from '../types/todos.type';

export class TodoService {
  static async create(userId: string, data: ITodo) {
    return await Todo.build({ ...data, userId }).save();
  }

  static async update(userId: string, id: string, data: ITodo) {
    return await Todo.update(data, { where: { id, userId } });
  }

  static async delete(userId: string, id: string) {
    return await Todo.destroy({ where: { id, userId } });
  }

  static async getAll(userId: string) {
    return await Todo.findAll({
      where: { userId },
      include: [
        {
          model: SubTask,
        },
      ],
    });
  }

  static async getById(userId: string, id: string): Promise<ITodo | null> {
    return await Todo.findOne({
      where: { id, userId },
      include: [
        {
          model: SubTask,
          where: {
            todoId: id,
            userId,
          },
        },
      ],
    });
  }
}
