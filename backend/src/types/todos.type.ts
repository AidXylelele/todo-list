import { Request } from 'express';
import { IUser } from './user.type';

export interface ITodo {
  title: string;
  data: string;
  isDone: boolean;
}

export interface ITodoRequest extends Request {
  body: ITodo;
  user: IUser;
  params: {
    id: string;
  };
}
