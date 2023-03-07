import { IDataBaseRecord } from './database-record.type';
import { IRequest } from './request.type';

export interface ISubTask {
  title: string;
  isDone: boolean;
}

export interface ISubTaskRequest extends IRequest {
  body: ISubTask;
}

export interface ISubTaskDBRecord extends IDataBaseRecord {
  title: string;
  isDone: boolean;
  todoId: string;
  userId: string;
}
