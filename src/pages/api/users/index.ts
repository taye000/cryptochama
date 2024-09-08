import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

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
