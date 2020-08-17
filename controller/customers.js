const db = require("../DAL/db.customersRepository");

class CustomersController {
  getAllCustomers() {
    return db.getAllCustomers();
  }
}

module.exports = new CustomersController();
