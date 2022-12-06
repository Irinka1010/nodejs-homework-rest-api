const Joi = require('joi');
const contactSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } })
    .required(),
  phone: Joi.string().required(),
});

const idSchema = Joi.object({ id: Joi.string().required() });
module.exports = { idSchema, contactSchema };
