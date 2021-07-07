const Product = require("../models/Product");

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

const getProductsByCategory = async (req, res) => {
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
  getProductsByCategory,
  getProductById,
  deleteProductById,
};
