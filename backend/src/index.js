import ConfigUtils from "./utils/config";
import DatabaseUtils from "./utils/database";
import startServer from "./app";
import logger from "./utils/logger";

ConfigUtils.fetchconfig()
  .then(async () => {
    await DatabaseUtils.connectToDB();
    await startServer();
  })
  .catch((error) => {
    logger.error(error);
    process.exit(-1);
  });
