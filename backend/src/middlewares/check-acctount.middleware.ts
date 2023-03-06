import { NextFunction, Request, Response } from 'express';
import { CustomError } from './error.middleware';
import UserService from '../services/user.service';

export const checkEmailExistance = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const userByEmail = await UserService.getByEmail(email);
  if (userByEmail) {
    return next(new CustomError(400, 'User with such email already exist'));
  }
  next();
};
