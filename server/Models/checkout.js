const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema(
    {
        country: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },

        companyName: {
            type: String,
            required: true
        },

        address:{
            type: String,
            required: true

        },
        state:{
            type: String,
            required: true

        },
        pin:{
            type: Number,
            required: false

        },
        email:{
            type: String,
            required: true
        },
        phone:{
            type: Number,
            required: true
        },
        orderNotes:{
            type: String,
            required: false
        },
        coupenCode:{
            type: Number,
            required: false
        },
    //     cartId:[{
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Cart",
    //         required: true
    //     }
    // ]

    }
)

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports= Checkout;