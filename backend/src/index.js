const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const user = require("./routes/user");
const auth = require("./middlewares/auth");
const verify = require("./routes/verify");
const InitiateMongoServer = require("./config/db");
const logger = require("./utils/logger");
dotenv.config();

//Initiating Mongo Server

InitiateMongoServer();

//Express Server
const app = express();

const port = process.env.PORT;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", user);
app.use("/protected", auth, verify);

app.listen(port, () => {
  logger.info(`Express Server has started at ${port}`);
});
