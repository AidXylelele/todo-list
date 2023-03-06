import { TodoService } from '../services/todo.service';
import { ITodoRequest, ITodo } from '../types/todos.type';

export class TodoController {
  static async getById(req: ITodoRequest) {
    const { params, user } = req;
    
    const todoId = params.id;
    const userId = user.id;
    console.log('HUI', userId);
    return await TodoService.getById(userId, todoId);
  }

  static async getAll(req: ITodoRequest): Promise<ITodo[] | null> {
    const { user } = req;
    console.log(user)
    return await TodoService.getAll(user.id);
  }

  static async create(req: ITodoRequest) {
    const { body, user } = req;
    const { id } = user;
    return await TodoService.create(id, body);
  }

  static async update(req: ITodoRequest) {
    const { body, params, user } = req;
    const todoId = params.id;
    const userId = user.id;
    return await TodoService.update(userId, todoId, body);
  }

  static async delete(req: ITodoRequest) {
    const { params, user } = req;
    const todoId = params.id;
    const userId = user.id;
    return await TodoService.delete(userId, todoId);
  }
}
