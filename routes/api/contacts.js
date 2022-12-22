const express = require('express');
const router = express.Router();

const { contacts: controllers } = require('../../controllers');
const { schemas } = require('../../models/contact');
const {
  validationBody,
  isValidId,
  controllerWrapper,
} = require('../../middlewares');

router.get('/', controllerWrapper(controllers.listContacts));

router.get('/:id', isValidId, controllerWrapper(controllers.getContactById));

router.post(
  '/',
  validationBody(schemas.addContactSchemaJoi),
  controllerWrapper(controllers.addContact)
);

router.put(
  '/:id',
  isValidId,
  validationBody(schemas.addContactSchemaJoi),
  controllerWrapper(controllers.updateById)
);

router.patch(
  '/:id/favorite',
  isValidId,
  validationBody(schemas.favoriteSchemaJoi),
  controllerWrapper(controllers.updateStatusContact)
);
router.delete('/:id', isValidId, controllerWrapper(controllers.removeContact));

module.exports = router;
