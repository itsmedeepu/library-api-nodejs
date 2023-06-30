require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => {
    console.log("connection successfull to database");
  })
  .catch((err) => {
    console.log(err);
  });
