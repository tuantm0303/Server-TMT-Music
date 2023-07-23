import mongoose, { Schema } from "mongoose";

const menuSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      lowercase: true,
      index: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Menu", menuSchema);
