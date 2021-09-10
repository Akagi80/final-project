const express = require('express');
const router = express.Router();

const Product = require('../models/product.model');

router.get('/products', async (req, res) => {
  try {
    res.json(await Product.find({}));
  }
  catch (err) {
    res.status(500).json({message: err});
  }
});


router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product
      .findById(req.params.id);
    if(!product) res.status(404).json({ product: 'Not found' });
    else res.json(product);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
