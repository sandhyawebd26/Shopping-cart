const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { postProductController,
    getAllProductController,
    getProductByIdController } = require("../Controllers/productController")


    const DestinationsFunction = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, path.join(__dirname, "../uploads"));
        },
        filename: function (req, file, cb) {
          console.log(file);
          cb(null, `${file.originalname}-${Date.now()}.jpg`);
        },
      });
      
      const upload = multer({ storage: DestinationsFunction });

      router.post("/post",  upload.single("file"),postProductController);

      router.get("/get", getAllProductController);

      router.get("/get/:productId", getProductByIdController);

      module.exports= router;