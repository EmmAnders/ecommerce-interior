const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  weight: { type: String },
  length: { type: String },
  height: { type: String },
  width: { type: String },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  images:[{ type: String }], 
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
