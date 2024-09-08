import connectToDatabase from "@/lib/mongodb";
import { PasswordManager } from "@/lib/passwordmanager";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "your_refresh_token_secret";

const registerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const { name, email, phone, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    const hashedPassword = await PasswordManager.toHash(password);

    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    await newUser.save();

    const accessToken = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    const refreshToken = jwt.sign(
      { userId: newUser._id },
      REFRESH_TOKEN_SECRET,
      {
        expiresIn: "7d",
      }
    );

    newUser.refreshToken = refreshToken;

    await newUser.save();

    return res.status(201).json({
      message: "User registered successfully",
      accessToken,
      refreshToken,
    });
  } catch (error: any) {
    console.error("Error registering user:", error);
    return res
      .status(500)
      .json({ message: "Failed to register user", error: error.message });
  }
};

export default registerHandler;
