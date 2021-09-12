const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  product: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: Number, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  text: { type: String },
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
