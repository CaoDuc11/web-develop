const { body, check } = require("express-validator");

const checkLogin = [
  check("email").notEmpty().withMessage("Yêu cầu nhập email"),
  body("email").isEmail().withMessage("Yêu cầu nhập đúng định dạng"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Mật khẩu có it nhất 6 ký tự"),
];

const checkRegisterEmployee = [
  check("fullname").notEmpty().withMessage("Cần nhập tên đầy đủ"),
  check("username").notEmpty().withMessage("Cần nhập tài khoản"),
  check("email").notEmpty().withMessage("Cần nhập email"),
  check("password")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Mật khẩu ít nhất 8 kí tự"),
  check("password_confirm")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Mật khẩu ít nhất 8 kí tự"),
];

module.exports = { checkLogin, checkRegisterEmployee };
