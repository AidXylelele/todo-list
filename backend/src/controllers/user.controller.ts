import { Request, Response } from 'express';
import UserService from '../services/user.service';

export class UserController {
  static async signUp(req: Request, res: any) {
    const { refreshToken, accessToken } = await UserService.signUp(req.body);
    res.cookie('refreshToken', refreshToken);
    return accessToken;
  }

  static async signIn(req: Request, res: any) {
    const { refreshToken, accessToken } = await UserService.signIn(req.body);
    res.cookie('refreshToken', refreshToken);
    return accessToken;
  }

  static async refresh(req: Request, res: any) {
    const { cookies } = req;
    const { refreshToken, accessToken } = await UserService.refresh(
      cookies.refreshToken
    );
    res.cookie('refreshToken', refreshToken);
    return accessToken;
  }
}
