import mongoose, { Schema } from "mongoose";

const songSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    lyric: {
      type: String,
      required: true,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
    singerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Singer",
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
      index: true,
    },
    audio: {
      type: String,
      required: true,
    },
    favourite: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
songSchema.index({ "$**": "text" });

export default mongoose.model("Song", songSchema);
