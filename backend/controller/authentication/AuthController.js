const { body, validationResult } = require("express-validator");
const { where } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user/UserModel");

const Login = async (req, res) => {
  const errors = validationResult(req);
  let errorsInfor = "";
  if (!errors.isEmpty) {
    errors.array().forEach((e) => {
      errorsInfor += e.param + " " + e.msg + "\n";
    });
    return res.status(400).json({ msg: errorsInfor });
  }
  const existUser = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!existUser) {
    return res.status(400).json({ msg: "Không tồn tại tài khoản" });
  }
  const match = await bcrypt.compare(req.body.password, existUser.password);
  if (!match) {
    return res.status(400).json({ msg: "Mật khẩu đăng nhập sai" });
  }
  const token = jwt.sign(
    {
      id: existUser.id,
      email: existUser.email,
      position: existUser.position,
      workplace: existUser.workplace,
    },
    "jwt12345678",
    { expiresIn: 5 * 3600 * 1000 }
  );
  const options = {
    maxAge: 5 * 1000 * 3600,
    expires: new Date(Date.now() + 5 * 1000 * 3600),
    httpOnly: true,
    secure: true,
  };
  res.cookie("access_token", token, options);
  const email = existUser.email;
  const id = existUser.id;
  const username = existUser.username;
  const position = existUser.position;
  return res.status(200).json({ id, email, username, position });
};

module.exports = Login;
