import mongoose, { Schema } from "mongoose";

const singerSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      lowercase: true,
      index: true,
    },
  },
  { timestamps: true }
);
singerSchema.index({ "$**": "text" });

export default mongoose.model("Singer", singerSchema);
