const { postProductModel, getProductModel, getProductByIdModel } = require("../Models/product");

// Create product
const postProductController = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  const body = req?.body;
  const image = req.file.filename;

  try {
    const data = await postProductModel({ body, image });
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

// Get all products
const getAllProductController = async (req, res) => {
  try {
    const data = await getProductModel();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

// Get product by ID
const getProductByIdController = async (req, res) => {
    const {productId} = req.params;
  
    try {
      const data = await getProductByIdModel(productId);
        res.send(data);
    } catch (err) {
      res.send(err)
    }
  };

module.exports = {
  postProductController,
  getAllProductController,
  getProductByIdController
};
