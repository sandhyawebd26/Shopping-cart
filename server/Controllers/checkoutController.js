const Checkout = require('../Models/checkout');
const Cart = require('../Models/cart');

const postCheckoutController = async (req, res) => {
    const body= req.body;

    try{
        const checkout= await Checkout.create(body);
        res.status(201).json({data: checkout, message: "Checkout successful"});
    } catch(err){
        res.status(500).json({message: err.message});
    }
}
module.exports = postCheckoutController;


  