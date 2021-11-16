const express = require("express");
const user = require("../models/user");
const router = express.Router();
const User = require('../models/user')
router.get("/users", (req, res) => {

  user.find((err, users)=>{
    console.log(users)
  })
});

module.exports = router;
