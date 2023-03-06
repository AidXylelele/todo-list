import { Router } from 'express';
import { responseHandler } from '../../middlewares/response.middleware';
import { validateBody } from '../../middlewares/body.middleware';
import { SignUpSchema, SignInSchema } from '../../validators/user.validators';
import { checkEmailExistance } from '../../middlewares/check-acctount.middleware';
import { UserController } from '../../controllers/user.controller';

const router: Router = Router();

router.post(
  '/register',
  validateBody(SignUpSchema),
  checkEmailExistance,
  responseHandler(UserController.signUp)
);
router.post(
  '/login',
  validateBody(SignInSchema),
  responseHandler(UserController.signIn)
);
router.get(
  '/refresh',
  responseHandler(UserController.refresh)
);

export default router;
