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
  controllerWrapper,
} = require('../../middlewares');

router.get('/', controllerWrapper(controllers.listContacts));

router.get(
  '/:id',
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
  validation(addContactSchemaJoi),
  paramsValidation(idSchemaJoi),
  controllerWrapper(controllers.updateById)
);

router.patch(
  '/:id/favorite',
  validation(favoriteSchemaJoi),
  controllerWrapper(controllers.updateStatusContact)
);
router.delete(
  '/:id',
  paramsValidation(idSchemaJoi),
  controllerWrapper(controllers.removeContact)
);

module.exports = router;
