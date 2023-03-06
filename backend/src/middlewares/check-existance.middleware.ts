import { NextFunction, Request, Response } from 'express';
import { CustomError } from './error.middleware';

export const checkExistance =
  <T>(field: string, service: (id: string) => Promise<T | null>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body, params } = req;
      const param = body[field] || params[field];
      const todo = await service(param);
      if (todo) {
        return next();
      }
      throw new CustomError(404, 'Something went wrong');
    } catch (e) {
      next(e);
    }
  };
