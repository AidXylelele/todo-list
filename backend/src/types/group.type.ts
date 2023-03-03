import { Request } from 'express';
import { IUser } from './user.type';

export interface IGroup {
  title: string;
}

export interface IGroupRequest extends Request {
  body: IGroup;
  params: {
    id: string;
  };
  user: IUser;
}
