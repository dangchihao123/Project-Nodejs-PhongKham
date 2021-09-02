import userService from "../services/userService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  // check email người dùng có tồn tại hay không
  // so sánh password người dùng không hợp lệ
  // return userInfo
  // access token
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter!",
    });
  }
  let userData = await userService.handleUserLogin(email, password);
  return res.status(200).json({
    errCode: userData.errorCode,
    message: userData.errorMessage,
    user: userData.user ? userData.user : {},
  });
};

module.exports = {
  handleLogin,
};
