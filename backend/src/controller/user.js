import User from "../models/user";
import logger from "../utils/logger";

export const getUser = async (req, res) => {
  try {
    const getuserDetail = await User.findById(req.query.id, {
      password: 0,
    }).populate("apis");
    res.send({
      data: getuserDetail,
    });
  } catch (error) {
    logger.error(error);
    res.status(400).send({
      message: error.message,
    });
  }
};

export const UpdateUser = async (req, res) => {
  try {
    const updateUserDetails = await User.findByIdAndUpdate(req.query.id, {
      $push: { "address.$.pincode": JSON.parse(req.body) },
    });
    res.send({
      data: updateUserDetails,
    });
  } catch (error) {
    logger.error(error);
    res.status(400).send({
      message: error.message,
    });
  }
};
