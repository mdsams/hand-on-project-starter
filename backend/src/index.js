const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
const url = process.env.MONGODB_URL;

const app = express();

mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB Server Connected");
  })
  .catch((err) => {
    console.log("Error Connecting to DB" + err);
  });

app.listen(port, () => {
  console.log(`Express Server has started at ${port}`);
});
