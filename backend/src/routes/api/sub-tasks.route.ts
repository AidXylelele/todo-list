import { Router } from 'express';
import { validateBody } from '../../middlewares/body.middleware';
import { checkExistance } from '../../middlewares/check-existance.middleware';
import { responseHandler } from '../../middlewares/response.middleware';
import { SubTaskController } from '../../controllers/sub-task.controller';
import { SubTaskSchema } from '../../validators/sub-task.validator';

const passport = require('passport');

const subTasksRouter: Router = Router();

subTasksRouter.get(
  '',
  passport.authenticate('jwt', { session: false }),
  responseHandler(SubTaskController.getAll)
);
subTasksRouter.post(
  '',
  passport.authenticate('jwt', { session: false }),
  validateBody(SubTaskSchema),
  responseHandler(SubTaskController.create)
);
subTasksRouter.use(
  '/:id',
  passport.authenticate('jwt', { session: false })
  // checkExistance<ITodo>('id', TodoService.getById)
);
subTasksRouter.get('/:id', responseHandler(SubTaskController.getById));
subTasksRouter.put(
  '/:id',
  validateBody(SubTaskSchema),
  responseHandler(SubTaskController.update)
);
subTasksRouter.delete('/:id', responseHandler(SubTaskController.delete));

export default subTasksRouter;
