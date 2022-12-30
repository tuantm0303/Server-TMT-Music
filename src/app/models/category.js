import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
      index: true,
    },
  },
  { timestamps: true }
);
categorySchema.index({ "$**": "text" });

export default mongoose.model("Category", categorySchema);
