const express = require("express");

const router = express.Router();

// Import the model burger.js to use its database functions.
const burger = require("../models/burger.js");

// Routes
router.get("/", (req, res) => {
  burger.selectAll(data => {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, 0], result => {
    // Send back the ID of the new quote
    res.json(result);
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  burger.updateOne(req.body, condition, result => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
