const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sandhyaginare:PlTWFcyqKYKNNwRn@cluster0.heew6kb.mongodb.net/Shopping?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
};

module.exports = connectDB;
