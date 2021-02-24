const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  // name: {
  //   type: String,
  //   required: true,
  // },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    reqired: true,
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    // total: {
    //   type: Number,
    //   required: true,
    // },
  },
});

userSchema.methods.addToCart = function (product) {
  const cartProductIndex = this.cart.items.findIndex((cp) => {
    return cp.productId.toString() === product._id.toString();
  });
  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];

  if (cartProductIndex >= 0) {
    newQuantity = this.cart.items[cartProductIndex].quantity + 1;
    updatedCartItems[cartProductIndex].quantity = newQuantity;
  } else {
    updatedCartItems.push({
      productId: product._id,
      quantity: newQuantity,
    });
  }

  // const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // const cartTotalArray = user.cart.items.map((item) => {
  //   return item.quantity * { ...item.productId._doc }.price;
  // });
  // console.log("cartTotalArry", cartTotalArray);

  // const cartSubTotal = cartTotalArray.reduce(reducer);
  // console.log(cartSubTotal);

  const updatedCart = {
    items: updatedCartItems,
    // total: cartSubTotal,
  };
  this.cart = updatedCart;
  return this.save();
};

userSchema.methods.getCart = function () {
  const cartItems = [...this.cart.items];
  return cartItems;
};

userSchema.methods.removeFromCart = function (productId) {
  // const updatedCartItems = this.cart.items.filter((item) => {
  //   return item.productId.toString() !== productId.toString();
  // });
  // this.cart.items = updatedCartItems;
  // return this.save();
  const cartProductIndex = this.cart.items.findIndex((cp) => {
    return cp.productId.toString() === productId.toString();
  });

  const updatedCartItems = this.cart.items;
  if (cartProductIndex >= 0 && this.cart.items[cartProductIndex].quantity > 1) {
    const reduceQuantity = this.cart.items[cartProductIndex].quantity - 1;
    updatedCartItems[cartProductIndex].quantity = reduceQuantity;
  } else if (
    cartProductIndex >= 0 &&
    this.cart.items[cartProductIndex].quantity <= 1
  ) {
    updatedCartItems.splice(cartProductIndex, 1);
  } else {
    console.log("Product does not exist!");
  }

  this.cart.items = updatedCartItems;
  return this.save();
};

userSchema.methods.decrementProduct = function (productId) {
  const cartProductIndex = this.cart.items.findIndex((cp) => {
    console.log("cp.productId", cp.productId);
    console.log("productId", productId);
    return cp.productId.toString() === productId.toString();
  });

  if (cartProductIndex >= 0 && this.cart.items[cartProductIndex].quantity > 1) {
    const reduceQuantity = this.cart.items[cartProductIndex].quantity - 1;
    updatedCartItems[cartProductIndex].quantity = reduceQuantity;
  }
  const updatedCartItems = this.cart.items;

  this.cart.items = updatedCartItems;
  return this.save();
};

userSchema.methods.incrementProduct = function (productId) {
  const cartProductIndex = this.cart.items.findIndex((cp) => {
    return cp.productId.toString() === productId.toString();
  });
  const updatedCartItems = this.cart.items;
  const addQuantity = this.cart.items[cartProductIndex].quantity + 1;
  updatedCartItems[cartProductIndex].quantity = addQuantity;

  this.cart.items = updatedCartItems;
  return this.save();
};

userSchema.methods.clearCart = function () {
  this.cart = { items: [] };
  return this.save();
};

module.exports = mongoose.model("User", userSchema);
