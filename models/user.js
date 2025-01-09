const mongoose = require("mongoose");
const user = new mongoose.Schema({
  name: {
    type: String,
    // required:true,
  },
  email: {
    type: String,
    // required:true,
    unique: true,
  },
//   password: {
//     type: String,
//     // required: true,
//     minlength: 5,
//   },
//   location: {
//     type: String,
//   },
//   avatar: {
//     type: String,
//   },
});

const User = mongoose.model("User", user);
module.exports = User;
