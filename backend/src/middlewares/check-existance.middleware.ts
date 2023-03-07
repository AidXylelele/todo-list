import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../utils/error.util';

export const checkExistance =
  <T>(field: string, service: (id: string) => Promise<T | null>) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      const { body, params } = req;
      const param = body[field] || params[field];
      const record = await service(param);
      if (record) {
        return next();
      }
      throw new CustomError(404, 'Something went wrong');
    } catch (error) {
      next(error);
    }
  };
