import mongoose from "mongoose";
import { IUser } from "../@types/user";

const UserSchema: mongoose.Schema<IUser> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    walletAddress: {
      type: String,
      default: "",
    },
    photo: {
      type: String,
      default: "",
    },
    chamaId: {
      type: String,
      default: "",
    },
    refreshToken: {
      type: String,
      default: "",
    },
    recoveryCode: {
      type: String,
      default: "",
    },
    recoveryCodeExpiry: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
