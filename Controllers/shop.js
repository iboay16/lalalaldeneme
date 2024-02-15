// shop.js dosyası

const Productss = require('../models/product');

exports.getIndex = (req, res, next) => {
    const products = Productss.getAll();
    res.render('shop/index', {
        title: 'shopping',
        products: products,
        path: '/'
    });
};



exports.getProduct = (req, res, next) => {
    const product= Productss.getbyId(req.params.productid);
    res.render('shop/product-detail',{
        title:product.name,
        product:product,
        path:'/products'

    });
};



exports.getProducts = (req, res, next) => {
    const products = Productss.getAll();
    res.render('shop/products', {
        title: 'products',
        products: products,
        path: '/products'
    });
};

exports.getProductsDetails = (req, res, next) => {
    res.render('shop/details', {
        title: 'details',
        path: '/details'
    });
};

exports.getProductsCart = (req, res, next) => {
    res.render('shop/cart', {
        title: 'cart',
        path: '/cart'
    });
};

exports.getProductsOrders = (req, res, next) => {
    res.render('shop/orders', {
        title: 'orders',
        path: '/orders'
    });
};

exports.getAddProduct = (req, res, next) => {
    // Eksik olan işlemleri buraya ekleyin
};
