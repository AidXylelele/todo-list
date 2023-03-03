import { Router } from 'express';
import { validateBody } from '../../middlewares/body.middleware';
import { checkExistance } from '../../middlewares/check-existance.middleware';
import { responseHandler } from '../../middlewares/response.middleware';
import { GroupController } from '../../controllers/group.controller';
import { GroupSchema } from '../../validators/group.validators';

const passport = require('passport');

const groupsRouter: Router = Router();

groupsRouter.get(
  '',
  passport.authenticate('jwt', { session: false }),
  responseHandler(GroupController.getAll)
);
groupsRouter.post(
  '',
  passport.authenticate('jwt', { session: false }),
  validateBody(GroupSchema),
  responseHandler(GroupController.create)
);
// groupsRouter.use(
//   '/:id',
//   passport.authenticate('jwt', { session: false })
//   // checkExistance<ITodo>('id', TodoService.getById)
// );
groupsRouter.get('/:id', responseHandler(GroupController.getById));

groupsRouter.delete('/:id', responseHandler(GroupController.delete));

export default groupsRouter;
