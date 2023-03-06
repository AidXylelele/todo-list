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
    secretOrKey: 'access',
  };
  passport.use(
    new Strategy(
      options,
      async (
        data: any,
        done: (a: null, b: IUser | boolean) => any
      ) => {
        try {
          if (data) {
            return done(null, data);
          }
          return done(null, false);
        } catch (e) {
          console.log(e)
          return null;
        }
      }
    )
  );
  
};
