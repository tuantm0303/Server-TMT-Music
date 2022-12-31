import slugify from "slugify";
import { Song } from "../models";

export const list = async (req, res) => {
  try {
    const songs = await Song.find({}).exec();
    return res.status(200).json(songs);
  } catch (error) {
    return res.status(400).json({
      message: "Không có bài hát nào!",
    });
  }
};

export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const song = await Song.findOne(filter).exec();
    return res.status(200).json(song);
  } catch (error) {
    return res.status(400).json({
      message: "Không có bài hát nào!",
    });
  }
};

export const readSlug = async (req, res) => {
  const filter = { slug: req.params.slug };
  try {
    const song = await Song.findOne(filter).exec();
    return res.status(200).json(song);
  } catch (error) {
    return res.status(400).json({
      message: "Không có bài hát nào!",
    });
  }
};

export const create = async (req, res) => {
  const doc = req.body;
  doc.slug = slugify(doc.title);
  try {
    const exitSong = await Song.findOne({ title: doc.title }).exec();
    if (exitSong) {
      return res.status(400).json({
        message: "Bài hát đã tồn tại!",
      });
    }
    const song = await new Song(doc).save();
    return res.status(200).json(song);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được bài hát!",
    });
  }
};

export const update = async (req, res) => {
  const filter = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  doc.slug = slugify(doc.title);
  try {
    const exitSong = await Song.findOne({ title: doc.title }).exec();
    if (exitSong) {
      return res.status(400).json({
        message: "Bài hát đã tồn tại!",
      });
    }
    const song = await Song.findOneAndUpdate(filter, doc, option).exec();
    return res.status(200).json(song);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được bài hát!",
    });
  }
};

export const remove = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const song = await Song.findOneAndDelete(filter).exec();
    return res.status(200).json({
      message: "Xóa thành công!",
      song,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Không xóa được bài hát!",
    });
  }
};
