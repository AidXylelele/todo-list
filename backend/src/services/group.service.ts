import Group from '../models/Group';
import { IGroup } from '../types/group.type';

export class GroupService {
  static async create(userId: string, data: IGroup) {
    return await Group.build({ ...data, userId }).save();
  }

  static async delete(userId: string, id: string) {
    return await Group.destroy({ where: { id, userId } });
  }

  static async getAll(userId: string) {
    return await Group.findAll({ where: { userId } });
  }

  static async getById(id: string, userId: string) {
    return await Group.findOne({ where: { id } });
  }
}
