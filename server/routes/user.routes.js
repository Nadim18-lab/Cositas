const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
router.post("/users", async (req, res) => {
  const { name, lastName, email, phoneNumber, question } = req.body;
  const user = new User({ name, lastName, email, phoneNumber, question });
  await user.save();
  res.json({ status: "User saved!" });
});
router.put("/users/:id", async (req, res) => {
  const { name, lastName, email, phoneNumber, question } = req.body;
  const newUser = { name, lastName, email, phoneNumber, question };
  await User.findByIdAndUpdate(req.params.id, newUser);
  res.json({ status: "User Updated!!" });
});

router.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ status: "User Deleted!!" });
});

module.exports = router;
