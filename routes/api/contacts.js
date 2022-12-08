const express = require('express');

const router = express.Router();
const { contacts: controllers } = require('../../controllers');
const {
  joiIdSchema,
  joiContactSchema,
  joiFavoriteSchema,
} = require('../../models');
const { validation, controllerWrapper } = require('../../middlewares');

router.get('/', controllerWrapper(controllers.listContacts));

router.get(
  '/:id',
  validation(joiIdSchema),
  controllerWrapper(controllers.getContactById)
);

router.post(
  '/',
  validation(joiContactSchema),
  controllerWrapper(controllers.addContact)
);

router.put(
  '/:id',

  validation(joiContactSchema),
  controllerWrapper(controllers.updateById)
);

router.patch(
  '/:id/favorite',

  validation(joiFavoriteSchema),
  controllerWrapper(controllers.updateStatusContact)
);
router.delete(
  '/:id',
  validation(joiIdSchema),
  controllerWrapper(controllers.removeContact)
);

module.exports = router;
