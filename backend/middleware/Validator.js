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

const checkFormDelivery = [
  check("senderName").notEmpty().withMessage("Cần nhập tên người gửi"),
  check("senderPhone")
    .notEmpty()
    .withMessage("Cần nhập số điện thoại người gửi"),
  check("senderAddress").notEmpty().withMessage("Cần nhập địa chỉ người gửi"),
  check("senderProvince")
    .notEmpty()
    .withMessage("Cần nhập tỉnh thành người gửi"),
  check("senderDistrict")
    .notEmpty()
    .withMessage("Cần nhập quận huyện người gửi"),
  check("senderWard").notEmpty().withMessage("Cần nhập phường đầy đủ"),

  check("receiverName").notEmpty().withMessage("Cần nhập tên người nhận"),
  check("receiverPhone")
    .notEmpty()
    .withMessage("Cần nhập số điện thoại người nhận"),
  check("receiverAddress")
    .notEmpty()
    .withMessage("Cần nhập địa chỉ người nhận"),
  check("receiverProvince")
    .notEmpty()
    .withMessage("Cần nhập tỉnh thành người nhận"),
  check("receiverDistrict")
    .notEmpty()
    .withMessage("Cần nhập quận huyện người nhận"),
  check("receiverWard").notEmpty().withMessage("Cần nhập phường đầy nhận"),

  check("parcelContent").notEmpty().withMessage("Cần nhập nội dung hàng hóa"),
  check("parcelWeight").notEmpty().withMessage("Cần nhập trọng lượng hàng hóa"),

  check("cod").notEmpty().withMessage("Cần nhập cước cod"),
  check("feeMain").notEmpty().withMessage("Cần nhập cước chính"),
  check("feeSub").notEmpty().withMessage("Cần nhập cước phụ"),
  check("gtgt").notEmpty().withMessage("Cần nhập cước gtgt"),
  check("vat").notEmpty().withMessage("Cần nhập cước vat"),
  check("other").notEmpty().withMessage("Cần nhập cước khác"),
];

module.exports = { checkLogin, checkRegisterEmployee, checkFormDelivery };
