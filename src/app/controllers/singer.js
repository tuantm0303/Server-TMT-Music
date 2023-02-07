import slugify from "slugify";
import { Singer, Song } from "../models";

export const list = async (req, res) => {
  try {
    const singers = await Singer.find({}).exec();
    return res.status(200).json(singers);
  } catch (error) {
    return res.status(400).json({
      message: "Không có ca sĩ nào!",
    });
  }
};

export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const singer = await Singer.findOne(filter).exec();
    return res.status(200).json(singer);
  } catch (error) {
    return res.status(400).json({
      message: "Không có ca sĩ nào!",
    });
  }
};

export const readSlug = async (req, res) => {
  const filter = { slug: req.params.slug };
  try {
    const singer = await Singer.findOne(filter).exec();
    return res.status(200).json(singer);
  } catch (error) {
    return res.status(400).json({
      message: "Không có ca sĩ nào!",
    });
  }
};

export const create = async (req, res) => {
  const doc = req.body;
  doc.slug = slugify(doc.fullname);
  try {
    const exitSinger = await Singer.findOne({ fullname: doc.fullname }).exec();
    if (exitSinger) {
      return res.status(400).json({
        message: "Ca sĩ đã tồn tại!",
      });
    }
    const singer = await new Singer(doc).save();
    return res.status(200).json(singer);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được ca sĩ!",
    });
  }
};

export const update = async (req, res) => {
  const filter = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  doc.slug = slugify(doc.fullname);
  try {
    const singer = await Singer.findOneAndUpdate(filter, doc, option).exec();
    return res.status(200).json(singer);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được ca sĩ!",
    });
  }
};

export const remove = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const singer = await Singer.findOneAndDelete(filter).exec();
    return res.status(200).json({
      message: "Xóa thành công!",
      singer,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Không xóa được ca sĩ!",
    });
  }
};

export const listSongBySinger = async (req, res) => {
  try {
    const singerId = await Singer.findOne({ _id: req.params.id }).exec();
    const songs = await Song.find({ singerId }).select("-singerId").exec();
    return res.status(200).json({
      singerId,
      songs,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Không tìm được ca sĩ!",
    });
  }
};
