const jwt = require("jsonwebtoken");

const authenticationUser = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(400).json({ msg: "Bạn chưa đăng nhập" });
  }
  const data = jwt.verify(token, "jwt12345678");
  if (!data) {
    return res.status(401).json({ msg: "Cảnh báo không xác thực" });
  }
  req.Id = data.id;
  req.Email = data.email;
  req.Position = data.position;
  req.Workplace = data.workplace;
  return next();
};

//Kiểm tra tài khoản của quản lí điểm giao dịch
const checkAdminDistribution = async (req, res, next) => {
  if (req.Position == "admin_distribution") {
    return next();
  }
  return res.status(403).json({ msg: "Người dùng không có quyền truy cập" });
};

//Kiểm tra tài khoản của nhân viên điểm giao dịch
const checkEmployeeDistribution = async (req, res, next) => {
  if (req.Position == "employee_distribution") {
    return next();
  }
  return res.status(403).json({ msg: "Người dùng không có quyền truy cập" });
};

module.exports = {
  authenticationUser,
  checkAdminDistribution,
  checkEmployeeDistribution,
};
