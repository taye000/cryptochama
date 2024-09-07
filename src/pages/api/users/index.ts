import { NextResponse } from "next/server";
import User from "@/app/models/User";
import connectToDatabase from "@/app/lib/mongodb";

export async function POST(request: Request) {
  await connectToDatabase();

  const { name, email, password } = await request.json();

  const newUser = new User({
    name,
    email,
    password,
  });

  await newUser.save();

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
