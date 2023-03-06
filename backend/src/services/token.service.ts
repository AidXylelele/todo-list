import Token from '../models/Token';
import { tokenUtils } from '../utils/token.util';
import UserService from './user.service';

export class TokenService {
  static async getByToken(token: string) {
    return await Token.findOne({ where: { token } });
  }

  static async getByUserId(userId: string) {
    return await Token.findOne({ where: { userId } });
  }

  static async create(user: any) {
    const tokens = tokenUtils.generateTokens(user);
    try {
        await Token.create({
          token: tokens.refreshToken,
          userId: user.id,
        });
    } catch (error) {
        console.log(error)
    }
    
    return tokens;
  }

  static async update(userId: string) {
    const user = await UserService.getById(userId);
    const tokens = tokenUtils.generateTokens(user.dataValues);
    try {
      await Token.update(
        {
          token: tokens.refreshToken,
        },
        { where: { userId } }
      );
    } catch (error) {
      console.log(user);
    }

    return { ...tokens, user: user.dataValues };
  }

  static async delete(userId: string) {
    return await Token.destroy({ where: { userId } });
  }
}
