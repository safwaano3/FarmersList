let Product = require("./Product");
let Cart = require("./Cart");

class Customer {
  constructor(name, email, shippingAddress, orderHistory) {
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
    this.orderHistory = [];
  }

  addToOrderHistory(Cart) {
    this.orderHistory.push(Cart);
  }
}

module.exports = Customer;