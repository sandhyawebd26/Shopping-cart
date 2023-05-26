const Category= require('../Models/category');


// Create category
const postCatController = async (req, res) => {
    const { category ,productId} = req.body;
  

    if (!category) {
      return res.status(400).json({
        success: false,
        error: "Category name is required",
      });
    }
    try {
      const createdCategory = await Category.create({ category ,productId});
      res.status(200).json({
        success: true,
        category: createdCategory,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error: "Failed to create category",
      });
    }
  };
  


  // Get all categories
  const getAllCatController = async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json({
        success: true,
        categories: categories,
        numberOfCategories: categories.length,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error: "Failed to retrieve categories",
      });
    }
  };
  

  //Get category by Id
  
  const getCatByIdController = async (req, res) => {
    const { id } = req.params; // Get the category ID from the URL path
  
    try {
      const category = await Category.findById(id);
      if (!category) {
        return res.status(404).json({
          success: false,
          error: "Category not found",
        });
      }
      res.status(200).json({
        success: true,
        category: category,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error: "Failed to retrieve category",
      });
    }
  };
  
  module.exports= {postCatController, getAllCatController, getCatByIdController};