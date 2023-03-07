import { GroupService } from '../services/group.service';
import { IGroupRequest } from '../types/group.type';

export class GroupController {
  static async getById(req: IGroupRequest) {
    const { params, user } = req;
    const { userId } = user;
    const groupId = params.id;
    return await GroupService.getById(userId, groupId);
  }

  static async getAll(req: IGroupRequest) {
    const { userId } = req.user;
    return await GroupService.getAll(userId);
  }

  static async create(req: IGroupRequest) {
    const { body, user } = req;
    const { userId } = user;
    return await GroupService.create(userId, body);
  }

  static async delete(req: IGroupRequest) {
    const { params, user } = req;
    const { userId } = user;
    const groupId = params.id;
    return await GroupService.delete(userId, groupId);
  }
}
