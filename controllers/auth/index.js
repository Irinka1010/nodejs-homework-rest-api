const signup = require('./signup');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateSubscription = require('./updateSubscription');
const updateAvatar = require('./updateAvatar');
const verifyEmail = require('./verifyEmail');
const resendEmail = require('./resendEmail');
const google = require('./google');
module.exports = {
  signup,
  login,
  logout,
  getCurrent,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resendEmail,
  google,
};
