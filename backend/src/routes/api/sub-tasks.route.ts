import { Router } from 'express';
import { validateBody } from '../../middlewares/body.middleware';
import { checkExistance } from '../../middlewares/check-existance.middleware';
import { responseHandler } from '../../middlewares/response.middleware';
import { SubTaskController } from '../../controllers/sub-task.controller';
import { SubTaskSchema } from '../../validators/sub-task.validator';
import { errorHandler } from '../../middlewares/error.middleware';
import { authenticate } from '../../middlewares/auth.middleware';

const subTasksRouter: Router = Router();

subTasksRouter.use('', authenticate);
subTasksRouter.get(
  '',
  
  responseHandler(SubTaskController.getAll),
  errorHandler
);
subTasksRouter.post(
  '',

  validateBody(SubTaskSchema),
  responseHandler(SubTaskController.create),
  errorHandler
);
// subTasksRouter.use(
//   '/:id',
//   // checkExistance<ITodo>('id', TodoService.getById)
// );
subTasksRouter.get(
  '/:id',
  responseHandler(SubTaskController.getById),
  errorHandler
);
subTasksRouter.put(
  '/:id',
  validateBody(SubTaskSchema),
  responseHandler(SubTaskController.update),
  errorHandler
);
subTasksRouter.delete(
  '/:id',
  responseHandler(SubTaskController.delete),
  errorHandler
);

export default subTasksRouter;
