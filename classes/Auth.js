let Product = require("./Product.js");
let Cart = require("./Cart.js");
let Customer = require("./Customer.js");

class Auth {
  constructor() {
    this.customers = [];
  }

  register(name, email, shippingAddress) {
    let customer = new Customer(name, email, shippingAddress);
    this.customers.push(customer);
  }
  login(email) {
    // console.log(this.customers);
    for (let i = 0; i < this.customers.length; i++) {
      console.log(this.customers[i]["email"]);
      if (this.customers[i]["email"] == email) {
        let result = this.customers[i];
        return result;
      } else {
        return null;
      }
    }
  }
}

module.exports = Auth;