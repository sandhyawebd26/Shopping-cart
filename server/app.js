const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db/connect");
const path = require('path')
const categoryRoute= require("./Routes/categoryRoute");
const productRoute=require("./Routes/productRoute");
const cartRoute=require('./Routes/cartRoute');
const checkoutRoute = require('./Routes/checkoutRoute');
const authRoute= require('./Routes/authRoute')


connectDB();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api/v1/uploads", express.static(path.join(__dirname, "./uploads")));

app.use("/api", categoryRoute);

app.use("/api", productRoute);

app.use("/api", cartRoute);

app.use("/api", checkoutRoute);

app.use("/api", authRoute);



app.listen(4500, () => {
    console.log("server is listening at port 4500");
})

