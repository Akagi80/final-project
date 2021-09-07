const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/products.controller');

router.get('/', ProductController.getAll);
router.get('product/:id', ProductController.getById);

module.exports = router;
