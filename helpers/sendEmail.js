require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async date => {
  const email = { ...date, from: 'im0396859@gmail.com' };

  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};
module.exports = sendEmail;
