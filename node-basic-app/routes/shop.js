const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

// / => GET
router.get("/", productsController.getProducts);

// /products => GET
router.get("/products", productsController.getAllProducts);

// /cart => GET
router.get("/cart", productsController.getCart);

module.exports = router;
