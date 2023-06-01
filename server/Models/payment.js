const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },

        transactionId: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }
)

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
