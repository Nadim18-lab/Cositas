const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: false },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  question: { type: String, required: false },
});

module.exports = mongoose.model("User", UserSchema);
