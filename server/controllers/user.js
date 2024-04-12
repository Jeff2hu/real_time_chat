import User from "../db/models/USER.js";

export async function getUserForSideBar(req, res) {
  try {
    const currentUser = req.user._id;

    const filterUser = await User.find({ _id: { $ne: currentUser } }).select(
      "-password"
    );

    res.status(200).json(filterUser);
  } catch (err) {
    console.log("getUserForSideBar error", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
