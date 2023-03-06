import { NextFunction, Request, Response } from 'express';
import { TokenService } from '../services/token.service';

import { IUser } from '../types/user.type';
const passport = require('passport');

export function authenticate(strategy: any, options: any) {
  return function (req: any, res: any, next: NextFunction) {
    passport.authenticate(
      strategy,
      options,
      async (error: Error, user: IUser, info: any) => {
        if (error) {
          return next(error);
        }
        if (!user) {
          const { cookies } = req;
          const tokenRecord = await TokenService.getByToken(
            cookies.refreshToken
          );
          const data = await TokenService.update(tokenRecord.dataValues.userId);
          if (data) user = data.user;
          res.cookie('refreshToken', data!.refreshToken);
          res.json(data!.accessToken);
        }
        req.user = user;
        next();
      }
    )(req, res, next);
  };
}
