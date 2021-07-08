const  mongoose  = require( 'mongoose' );
const Product = require("../models/Product");
const Category = require("../models/Category");

const addCategory = async (req, res) => {
  const { name } = req.body;
  try {
    let category = await Category.findOne({
      name,
    });

    if (category) {
      return res.status(403).json({
        error: "Category already exist",
      });
    } else {
      category = await Category.create({
        name,
      });
      res.json(category);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const getAllCategories = async (req, res) => {
  try {
    let categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const getCategoryById = async (req, res) => {
  const { categoryId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    return res.status(403).json({
      error: "Category not founded",
    });
  }

  try {
    let category = await Category.findById(categoryId);

    if (!category) {
      return res.status(403).json({
        error: "Category not founded",
      });
    }

    req.category = category;
    res.json(category)

  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const addProduct = async (req, res) => {
  /*   try {
 
  } catch (err) {
    res.status(400).json({ error: "Something went wrong.." });
  } */
};

const getAllProducts = async (req, res) => {
  res.send("test Route");
  /*   try {
 
  } catch (err) {
    res.status(400).json({ error: "Something went wrong.." });
  } */
};

const getProductById = async (req, res) => {
  /*   try {
 
  } catch (err) {
    res.status(400).json({ error: "Something went wrong.." });
  } */
};

const deleteProductById = async (req, res) => {
  /*   try {
 
  } catch (err) {
    res.status(400).json({ error: "Something went wrong.." });
  } */
};

module.exports = {
  addProduct,
  getAllProducts,
  getAllCategories,
  getCategoryById,
  getProductById,
  deleteProductById,
  addCategory,
};
