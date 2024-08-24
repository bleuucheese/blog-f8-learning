const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Connection failed!");
  }
}

module.exports = { connect };
