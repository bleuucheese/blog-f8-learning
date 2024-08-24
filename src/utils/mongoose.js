const mongoose = require("mongoose");
module.exports = {
  multipleMongooseToObject: (mongooseArray) =>
    mongooseArray.map((item) => item.toObject()),
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
