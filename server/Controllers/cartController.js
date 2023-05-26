const Cart = require("../Models/cart");

// Add product to cart
const addToCartController = async (req, res) => {
  const { productId, totalPrice } = req.body;

  try {
    const cartItem = await Cart.create({ productId, totalPrice });
    res.status(201).json({ data: cartItem, message: "Product added to cart successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Get all cart items
const getAllCartItemsController = async (req, res) => {
  try {
    const cartItems = await Cart.find().populate("productId");
    res.status(200).json({ data: cartItems, message: "Cart items retrieved successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get cart item by ID
const getCartItemByIdController = async (req, res) => {
  const cartItemId = req.params.cartItemId;

  try {
    const cartItem = await Cart.findById(cartItemId).populate("productId");
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.status(200).json({ data: cartItem, message: "Cart item retrieved successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Update cart item
const updateCartItemController = async (req, res) => {
  const cartItemId = req.params.cartItemId;
  const { totalPrice } = req.body;

  try {
    const updatedCartItem = await Cart.findByIdAndUpdate(
      cartItemId,
      { totalPrice },
      { new: true }
    ).populate("productId");
    if (!updatedCartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.status(200).json({ data: updatedCartItem, message: "Cart item updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Remove cart item
const removeCartItemController = async (req, res) => {
  const cartItemId = req.params.cartItemId;

  try {
    const removedCartItem = await Cart.findByIdAndRemove({ _id: cartItemId });
    if (!removedCartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.status(200).json({ data: removedCartItem, message: "Cart item removed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  addToCartController,
  getAllCartItemsController,
  getCartItemByIdController,
  updateCartItemController,
  removeCartItemController,
};
