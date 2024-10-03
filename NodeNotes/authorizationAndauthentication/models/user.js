const Joi = require("joi");
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstName: {
      type: String,
      minLength: 1,
      maxLength: 50,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      minLength: 1,
      maxLength: 50,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      minLength: 5,
      maxLength: 30,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      minLength: 5,
      maxLength: 255,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 1024,
    },
  })
);

function validateUser(user) {
  const schema = {
    firstName: Joi.string().min(1).max(30).required().trim(),
    lastName: Joi.string().min(1).max(30).required().trim(),
    username: Joi.string().min(5).max(30).required().trim(),
    email: Joi.string().min(5).max(255).required().trim().lowercase().email(),
    password: Joi.string().required().min(8).max(1024),
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
