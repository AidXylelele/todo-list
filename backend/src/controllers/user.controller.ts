import { Request } from 'express';
import UserService from '../services/user.service';

export class UserController {
  static async signUp(req: Request) {
    return await UserService.signUp(req.body);
  }

  static async signIn(req: Request) {
    return await UserService.signIn(req.body);
  }

  static async refresh(req: Request) {
    const { cookies } = req;
    return await UserService.refresh(cookies.refreshToken);
  }
}
