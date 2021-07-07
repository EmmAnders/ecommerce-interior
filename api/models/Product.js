const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: String, required: true },
  description: { type: String, required: true, unique: true },
  specs: {
    color: { type: String, required: true },
    weight: { type: String, required: true },
    dimension: {
      l: { type: String, required: true },
      w: { type: String, required: true },
      h: { type: String, required: true },
    },
  },
  categories: { type: Schema.Types.ObjectId, ref: "Category" },
  images: [{ type: String, required: true }],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
