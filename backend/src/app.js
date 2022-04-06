import express, { urlencoded, json } from "express";
import morgan from "morgan";
import { config } from "dotenv";
// const user = require("./routes/user");
// const auth = require("./middlewares/auth");
// const verify = require("./routes/verify");
import logger from "./utils/logger";
config();

//Express Server
const app = express();

const port = process.env.PORT;

//Middleware
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.json({ message: "API Working" });
// });

// app.use("/user", user);
// app.use("/protected", auth, verify);

export default async () => {
  try {
    app.listen(port, () => {
      logger.info(`App Service listening on http://localhost:${port}`);
    });
  } catch (error) {
    logger.error("An error occured while starting the server");
    throw new Error("An error occured while starting the server");
  }
};
