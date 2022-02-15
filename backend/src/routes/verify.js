const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/me", async (req, res) => {
  try {
    //request.user is getting fetched from Middleware after token authentication
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});

module.exports = router;
