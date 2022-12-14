const express = require('express');
const router = express.Router();

const { contacts: controllers } = require('../../controllers');
const {
  idSchemaJoi,
  addContactSchemaJoi,
  favoriteSchemaJoi,
} = require('../../models');
const {
  validation,
  paramsValidation,
  isValidId,
  controllerWrapper,
} = require('../../middlewares');

router.get('/', controllerWrapper(controllers.listContacts));

router.get(
  '/:id',
  isValidId,
  paramsValidation(idSchemaJoi),
  controllerWrapper(controllers.getContactById)
);

router.post(
  '/',
  validation(addContactSchemaJoi),
  controllerWrapper(controllers.addContact)
);

router.put(
  '/:id',
  isValidId,
  validation(addContactSchemaJoi),
  paramsValidation(idSchemaJoi),
  controllerWrapper(controllers.updateById)
);

router.patch(
  '/:id/favorite',
  isValidId,
  validation(favoriteSchemaJoi),
  paramsValidation(idSchemaJoi),
  controllerWrapper(controllers.updateStatusContact)
);
router.delete(
  '/:id',
  isValidId,
  paramsValidation(idSchemaJoi),
  controllerWrapper(controllers.removeContact)
);

module.exports = router;
