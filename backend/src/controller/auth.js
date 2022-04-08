import { Router } from "express";
import { check, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import signjson from "jsonwebtoken";
import User from "../models/user";
import logger from "../utils/logger";

const { genSalt, hash, compare } = bcrypt;
const { sign } = signjson;
const router = Router();

//signup controller
export const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({
      email,
    });
    if (user) {
      return res.status(400).json({
        msg: "User Already Exist",
      });
    }
    user = new User({
      email,
      password,
    });
    const salt = await genSalt(10);
    user.password = await hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
        email: user.email,
      },
    };

    sign(
      payload,
      "randomString",
      {
        expiresIn: "5 days",
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token,
        });
        console.log(token);
      },
    );
  } catch (err) {
    logger.error(err.message);
    res.status(500).send("Error in Saving");
  }
};

//login controller
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({
      email,
    });
    console.log(user);
    if (!user)
      return res.status(400).json({
        message: "User Not Exist",
      });

    const isMatch = await compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({
        message: "Incorrect Password !",
      });

    const payload = {
      user: {
        id: user.id,
        email: user.email,
      },
    };

    sign(
      payload,
      "randomString",
      {
        expiresIn: "5 days",
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token,
        });
      },
    );
  } catch (e) {
    logger.error(e);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export default router;
