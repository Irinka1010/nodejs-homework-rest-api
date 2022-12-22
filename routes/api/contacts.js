const express = require('express');
const router = express.Router();

const { contacts: controllers } = require('../../controllers');
const { schemas } = require('../../models/contact');
const {
  validationBody,
  isValidId,
  controllerWrapper,
  auth,
} = require('../../middlewares');

router.get('/', auth, controllerWrapper(controllers.listContacts));

router.get(
  '/:id',
  auth,
  isValidId,
  controllerWrapper(controllers.getContactById)
);

router.post(
  '/',
  auth,
  validationBody(schemas.addContactSchemaJoi),
  controllerWrapper(controllers.addContact)
);

router.put(
  '/:id',
  auth,
  isValidId,
  validationBody(schemas.addContactSchemaJoi),
  controllerWrapper(controllers.updateById)
);

router.patch(
  '/:id/favorite',
  auth,
  isValidId,
  validationBody(schemas.favoriteSchemaJoi),
  controllerWrapper(controllers.updateStatusContact)
);
router.delete(
  '/:id',
  auth,
  isValidId,
  controllerWrapper(controllers.removeContact)
);

module.exports = router;
