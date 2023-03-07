import { GroupService } from '../services/group.service';
import { IGroupDBRecord, IGroupRequest } from '../types/group.type';

export class GroupController {
  static async getById(req: IGroupRequest): Promise<IGroupDBRecord | null> {
    const { params, user } = req;
    const { userId } = user;
    const groupId = params.id;
    return await GroupService.getById(userId, groupId);
  }

  static async getAll(req: IGroupRequest): Promise<IGroupDBRecord[] | null> {
    const { userId } = req.user;
    return await GroupService.getAll(userId);
  }

  static async create(req: IGroupRequest): Promise<IGroupDBRecord | null> {
    const { body, user } = req;
    const { userId } = user;
    return await GroupService.create(userId, body);
  }

  static async update(req: IGroupRequest): Promise<IGroupDBRecord | null> {
    const { body, params, user } = req;
    const { userId } = user;
    const groupId = params.id;
    return await GroupService.update(userId, groupId, body);
  }

  static async delete(req: IGroupRequest) {
    const { params, user } = req;
    const { userId } = user;
    const groupId = params.id;
    return await GroupService.delete(userId, groupId);
  }
}
