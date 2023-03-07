import { Router } from 'express';
import { validateBody } from '../../middlewares/body.middleware';
import { checkExistance } from '../../middlewares/check-existance.middleware';
import { responseHandler } from '../../middlewares/response.middleware';
import { GroupController } from '../../controllers/group.controller';
import { GroupSchema } from '../../validators/group.validators';
import { errorHandler } from '../../middlewares/error.middleware';
import { authenticate } from '../../middlewares/auth.middleware';
import { IGroupDBRecord } from '../../types/group.type';
import { GroupService } from '../../services/group.service';

const groupsRouter: Router = Router();

groupsRouter.use('', authenticate);
groupsRouter.get('', responseHandler(GroupController.getAll), errorHandler);
groupsRouter.post(
  '',
  validateBody(GroupSchema),
  responseHandler(GroupController.create),
  errorHandler
);
groupsRouter.use(
  '/:id',
  checkExistance<IGroupDBRecord>('id', GroupService.getById)
);
groupsRouter.get(
  '/:id',
  responseHandler(GroupController.getById),
  errorHandler
);

groupsRouter.put(
  '/:id',
  validateBody(GroupSchema),
  responseHandler(GroupController.update),
  errorHandler
);

groupsRouter.delete(
  '/:id',
  responseHandler(GroupController.delete),
  errorHandler
);

export default groupsRouter;
