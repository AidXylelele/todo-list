import { TodoService } from "../services/todo.service";
import { IFiltersRequest, ITodoRequest, ITodo } from "../types/todos.type";

export class TodoController {
  static async getByIdTodo(req: ITodoRequest) {
    const { params } = req;
    const { id } = params;
    return await TodoService.findById(id);
  }

  static async getAllTodo(req: IFiltersRequest): Promise<ITodo[] | null> {
    const { user } = req;
    return await TodoService.getAllTodosByUser(user.id);
  }

  static async createTodo(req: ITodoRequest) {
    const { body } = req;
    return await TodoService.create(body);
  }

  static async updateTodo(req: ITodoRequest) {
    const { body, params } = req;
    const { id } = params;
    return await TodoService.update(id, body);
  }

  static async deleteTodo(req: ITodoRequest) {
    const { params } = req;
    const { id } = params;
    return await TodoService.delete(id);
  }
}
