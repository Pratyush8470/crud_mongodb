const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/database")
.then(() => console.log("db connected.....!"))
.catch(() => {
    console.log("db not connected.....!");
});

const mongooseSchema = new mongoose.Schema({
    bankName: { type: String },
    diposite: { type: Number, require: true },
    accountNo: { type: Number, require: true },
    name: { type: String, require: true },
    mobileNo: { type: Number },
    method: { type: String },
    other: { type: String },
  });
  const models = mongoose.model("database", mongooseSchema);
  module.exports =models;