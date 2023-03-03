import Todo from '../models/Todo';
import { ITodo } from '../types/todos.type';

export class TodoService {
  static async create(data: ITodo) {
    return Todo.build(data);
  }

  static async update(id: string, data: ITodo) {
    return Todo.update(data, { where: { id } });
  }

  static async delete(id: string) {
    return Todo.destroy({ where: { id } });
  }

  static async findAll() {
    return Todo.findAll();
  }

  static async getAllTodosByUser(userId: string): Promise<ITodo[] | null> {
    return await Todo.findAll({ where: { userId } });
  }

  static async findById(id: string) {
    return Todo.findOne({ where: { id } });
  }
}
