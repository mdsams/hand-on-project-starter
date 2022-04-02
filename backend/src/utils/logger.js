const { createLogger, format, transports } = require("winston");

const enumerateErrorFormat = format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

module.exports = createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: format.combine(
    enumerateErrorFormat(),
    process.env.NODE_ENV === "production"
      ? format.uncolorize()
      : format.colorize(),
    format.splat(),
    format.printf(({ level, message }) => `${level}: ${message}`),
  ),
  defaultMeta: { servive: "user-service" },
  transports: [
    new transports.File({
      filename: `${Date.now()}.log`,
      dirname: "./logs",
      maxsize: 5242880,
      tailable: true,
    }),
    new transports.Console({
      stderrLevels: ["error"],
    }),
  ],
});
