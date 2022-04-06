import logger from "./logger";
import { config } from "dotenv";
config();

export default class ConfigUtils {
  static config;

  static async fetchconfig() {
    try {
      ConfigUtils.config = { MONGO_URI: process.env.MONGODB_URL };
    } catch (error) {
      logger.error(error);
    }
  }

  static async getconfig() {
    return this.config;
  }
}
