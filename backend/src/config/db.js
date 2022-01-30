const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const url = process.env.MONGODB_URL;

const InitiateMongoServer = async () => {
  try {
    await mongoose
      .connect(url || "", { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("MongoDB Server Connected");
      });
  } catch (err) {
    console.log("Error Connecting to DB" + err);
    throw err;
  }
};

module.exports = InitiateMongoServer;
