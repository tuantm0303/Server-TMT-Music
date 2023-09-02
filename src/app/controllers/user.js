import jwt from "jsonwebtoken";
import passport from "passport";
import middlewares from "../../middlewares";
import { User } from "../models";

export const signup = async (req, res) => {
  const { username, email, password } = req.body
  try {
    const userExit = await User.findOne({ email }).exec()
    if (userExit) {
      return res.status(400).json({
        message: "Tài khoản đã tồn tại trước đó!"
      })
    }
    const user = await new User({ username, email, password }).save()
    return res.status(200).json({
      message: 'Đăng kí thành công!',
      username: user.username,
      email: user.email
    })
  } catch (error) {
    return res.status(400).json({
      message: "Đăng kí không thành công!",
    });
  }
}

export const signin = async (req, res, next) => {
  passport.authenticate("local", (error, user, info) => {
    if (error) {
      console.log(error);

      return res.status(400).json({
        status: 400,
        message: "Có lỗi rồi hãy thử lại sau!",
      });
    }
    const token = jwt.sign({ sub: user }, middlewares.secrets.JWT_SECRENT, {
      expiresIn: middlewares.secrets.JWT_MAX_AGE,
    });

    if (info) {
      return res.status(400).json({
        status: 400,
        info,
      });
    }

    return res.status(200).json({
      status: 200,
      message: "Đăng nhập thành công!",
      token: `Bearer ` + token,
      user: {
        email: user.email,
        username: user.username,
      },
    });
  })(req, res, next);
};