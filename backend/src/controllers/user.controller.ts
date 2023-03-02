import { Request } from "express";
import UserService from "../services/user.service";
import { decodeToken, genenerateToken } from "../utils/token.util";

export class UserController {
  static async create(req: Request) {
    const user = await UserService.createUser(req.body);
    return genenerateToken({ email: user.email, userId: user._id });
  }

  static async login(req: Request) {
    const user = await UserService.loginUser(req.body);
    return genenerateToken({ email: user!.email, userId: user!._id });
  }

  static async find(req: Request) {
    const token = req.headers.authorization;
    const data = decodeToken(token!);
    const user = await UserService.findUserById(data.userId);
    return user;
  }
}
