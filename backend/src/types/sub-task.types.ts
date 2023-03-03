import { Request } from 'express';
import { IUser } from './user.type';

export interface ISubTask {
  title: string;
  data: string;
  isDone: boolean;
}

export interface ISubTaskRequest extends Request {
  body: ISubTask;
  user: IUser;
  params: {
    id: string;
  };
}
