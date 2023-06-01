const Checkout = require('../Models/checkout');
const Cart = require('../Models/cart');

const postCheckoutController = async (req, res) => {
    const { country, firstName, lastName, companyName, address, state, pin, email, phone, orderNotes, coupenCode, items } = req.body;

    try {
        const checkout = await Checkout.create({ country, firstName, lastName, companyName, address, state, pin, email, phone, orderNotes, coupenCode, cartId:items });
        res.status(201).json({ data: checkout, message: "Checkout successful" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
module.exports = postCheckoutController;


