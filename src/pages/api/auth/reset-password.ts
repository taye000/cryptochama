import connectToDatabase from "@/lib/mongodb";
import { PasswordManager } from "@/lib/passwordmanager";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectToDatabase();

  const { recoveryCode, newPassword } = await request.json();

  const user = await User.findOne({
    recoveryCode,
    recoveryCodeExpiry: { $gt: Date.now() },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Invalid or expired recovery code" },
      { status: 400 }
    );
  }

  user.password = await PasswordManager.toHash(newPassword);
  user.recoveryCode = undefined;
  user.recoveryCodeExpiry = undefined;
  await user.save();

  return NextResponse.json({ message: "Password has been reset" });
}
