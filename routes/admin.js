// admin.js dosyası

const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/admin');

// HANGİ URL GELİRSE O SAYFA CALISTIRILIR
router.get('/', adminController.getAddProduct);
router.post('/add-products', adminController.postAddProduct);
router.get('/products', adminController.getProducts);
router.get('/products/:productid', adminController.getEditProduct);
router.post('/edit-products', adminController.postEditProduct);

module.exports = router;
