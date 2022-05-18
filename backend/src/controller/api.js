// import pkg from "express";
// const { req, Response } = pkg;
import Api from "../models/api";
import user from "../models/user";
import logger from "../utils/logger";

export const createApi = async (req, res) => {
  try {
    const Apis = new Api(req.body);
    const API = await Apis.save();

    const User = await user.findOne({ _id: "6228573fa9e941baa3d8a09f" });
    User.apis.push(API);
    User.save();

    res.send({
      message: "Api created",
      data: API,
    });
  } catch (err) {
    logger.error(err);
    res.status(400).send({
      message: error.message,
    });
  }
};

// export const getApi = async (req, res, next) => {
//     try {
//       const Api =
//     }
// }
