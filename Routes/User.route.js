const express = require("express");
const { userModel } = require("../Models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRoute = express.Router();

userRoute.post("/postscore", async (req, res) => {
  let { name, score, difficulty } = req.body;
  try {
    let user = new userModel({ name, score, difficulty });
    await user.save();
    res.send({ data: "saved scored" });
  } catch (error) {
    console.log(error.message);
  }
});

userRoute.get("/getscore", async (req, res) => {
  try {
    let users = await userModel.find();
    console.log(users);
    res.send({ users: users });
  } catch (error) {
    console.log(error.message);
  }
});

userRoute.get("/random", async (req, res) => {
  let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  // console.log(Math.floor(math.random()*26))
  let value = Math.floor(Math.random() * 10)+1
  let str=""
  for (i = 0; i < value; i++){
    let key = Math.floor(Math.random() * 25)
    str+=arr[key]
  }
  res.send({"str":str})
})

module.exports = { userRoute };
