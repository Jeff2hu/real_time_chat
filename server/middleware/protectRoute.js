import jwt from "jsonwebtoken";
import User from "../db/models/USER.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.JWT;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user;

    next();
  } catch (err) {
    console.log("protectRoute error", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default protectRoute;
