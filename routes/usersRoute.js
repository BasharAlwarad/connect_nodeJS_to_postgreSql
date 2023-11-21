const express = require('express');
const { body } = require('express-validator');

const {
  getAllUsers,
  getOneUser,
  createOneUser,
  updateOneUser,
  deleteOneUser,
} = require('../controllers/usersControllers.js');

const validation = [
  body('first_name').notEmpty().isString().isLength({ min: 2, max: 10 }),
  body('last_name').notEmpty().isString().isLength({ min: 2, max: 10 }),
  body('age').notEmpty().isString().isLength({ min: 2, max: 2 }),
];

const router = express.Router();

router.route(`/`).get(getAllUsers).post(validation, createOneUser);
router.route(`/:id`).get(getOneUser).put(updateOneUser).delete(deleteOneUser);

module.exports = router;
