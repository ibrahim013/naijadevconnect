const mongose = require("mongoose");
const Schema = mongose.Schema;

/**
 * @description user schema
 */
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  verification:{
    type: Boolean,
    default: false
  }
});
module.exports = User = mongose.model("users", UserSchema);
