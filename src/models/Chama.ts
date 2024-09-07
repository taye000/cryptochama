import mongoose from "mongoose";
import { IChama } from "../@types/chama";

const ChamaSchema: mongoose.Schema<IChama> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "",
    },
    members: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Chama || mongoose.model("Chama", ChamaSchema);
