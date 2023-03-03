import { PasswordUtil } from '../utils/password.util';
import { IUserSignUp, IUserSignIn } from '../types/user.type';
import { CustomError } from '../middlewares/error.middleware';
import User from '../models/User';

export default class UserService {
  static async createUser(user: IUserSignUp) {
    user.password = PasswordUtil.hash(user.password);
    return await User.build(user).save();
  }

  static async findUserByEmail(email: string) {
    return await User.findOne({ where: { email } });
  }

  static async findUserById(id: string) {
    return await User.findOne({ where: { id } });
  }

  static async loginUser(data: IUserSignIn) {
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
