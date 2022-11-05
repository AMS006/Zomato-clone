import JwtPassport from 'passport-jwt';
import { UserModel } from '../database/allModels';
import dotenv from 'dotenv'

dotenv.config();
const JwtStrategy = JwtPassport.Strategy;
const JwtExtract = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest: JwtExtract.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}

export default (passport) =>{
    passport.use(
        new JwtStrategy(options, async (jwt__payload, done) => {
          try {
            const doesUserExist = await UserModel.findById(jwt__payload.user);
            if (!doesUserExist) return done(null, false);
            return done(null, doesUserExist);
          } catch (error) {
            throw new Error(error);
          }
        })
      );
}