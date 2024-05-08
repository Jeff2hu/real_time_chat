import bcryptjs from "bcryptjs";
import User from "../db/models/USER.js";
import generateJWT from "../utils/generateJWT.js";
import transformResponse from "../utils/response.js";

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

    if (!newUser) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    const jwt = generateJWT(newUser._id);

    if (!jwt) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    await newUser.save();

    const data = {
      _id: newUser._id,
      fullName,
      userName,
      profilePic: newUser.profilePic,
      jwt,
    };

    res.status(200).json(transformResponse("User created successfully", data));
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

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordMatched = await bcryptjs.compare(
      password,
      user.password ?? ""
    );

    if (!isPasswordMatched) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const jwt = generateJWT(user._id);

    if (!jwt) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    const data = {
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
      jwt,
    };

    res.status(200).json(transformResponse("Login successful", data));
  } catch (err) {
    console.log("login error", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
