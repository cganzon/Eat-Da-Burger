const express = require("express");

const router = express.Router();

// Imports the model to use its database functions.
const burger = require("../models/burger.js");

// Routes
router.get("/", (req, res) => {
  burger.selectAll(data => {
    const object = {
      burgers: data
    };
    console.log(object);
    res.render("index", object);
  });
});

// Export routes for server to use
module.exports = router;
