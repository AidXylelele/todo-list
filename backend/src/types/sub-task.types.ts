import { IRequest } from './request.type';

export interface ISubTask {
  title: string;
  data: string;
  isDone: boolean;
}

export interface ISubTaskRequest extends IRequest {
  body: ISubTask;
}
