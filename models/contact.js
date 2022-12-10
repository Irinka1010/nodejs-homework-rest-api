const { Schema, model } = require('mongoose');
const Joi = require('joi');

const nameRegex = /^[a-zA-Z ]{3,35}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
      match: nameRegex,
    },
    email: {
      type: String,
      required: [true, 'Set email for contact'],
    },
    phone: {
      type: String,
      minlength: 10,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const addContactSchemaJoi = Joi.object({
  name: Joi.string().pattern(nameRegex).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } })
    .required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const idSchemaJoi = Joi.object({ id: Joi.string().required() });

const favoriteSchemaJoi = Joi.object({
  favorite: Joi.boolean().required(),
  id: Joi.string().required(),
});

const Contact = model('contact', contactSchema);
module.exports = {
  Contact,
  idSchemaJoi,
  addContactSchemaJoi,
  favoriteSchemaJoi,
};
