const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.json({
    status: "API works",
  });
});

module.exports = router;
