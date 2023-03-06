import { IRequest } from './request.type';

export interface ITodo {
  title: string;
  data: string;
  isDone: boolean;
}

export interface ITodoRequest extends IRequest {
  body: ITodo;
}
