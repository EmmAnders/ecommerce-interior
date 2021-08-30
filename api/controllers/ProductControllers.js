const mongoose = require("mongoose");
const Product = require("../models/Product");
const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");

const addCategory = async (req, res) => {
  const { name, slug } = req.body;
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
        slug,
      });
      res.json(category);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error...");
  }
};

const addSubCategory = async (req, res) => {
  const { name, categoryId } = req.body;

  try {
    let subCategory = await SubCategory.findOne({
      name,
    });

    if (subCategory) {
      return res.status(403).json({
        error: "subCategory already exist",
      });
    } else {
      subCategory = await SubCategory.create({
        name,
        categoryId,
      });

      Category.findByIdAndUpdate(
        req.body.categoryId,
        { $push: { subCategories: req.body._id } }
      );

      res.json(subCategory);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error...");
  }
};

const getAllCategories = async (req, res) => {
  try {
    let categories = await Category.find({}).populate();
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const getAllSubCategories = async (req, res) => {
  try {
    let subCategories = await SubCategory.find({}).populate("categoryId");
    res.json(subCategories);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const getAllBrands = async (req, res) => {
  try {
    let brands = await Product.find({})
      .select("brand")
      .distinct("brand")
      .exec();
    res.json(brands);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const getAllProductColors = async (req, res) => {
  try {
    let colors = await Product.find({})
      .select("color")
      .distinct("color")
      .exec();

    res.json(colors);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};

const addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create({
      name: req.body.name,
      brand: req.body.brand,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
      color: req.body.color,
      weight: req.body.weight,
      width: req.body.width,
      length: req.body.length,
      height: req.body.height,
      category: req.body.category,
      images: req.body.images,
    });
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error...");
  }
};

const getAllProducts = async (req, res) => {
  try {
    let products = await Product.find({}).populate("category");
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    let products = await Product.find({
      categories: req.params.categoryId,
    }).populate("categories");

    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const getProductById = async (req, res) => {
  try {
    let product = await Product.findById({
      _id: req.params.id,
    }).exec();
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
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
  getAllSubCategories,
  getProductById,
  deleteProductById,
  addCategory,
  addSubCategory,
  getProductsByCategory,
  getAllBrands,
  getAllProductColors,
};
