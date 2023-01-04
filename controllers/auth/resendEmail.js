const { User } = require('../../models/user');
const createError = require('http-errors');
const { sendEmail, createVerifyEmail } = require('../../helpers');
const resendEmail = async (req, res) => {
  const { email } = req.body;
  const user = User.findOne({ email });
  if (!user) {
    throw createError(400, 'Missing required field email');
  }
  if (user.verify === true) {
    throw createError(400, 'Verification has already been passed');
  }
  const mail = createVerifyEmail(email, user.verificationToken);
  await sendEmail(mail);
  res.json({
    message: 'Verification email sent',
  });
};
module.exports = resendEmail;
