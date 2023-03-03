import { GroupService } from '../services/group.service';
import { IGroupRequest } from '../types/group.type';

export class GroupController {
  static async getById(req: IGroupRequest) {
    const { params, user } = req;
    const groupId = params.id;
    const userId = user.id;
    return await GroupService.getById(userId, groupId);
  }

  static async getAll(req: IGroupRequest) {
    const { user } = req;
    return await GroupService.getAll(user.id);
  }

  static async create(req: IGroupRequest) {
    const { body, user } = req;
    const { id } = user;
    return await GroupService.create(id, body);
  }

  static async delete(req: IGroupRequest) {
    const { params, user } = req;
    const groupId = params.id;
    const userId = user.id;
    return await GroupService.delete(userId, groupId);
  }
}
