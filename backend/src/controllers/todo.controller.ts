import { TodoService } from '../services/todo.service';
import { ITodoRequest, ITodo } from '../types/todos.type';

export class TodoController {
  static async getById(req: ITodoRequest) {
    const { params, user } = req;
    const { userId } = user;
    const todoId = params.id;
    return await TodoService.getById(userId, todoId);
  }

  static async getAll(req: ITodoRequest): Promise<ITodo[] | null> {
    const { userId } = req.user;
    return await TodoService.getAll(userId);
  }

  static async create(req: ITodoRequest) {
    const { body, user } = req;
    const { userId } = user;
    return await TodoService.create(userId, body);
  }

  static async update(req: ITodoRequest) {
    const { body, params, user } = req;
    const { userId } = user;
    const todoId = params.id;
    return await TodoService.update(userId, todoId, body);
  }

  static async delete(req: ITodoRequest) {
    const { params, user } = req;
    const { userId } = user;
    const todoId = params.id;
    return await TodoService.delete(userId, todoId);
  }
}
