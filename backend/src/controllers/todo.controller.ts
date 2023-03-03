import { TodoService } from '../services/todo.service';
import { ITodoRequest, ITodo } from '../types/todos.type';

export class TodoController {
  static async getByIdTodo(req: ITodoRequest) {
    const { params, user } = req;
    const todoId = params.id;
    const userId = user.id;
    return await TodoService.getById(userId, todoId);
  }

  static async getAllTodo(req: ITodoRequest): Promise<ITodo[] | null> {
    const { user } = req;
    return await TodoService.getAll(user.id);
  }

  static async createTodo(req: ITodoRequest) {
    const { body, user } = req;
    const { id } = user;
    return await TodoService.create(id, body);
  }

  static async updateTodo(req: ITodoRequest) {
    const { body, params, user } = req;
    const todoId = params.id;
    const userId = user.id;
    return await TodoService.update(userId, todoId, body);
  }

  static async deleteTodo(req: ITodoRequest) {
    const { params, user } = req;
    const todoId = params.id;
    const userId = user.id;
    return await TodoService.delete(userId, todoId);
  }
}
