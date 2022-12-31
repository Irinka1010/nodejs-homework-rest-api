const signup = require('./signup');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateSubscription = require('./updateSubscription');
const updateAvatar = require('./updateAvatar');
module.exports = {
  signup,
  login,
  logout,
  getCurrent,
  updateSubscription,
  updateAvatar,
};
