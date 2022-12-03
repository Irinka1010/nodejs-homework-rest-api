const express = require('express');

const router = express.Router();
const { contacts: ctrl } = require('../../controllers');
const { contactSchema } = require('../../schemas');
const { validation, ctrlWrapper } = require('../../middlewares');

router.get('/', ctrlWrapper(ctrl.listContacts));

router.get('/:id', ctrlWrapper(ctrl.getContactById));

router.post('/', validation(contactSchema), ctrlWrapper(ctrl.addContact));

router.delete('/:id', ctrlWrapper(ctrl.removeContact));

router.put('/:id', validation(contactSchema), ctrlWrapper(ctrl.updateById));

module.exports = router;
