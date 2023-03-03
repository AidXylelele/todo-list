import Group from '../models/Group';
import { IGroup } from '../types/group.type';

export class GroupService {
  static async create(userId: string, data: IGroup) {
    return Group.build({ ...data, userId });
  }

  static async delete(userId: string, id: string) {
    return Group.destroy({ where: { id, userId } });
  }

  static async getAll(userId: string) {
    return await Group.findAll({ where: { userId } });
  }

  static async findById(id: string, userId: string) {
    return Group.findOne({ where: { id } });
  }
}
