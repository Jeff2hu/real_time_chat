import User from "../db/models/USER.js";
import transformResponse from "../utils/response.js";

export async function getUserForSideBar(req, res) {
  try {
    const currentUser = req.user._id;

    const filterUser = await User.find({ _id: { $ne: currentUser } }).select(
      "-password"
    );

    res.status(200).json(transformResponse("successful", filterUser));
  } catch (err) {
    console.log("getUserForSideBar error", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
