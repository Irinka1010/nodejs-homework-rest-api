const { Strategy } = require('passport-google-oauth2');
const passport = require('passport');
const { v4 } = require('uuid');
const bcrypt = require('bcryptjs');

const { User } = require('../models/user');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, BASE_URL } = process.env;

const googleParams = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: `${BASE_URL}/api/auth/google/callback`,
  passReqCallback: true,
};
const password = v4();
const googleCallback = async (
  req,
  accessToken,
  refreshToken,
  profile,
  done
) => {
  try {
    const { email, displayName } = profile;
    const user = await User.findOne({ email });
    if (user) {
      done(null, user);
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      name: displayName,
      password: hashPassword,
    });
    done(null, newUser);
  } catch (error) {
    done(error, false);
  }
};

const googleStrategy = new Strategy(googleParams, googleCallback);

passport.use('google', googleStrategy);

module.exports = passport;
