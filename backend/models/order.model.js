const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  text: { type: String },
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
