const express = require('express');
const router = express.Router();

const { contacts: controllers } = require('../../controllers');
const {
  idSchemaJoi,
  addContactSchemaJoi,
  favoriteSchemaJoi,
} = require('../../models');
const { validation, controllerWrapper } = require('../../middlewares');

router.get('/', controllerWrapper(controllers.listContacts));

router.get(
  '/:id',
  validation(idSchemaJoi),
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
  controllerWrapper(controllers.updateById)
);

router.patch(
  '/:id/favorite',
  validation(favoriteSchemaJoi),
  controllerWrapper(controllers.updateStatusContact)
);
router.delete(
  '/:id',
  validation(idSchemaJoi),
  controllerWrapper(controllers.removeContact)
);

module.exports = router;
