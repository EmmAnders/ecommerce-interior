const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  created: { type: Date, default: Date.now },
  total: { type: Number, required: true },
  items: [
    {
      item: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
      price: { type: Number, default: 0 },
    },
  ],
  name: { type: String, required: true },
  address: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
