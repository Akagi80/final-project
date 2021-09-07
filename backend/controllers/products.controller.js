const Product = require('../models/product.model')

exports.getAll  = async (req, res) => {
  try {
    res.json(await Product.find({}));
  }
  catch (error) {
    res.status(500).json({message: err});
  }
};

exports.getById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) res.status(404).json({ message: 'Not found' });
    res.json(product);
  }
  catch (error) {
    res.status(500).json({message: err});
  }
};
