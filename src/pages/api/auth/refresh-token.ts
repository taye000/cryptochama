import connectToDatabase from "@/lib/mongodb";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "your_refresh_token_secret";

export async function POST(request: Request) {
  await connectToDatabase();

  const { refreshToken } = await request.json();
  if (!refreshToken) {
    return NextResponse.json(
      { message: "No refresh token provided" },
      { status: 400 }
    );
  }

  try {
    const payload = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET) as {
      userId: string;
    };
    const user = await User.findById(payload.userId);

    if (!user || user.refreshToken !== refreshToken) {
      return NextResponse.json(
        { message: "Invalid refresh token" },
        { status: 401 }
      );
    }

    const newAccessToken = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    return NextResponse.json({ accessToken: newAccessToken }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid refresh token" },
      { status: 401 }
    );
  }
}
