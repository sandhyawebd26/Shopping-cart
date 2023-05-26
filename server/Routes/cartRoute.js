const express = require("express");
const router = express.Router();
const {
  addToCartController,
  getAllCartItemsController,
  removeCartItemController,
  getCartItemByIdController,
} = require("../Controllers/cartController");

router.post("/add", addToCartController);
router.get("/get-all", getAllCartItemsController);
router.get("/get-item/:cartItemId", getCartItemByIdController);
router.delete("/remove/:cartItemId", removeCartItemController);

module.exports = router;
