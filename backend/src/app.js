import express, { urlencoded, json } from "express";
import morgan from "morgan";
import logger from "./utils/logger";
import { config } from "dotenv";
import { auth } from "./routes/user";
import { apiRoute } from "./routes/user";
import { apiUser } from "./routes/user";

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

app.use("/auth", auth);
app.use("/api", apiRoute);
app.use("/user", apiUser);

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
