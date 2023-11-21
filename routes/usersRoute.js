const express = require('express');
const {
  getAllUsers,
  getOneUser,
  createOneUser,
  updateOneUser,
  deleteOneUser,
} = require('../controllers/usersControllers.js');

const router = express.Router();

router.route(`/`).get(getAllUsers).post(createOneUser);
router.route(`/:id`).get(getOneUser).put(updateOneUser).delete(deleteOneUser);

module.exports = router;
