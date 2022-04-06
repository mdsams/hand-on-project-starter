import connect1 from "mongoose";
import ConfigUtils from "./config";
import logger from "./logger";
const { connect } = connect1;

const readyState = ["disconnected", "connected", "connecting", "disconnecting"];

export default class DatabaseUtils {
  static async connectToDB() {
    try {
      const config = await ConfigUtils.getconfig();
      if (config.MONGO_URI === undefined) {
        throw new Error("Cannot find MONGO_URI in configuration, exiting !");
      } else {
        const dbconnection = await connect(config.MONGO_URI);
        if (dbconnection.connection.readyState !== 1) {
          throw new HandyManError(
            ErrorCode.CONN_ERROR,
            `Database READY_STATE: ${
              readyState[dbconnection.connection.readyState]
            }`,
          );
        }
        logger.info(
          `Database connected on ${dbconnection.now()}\n` +
            `READY_STATE: ${
              readyState[dbconnection.connection.readyState]
            } \n` +
            `HOST: ${dbconnection.connection.host} \n` +
            `DATABASE: ${dbconnection.connection.name}`,
        );
      }
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
}
