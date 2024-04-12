import bcryptjs from "bcryptjs";
import User from "../db/models/USER.js";
import generateJWTAndSetCookie from "../utils/generateJWT.js";

export async function signUp(req, res) {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password didn't match" });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    const sault = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, sault);

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender == "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateJWTAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        message: "User created successfully",
        data: {
          _id: newUser._id,
          fullName,
          userName,
          profilePic: newUser.profilePic,
        },
      });
    }
  } catch (err) {
    console.log("signUp error", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function login(req, res) {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res
        .status(400)
        .json({ message: "Please provide username and password" });
    }

    const user = await User.findOne({ userName });
    const isPasswordMatched = await bcryptjs.compare(
      password,
      user.password ?? ""
    );

    if (!user || !isPasswordMatched) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    generateJWTAndSetCookie(user._id, res);
    res.status(200).json({
      message: "Login successful",
      data: {
        _id: user._id,
        fullName: user.fullName,
        userName: user.userName,
        profilePic: user.profilePic,
      },
    });
  } catch (err) {
    console.log("login error", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function logout(req, res) {
  try {
    res.cookie("JWT", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    console.log("logout error", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
