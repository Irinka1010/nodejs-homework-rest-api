const express = require('express');

const router = express.Router();
const { contacts: controllers } = require('../../controllers');
const { contactSchema, idSchema } = require('../../schemas/contactSchemas');
const { validation, controllerWrapper } = require('../../middlewares');

router.get('/', controllerWrapper(controllers.listContacts));

router.get(
  '/:id',
  validation(idSchema),
  controllerWrapper(controllers.getContactById)
);

router.post(
  '/',
  validation(contactSchema),
  controllerWrapper(controllers.addContact)
);

router.delete(
  '/:id',
  validation(idSchema),
  controllerWrapper(controllers.removeContact)
);

router.put(
  '/:id',
  validation(idSchema),
  validation(contactSchema),
  controllerWrapper(controllers.updateById)
);

module.exports = router;
