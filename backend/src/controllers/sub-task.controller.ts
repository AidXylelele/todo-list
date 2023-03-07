import { ISubTaskRequest } from '../types/sub-task.types';
import { SubTaskService } from '../services/sub-task.service';

export class SubTaskController {
  static async getById(req: ISubTaskRequest) {
    const { params, user } = req;
    const taskId = params.id;
    const { userId } = user;
    return await SubTaskService.getById(userId, taskId);
  }

  static async getAll(req: ISubTaskRequest) {
    const { userId } = req.user;
    return await SubTaskService.getAll(userId);
  }

  static async create(req: ISubTaskRequest) {
    const { body, user } = req;
    const { userId } = user;
    return await SubTaskService.create(userId, body);
  }

  static async update(req: ISubTaskRequest) {
    const { body, params, user } = req;
    const { userId } = user;
    const todoId = params.id;
    return await SubTaskService.update(userId, todoId, body);
  }

  static async delete(req: ISubTaskRequest) {
    const { params, user } = req;
    const { userId } = user;
    const todoId = params.id;
    return await SubTaskService.delete(userId, todoId);
  }
}
