const express = require('express');
const router = express.Router();
const ShopController = require('../Controllers/shop');

router.get('/', ShopController.getIndex);
router.get('/products', ShopController.getProducts);

router.get('/products/:productid', ShopController.getProduct);


router.get('/details', ShopController.getProductsDetails);
router.get('/cart', ShopController.getProductsCart);
router.get('/orders', ShopController.getProductsOrders);

module.exports = router;
