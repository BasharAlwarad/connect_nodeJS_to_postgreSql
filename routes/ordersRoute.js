const express = require('express');
const {
  getAllOrders,
  getOneOrders,
  createOneOrders,
  updateOneOrders,
  deleteOneOrders,
} = require('../controllers/ordersControllers.js');

const router = express.Router();

router.route(`/`).get(getAllOrders).post(createOneOrders);
router
  .route(`/:id`)
  .get(getOneOrders)
  .put(updateOneOrders)
  .delete(deleteOneOrders);

module.exports = router;
