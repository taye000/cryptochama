import connectToDatabase from "@/lib/mongodb";
import { PasswordManager } from "@/lib/passwordmanager";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "your_refresh_token_secret";

export async function POST(request: Request) {
  await connectToDatabase();

  const { email, password } = await request.json();

  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const isMatch = await PasswordManager.compare(user.password, password);
  if (!isMatch) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
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

  return NextResponse.json(
    { message: "Login successful", accessToken, refreshToken },
    { status: 200 }
  );
}
