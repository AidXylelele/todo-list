import { Router } from 'express';
import { responseHandler } from '../../middlewares/response.middleware';
import { validateBody } from '../../middlewares/body.middleware';
import { SignUpSchema, SignInSchema } from '../../validators/user.validators';
import { checkEmailExistance } from '../../middlewares/check-acctount.middleware';
import { UserController } from '../../controllers/user.controller';

const passport = require('passport');

const router: Router = Router();

router.post(
  '/register',
  validateBody(SignUpSchema),
  checkEmailExistance,
  responseHandler(UserController.create)
);
router.post(
  '/login',
  validateBody(SignInSchema),
  responseHandler(UserController.login)
);
router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  responseHandler(UserController.find)
);
export default router;
