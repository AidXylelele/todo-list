import { PasswordUtil } from '../utils/password.util';
import { IUser } from '../types/user.type';
import { CustomError } from '../middlewares/error.middleware';
import User from '../models/User';

export default class UserService {
  static async createUser(user: IUser): Promise<IUser> {
    user.password = PasswordUtil.hash(user.password);
    return User.build(user);
  }

  static async findUserByEmail(email: string): Promise<IUser | null> {
    return await User.findOne({ where: { email } });
  }

  static async findUserById(id: string): Promise<IUser | null> {
    return await User.findOne({ where: { id } });
  }

  static async loginUser(data: IUser): Promise<IUser | null> {
    const user = await UserService.findUserByEmail(data.email);

    if (!user) {
      throw new CustomError(404, 'Wrong email or password');
    }

    const isPasswordEquals = PasswordUtil.compare(user.password, data.password);
    if (!isPasswordEquals) {
      throw new CustomError(404, 'Wrong email or password');
    }
    return user;
  }
}
