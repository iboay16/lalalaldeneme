const Productss=require('../models/product')



exports.getProducts = (req, res, next) => {
    const products = Productss.getAll();
    res.render('admin/products', {
        title: 'admin',
        products: products,
        path: '/admin/products'
    });
};

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-products', {
        title: 'Add a New product',
        path: '/admin/add-products'
    });
};

exports.postAddProduct = (req, res, text) => {
    const product = new Productss(req.body.name, req.body.price, req.body.imageUrl, req.body.description);
    product.saveproduct();
    res.redirect('/user');
};

exports.getEditProduct = (req, res, next) => {
    const product=Productss.getbyId(req.params.productid);
    res.render('admin/edit-products', {
        title: 'edit',
        path: '/admin/products',
        product:product
    });
};

exports.postEditProduct = (req, res, next) => {
    const Product=Productss.getbyId(req.body.id);
    product.name=req.body.name;
    product.price=req.body.price;
    product.description=req.body.description;
    product.imageUrl=req.body.imageUrl;

    product.update(product);
    // DATABASE KAYIT İŞLEMİ YAPILABİLİR
    res.redirect('/admin/products');
};