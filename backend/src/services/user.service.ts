import { PasswordUtil } from '../utils/password.util';
import { IUserSignUp, IUserSignIn } from '../types/user.type';
import { CustomError } from '../middlewares/error.middleware';
import User from '../models/User';
import { TokenService } from './token.service';

export default class UserService {
  static async signUp(user: IUserSignUp) {
    user.password = PasswordUtil.hash(user.password);
    const createdUser = await User.create(user);
    return await TokenService.create(createdUser.dataValues);
  }

  static async getByEmail(email: string) {
    return await User.findOne({ where: { email } });
  }

  static async getById(id: string) {
    return await User.findOne({ where: { id } });
  }

  static async refresh(oldToken: string) {
    const tokenRecord = await TokenService.getByToken(oldToken);
    return await TokenService.update(tokenRecord.dataValues.userId);
  }

  static async signIn(data: IUserSignIn) {
    const user = await UserService.getByEmail(data.email);

    if (!user) {
      throw new CustomError(404, 'Wrong email or password');
    }

    const { dataValues } = user;
    const isPasswordEquals = PasswordUtil.compare(
      data.password,
      dataValues.password
    );

    if (!isPasswordEquals) {
      throw new CustomError(404, 'Wrong email or password');
    }

    return await TokenService.update(dataValues.id);
  }
}
