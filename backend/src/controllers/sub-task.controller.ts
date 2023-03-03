import { ISubTaskRequest } from '../types/sub-task.types';
import { SubTaskService } from '../services/sub-task.service';

export class SubTaskController {
  static async getById(req: ISubTaskRequest) {
    const { params, user } = req;
    const taskId = params.id;
    const userId = user.id;
    return await SubTaskService.getById(userId, taskId);
  }

  static async getAll(req: ISubTaskRequest) {
    const { user } = req;
    return await SubTaskService.getAll(user.id);
  }

  static async create(req: ISubTaskRequest) {
    const { body, user } = req;
    const { id } = user;
    return await SubTaskService.create(id, body);
  }

  static async update(req: ISubTaskRequest) {
    const { body, params, user } = req;
    const todoId = params.id;
    const userId = user.id;
    return await SubTaskService.update(userId, todoId, body);
  }

  static async delete(req: ISubTaskRequest) {
    const { params, user } = req;
    const todoId = params.id;
    const userId = user.id;
    return await SubTaskService.delete(userId, todoId);
  }
}
