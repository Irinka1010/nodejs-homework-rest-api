const { BASE_URL } = process.env;
const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: 'Подтверждения email',
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Подтвердить email</a>`,
  };
  return mail;
};
module.exports = createVerifyEmail;
