import { Router } from 'express';
import { TodoController } from '../../controllers/todo.controller';
import { TodoSchema } from '../../validators/todo.validators';
import { validateBody } from '../../middlewares/body.middleware';
import { checkExistance } from '../../middlewares/check-existance.middleware';
import { ITodo } from '../../types/todos.type';
import { TodoService } from '../../services/todo.service';
import { responseHandler } from '../../middlewares/response.middleware';

const passport = require('passport');

const todosRouter: Router = Router();

todosRouter.get(
  '',
  passport.authenticate('jwt', { session: false }),
  responseHandler(TodoController.getAllTodo)
);
todosRouter.post(
  '',
  passport.authenticate('jwt', { session: false }),
  validateBody(TodoSchema),
  responseHandler(TodoController.createTodo)
);
todosRouter.use(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  // checkExistance<ITodo>('id', TodoService.getById)
);
todosRouter.get('/:id', responseHandler(TodoController.getByIdTodo));
todosRouter.put('/:id', validateBody(TodoSchema), responseHandler(TodoController.updateTodo));
todosRouter.delete('/:id', responseHandler(TodoController.deleteTodo));

export default todosRouter;
