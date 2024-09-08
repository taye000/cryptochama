import connectToDatabase from "@/lib/mongodb";
import { PasswordManager } from "@/lib/passwordmanager";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "your_refresh_token_secret";

const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const { email, password } = await req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await PasswordManager.compare(user.password, password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const accessToken = jwt.sign({ userId: user._id }, JWT_SECRET, {
    expiresIn: "1h",
  });
  const refreshToken = jwt.sign({ userId: user._id }, REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  // Save refresh token
  user.refreshToken = refreshToken;
  await user.save();
  return res
    .status(200)
    .json({ message: "Login successful", accessToken, refreshToken });
};

export default loginHandler;
