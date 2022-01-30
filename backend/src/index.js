const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");
dotenv.config();

//Initiating Mongo Server

InitiateMongoServer();

//Express Server
const app = express();
app.use(morgan("dev"));

const port = process.env.PORT;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", user);

app.listen(port, () => {
  console.log(`Express Server has started at ${port}`);
});
