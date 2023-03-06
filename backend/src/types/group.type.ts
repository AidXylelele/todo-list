import { IRequest } from './request.type';

export interface IGroup {
  title: string;
}

export interface IGroupRequest extends IRequest {
  body: IGroup;
}
