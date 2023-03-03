import { IUser } from '../types/user.type';
import UserService from '../services/user.service';

const { Strategy, ExtractJwt } = require('passport-jwt');
const { PassportStatic } = require('passport');

interface IPayload {
  userId: string;
}
export const applyPassportStrategy = (passport: typeof PassportStatic) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'jwtSecretToken',
  };
  passport.use(
    new Strategy(
      options,
      async (
        { userId }: IPayload,
        done: (a: null, b: IUser | boolean) => any
      ) => {
        const { dataValues } = await UserService.findUserById(userId);
        try {
          if (dataValues) {
            return done(null, dataValues);
          }
          return done(null, false);
        } catch (e) {
          return null;
        }
      }
    )
  );
};
