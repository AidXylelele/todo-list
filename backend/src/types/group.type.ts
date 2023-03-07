import { IDataBaseRecord } from './database-record.type';
import { IRequest } from './request.type';

export interface IGroup {
  title: string;
}

export interface IGroupRequest extends IRequest {
  body: IGroup;
}

export interface IGroupDBRecord extends IDataBaseRecord {
  title: string;
  userId: string;
}
