const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pageSchema = new Schema({
  name: { type: String },
  slug: { type: String },
  content: { type: String },
});
module.exports = new mongoose.model("Page", pageSchema);
