const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
});

module.exports = new mongoose.model("SubCategory", subCategorySchema);
