const { User } = require('../../models/user');
const { v4 } = require('uuid');
const createError = require('http-errors');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { sendEmail, createVerifyEmail } = require('../../helpers');
const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, 'Email in use');
  }
  const verificationToken = v4();
  const avatarURL = gravatar.url(email);
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    avatarURL,
    ...req.body,
    password: hashPassword,
    verificationToken,
  });

  const mail = createVerifyEmail(email, verificationToken);
  await sendEmail(mail);

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        subscription: newUser.subscription,
        avatarURL,
        verificationToken,
      },
    },
  });
};

module.exports = signup;
