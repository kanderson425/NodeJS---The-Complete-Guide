const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");
const isAuth = require("../middleware/is-auth");

const decrementCheck = () => {
  console.log("decrement product route hit");
};

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", isAuth, shopController.getCart);

router.post("/cart", isAuth, shopController.postCart);

router.post("/cart-delete-item", isAuth, shopController.postCartDeleteProduct);

router.post(
  "/cart-decrement-item",
  // decrementCheck,
  // isAuth,
  shopController.postCartDecrementProduct
);

router.post(
  "/cart-increment-item",
  isAuth,
  shopController.postCartIncrementProduct
);

router.get("/checkout", isAuth, shopController.getCheckout);

router.post("/create-order", isAuth, shopController.postOrder);

router.get("/orders", isAuth, shopController.getOrders);

router.get("/orders/:orderId", isAuth, shopController.getInvoice);

module.exports = router;
