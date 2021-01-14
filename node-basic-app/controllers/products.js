const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
};

exports.getAdminProducts = (req, res, next) => {
  res.render("admin/products", {
    pageTitle: "Admin Products",
    path: "/admin/products",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

exports.getAllProducts = (req, res, next) => {
  res.render("shop/index", {
    pageTitle: "All Products",
    path: "/products",
    activeShop: true,
    productCSS: true,
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "/cart",
    activeShop: true,
    productCSS: true,
  });
};
