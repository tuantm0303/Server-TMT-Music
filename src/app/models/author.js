import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Author", authorSchema);
