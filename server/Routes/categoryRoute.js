const express = require("express");
const router = express.Router();
const {
  postCatController,
  getAllCatController,
  getCatByIdController,
} = require("../Controllers/categoryController");

//create category
router.post("/create", postCatController);

//get all categories
router.get("/get-category", getAllCatController);

//get by id
router.get("/getcat/:id", getCatByIdController);

module.exports = router;
