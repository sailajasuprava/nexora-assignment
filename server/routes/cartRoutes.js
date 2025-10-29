const express = require("express");
const {
  createOrUpdateCart,
  getAllCarts,
  getUserCart,
  deleteCart,
  removeCartItem,
} = require("../controllers/cartController");

const router = express.Router();

router.route("/").get(getAllCarts).post(createOrUpdateCart);
router
  .route("/:userId")
  .get(getUserCart)
  .patch(removeCartItem)
  .delete(deleteCart);

module.exports = router;
