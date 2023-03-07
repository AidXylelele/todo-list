import { Router } from 'express';
import { validateBody } from '../../middlewares/body.middleware';
import { checkExistance } from '../../middlewares/check-existance.middleware';
import { responseHandler } from '../../middlewares/response.middleware';
import { SubTaskController } from '../../controllers/sub-task.controller';
import {
  CreateSubTaskSchema,
  EditSubTaskSchema,
} from '../../validators/sub-task.validator';
import { errorHandler } from '../../middlewares/error.middleware';
import { authenticate } from '../../middlewares/auth.middleware';
import { SubTaskService } from '../../services/sub-task.service';
import { ISubTaskDBRecord } from '../../types/sub-task.types';

const subTasksRouter: Router = Router();

subTasksRouter.use('', authenticate);
subTasksRouter.get(
  '',

  responseHandler(SubTaskController.getAll),
  errorHandler
);
subTasksRouter.post(
  '',

  validateBody(CreateSubTaskSchema),
  responseHandler(SubTaskController.create),
  errorHandler
);
subTasksRouter.use(
  '/:id',
  checkExistance<ISubTaskDBRecord>('id', SubTaskService.getById)
);
subTasksRouter.get(
  '/:id',
  responseHandler(SubTaskController.getById),
  errorHandler
);
subTasksRouter.put(
  '/:id',
  validateBody(EditSubTaskSchema),
  responseHandler(SubTaskController.update),
  errorHandler
);
subTasksRouter.delete(
  '/:id',
  responseHandler(SubTaskController.delete),
  errorHandler
);

export default subTasksRouter;
