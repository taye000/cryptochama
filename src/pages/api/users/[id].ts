import { NextResponse } from "next/server";
import connectToDatabase from "@/app/lib/mongodb";
import User from "@/app/models/User";
import { Types } from "mongoose";

// PATCH /api/users/[id]
export async function PATCH(request: Request) {
  await connectToDatabase();

  const id = request.url.split("/").pop();
  if (!id || !Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  const data = await request.json();

  try {
    const updatedUser = await User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    }).exec();

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User updated successfully", user: updatedUser },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user", message: error.message },
      { status: 500 }
    );
  }
}
