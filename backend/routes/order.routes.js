const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');

router.get('/orders', async (req, res) => {
  try {
    res.json(await Order.find({}));
  }
  catch (err) {
    res.status(500).json({message: err});
  }
});

router.get('/orders/:id', async (req, res) => {
  try {
    const order = await Order
      .findById(req.params.id);
    if(!order) res.status(404).json({ order: 'Not found' });
    else res.json(order);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/orders', async (req, res) => {
  try {
    const { product, price, quantity, firstname, lastname, phone, email, text } = req.body;
    const newOrder = new Order({ product, price, quantity, firstname, lastname, phone, email, text });
    await newOrder.save();
    res.json({ message: 'OK' });
  }
  catch (err) {
    res.status(500).json({message: err});
  }
});

module.exports = router;
