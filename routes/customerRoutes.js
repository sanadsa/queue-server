const express = require("express");
const router = express.Router();
const controller = require("../controller/customers");
const asyncHandler = require("../helpers/asyncHandler");
const bodyParser = require("body-parser").json();

// Get customers
router.get(
  "/getCustomers",
  asyncHandler(async (req, res) => {
    const data = await controller.getAllCustomers();

    res.send(data);
  })
);

module.exports = router;
