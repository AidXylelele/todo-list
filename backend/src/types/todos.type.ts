import { IDataBaseRecord } from './database-record.type';
import { ISubTaskDBRecord } from './sub-task.types';
import { IRequest } from './request.type';

export interface ITodo {
  title: string;
  isDone: boolean;
}

export interface ITodoRequest extends IRequest {
  body: ITodo;
}

export interface ITodoDBRecord extends IDataBaseRecord {
  title: string;
  isDone: boolean;
  groupId: string;
  userId: string;
  'sub-tasks'?: ISubTaskDBRecord[];
}
