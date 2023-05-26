const mongoose = require('mongoose');
const Category = require('./category');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    quantity: {
        type: Number,
        default: 0,
        required: true
    }

});

const Product = mongoose.model('Product', productSchema);


//post product model
module.exports.postProductModel = async (data) => {
    const { body, image } = data;
    const { productName, description, price, categoryId, quantity } = body;

    try {
        const res = await Product.create({
            productName,
            description,
            price,
            categoryId,
            quantity,
            image
        });
        const cat = await Category.findById(categoryId);
        cat?.productId?.push(res._id)
        await cat?.save()
        return { data: res, message: "Success", status: 200 };
    } catch (err) {
        return { message: err.message, status: 500 }; // Return the error message instead of the whole error object
    }
}

//get product model
module.exports.getProductModel = async () => {
    try {
        const products = await Product.find().populate('categoryId');
        return { data: products, message: 'Success', status: 200 };
    } catch (err) {
        return { message: err.message, status: 500 };
    }
};

//get by id

module.exports.getProductByIdModel = async (productId) => {
    try {
        const product = await Product.findById(productId).populate('categoryId');
        if (!product) {
            return { message: 'Product not found', status: 404 };
        }
        return { data: product, message: 'Success', status: 200 };
    } catch (err) {
        return { message: err.message, status: 500 };
    }
};