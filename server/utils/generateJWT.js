import jwt from "jsonwebtoken";

const generateJWT = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  // res.cookie("JWT", token, {
  //   httpOnly: true,
  //   maxAge: 15 * 24 * 60 * 60 * 1000,
  //   sameSite: "strict",
  //   secure: process.env.NODE_ENV !== "development",
  // });
};

export default generateJWT;
