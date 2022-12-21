const { User } = require('../../models/user');
const createError = require('http-errors');
const bcrypt = require('bcryptjs');
const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, 'Email in use');
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
  });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        subscription: newUser.subscription,
      },
    },
  });
};

module.exports = signup;
