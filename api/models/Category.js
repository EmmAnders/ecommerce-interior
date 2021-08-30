const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  subCategories: [{ type: Schema.Types.ObjectId, ref: "SubCategory" }],
});

module.exports = new mongoose.model("Category", categorySchema);
