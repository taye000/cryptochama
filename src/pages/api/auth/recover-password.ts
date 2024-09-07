import connectToDatabase from "@/lib/mongodb";
import { generateRandomCode } from "@/lib/randomCodeGenerator";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectToDatabase();

  const { email } = await request.json();
  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json({ message: "Email not found" }, { status: 404 });
  }

  const recoveryCode = generateRandomCode();
  user.recoveryCode = recoveryCode;
  user.recoveryCodeExpiry = Date.now() + 3600000; // 1 hour
  await user.save();

  const recoveryUrl = `${process.env.BASE_URL}/auth/reset-password`;

  // TODO: Send recovery email with the recovery code

  return NextResponse.json({ message: "Recovery code sent to your email" });
}
