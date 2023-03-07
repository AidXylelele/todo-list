import Todo from '../models/Todo';
import Group from '../models/Group';
import { IGroup, IGroupDBRecord } from '../types/group.type';

export class GroupService {
  static async create(
    userId: string,
    data: IGroup
  ): Promise<IGroupDBRecord | null> {
    return await Group.build({ ...data, userId }).save();
  }

  static async update(
    userId: string,
    id: string,
    data: IGroup
  ): Promise<IGroupDBRecord | null> {
    await Group.update(data, { where: { id, userId } });
    return await GroupService.getById(userId, id);
  }

  static async delete(userId: string, id: string) {
    return await Group.destroy({ where: { id, userId } });
  }

  static async getAll(userId: string): Promise<IGroupDBRecord[] | null> {
    return await Group.findAll({ where: { userId } });
  }

  static async getById(
    userId: string,
    id: string
  ): Promise<IGroupDBRecord | null> {
    return await Group.findOne({
      where: { id, userId },
      include: [{ as: 'todos', model: Todo }],
    });
  }
}
