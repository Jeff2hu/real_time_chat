import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoDb from "./db/connectToMongoDb.js";

import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.js";
import userRoutes from "./routes/user.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(port || 3000, () => {
  connectToMongoDb();
  console.log(`Server is running on http://localhost:${port || 3000}`);
});
