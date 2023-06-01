const Stripe = require('stripe')
const Payment = require('../Models/payment');
const stripe= Stripe('sk_test_51NE9C8SFthXTWuzzsZ4YMoS7ZoQP0TmK948lNxRCHou1FNV0kqip2lKc20s7s3NZQQSg2Wlda0jqhFEHQJujFPfY00ctQ998Jn')

 const PaymentController = async (req, res) => {
    console.log("req.body.totalPrice+>",req.body);
    try {
      const session = await stripe.checkout.sessions.create({
        metadata: {
          userId: req.body.userId,
        },
        line_items: [{
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'payment',
            },
            unit_amount: req.body.amount *100,
          },
          quantity: 1,
        }],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/',
      });
      
      // Store the payment data in the database
      await req.user.save();
      
      const payment = new Payment({
        userId: req.body.userId,
        transactionId: session.id,
        amount: req.body.amount,
      });
      await payment.save();
      
      res.status(200).send({
        url: session.url,
      });
    } catch (error) {
      console.error("error",error);
      res.status(500).send('Internal Server Error');
    }
    
  }
  
  module.exports= PaymentController;