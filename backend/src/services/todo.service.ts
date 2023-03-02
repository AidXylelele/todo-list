import Todo from "../models/Todo";
import { ITodo } from "../types/todos.type";


export class TodoService {
  static async create(data: ITodo) {
    const newTodo = Todo.create(data);
    return newTodo.save();
  }

  static async update(_id: string, data: ITodo) {
    return Todo.findOneAndUpdate({ _id }, data, { new: true }).exec();
  }

  static async delete(_id: string) {
    return Todo.deleteOne({ _id });
  }

  static async findAll() {
    return Todo.find();
  }

  static async getAllTodosByUser(userId: string): Promise<ITodo[] | null> {
    const todos = await Todo.find({ where: { userId } });
    return todos;
  }

  static async findById(_id: string) {
    return Todo.findOne({ _id });
  }
}
