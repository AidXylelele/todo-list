import { Router } from 'express';
import { TodoController } from '../../controllers/todo.controller';
import {
  CreateTodoSchema,
  EditTodoSchema,
} from '../../validators/todo.validators';
import { validateBody } from '../../middlewares/body.middleware';
import { checkExistance } from '../../middlewares/check-existance.middleware';
import { ITodoDBRecord } from '../../types/todos.type';
import { TodoService } from '../../services/todo.service';
import { responseHandler } from '../../middlewares/response.middleware';
import { errorHandler } from '../../middlewares/error.middleware';
import { authenticate } from '../../middlewares/auth.middleware';

const todosRouter: Router = Router();

todosRouter.use('', authenticate);

todosRouter.get('', responseHandler(TodoController.getAll), errorHandler);
todosRouter.post(
  '',
  validateBody(CreateTodoSchema),
  responseHandler(TodoController.create)
);
todosRouter.use(
  '/:id',
  checkExistance<ITodoDBRecord>('id', TodoService.getById)
);
todosRouter.get('/:id', responseHandler(TodoController.getById), errorHandler);
todosRouter.put(
  '/:id',
  validateBody(EditTodoSchema),
  responseHandler(TodoController.update),
  errorHandler
);
todosRouter.delete(
  '/:id',
  responseHandler(TodoController.delete),
  errorHandler
);

export default todosRouter;
