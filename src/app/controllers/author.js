import { Author, Song } from "../models";

export const list = async (req, res) => {
  try {
    const authors = await Author.find({}).exec();
    return res.status(200).json(authors);
  } catch (error) {
    return res.status(400).json({
      message: "Không có tác giả nào!",
    });
  }
};

export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const author = await Author.findOne(filter).exec();
    return res.status(200).json(author);
  } catch (error) {
    return res.status(400).json({
      message: "Không có tác giả nào!",
    });
  }
};

export const create = async (req, res) => {
  const doc = req.body;
  try {
    const exitAuthor = await Author.findOne({ name: doc.name }).exec();
    if (exitAuthor) {
      return res.status(400).json({
        message: "Tác giả đã tồn tại!",
      });
    }
    const author = await new Author(doc).save();
    return res.status(200).json(author);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được tác giả!",
    });
  }
};

export const update = async (req, res) => {
  const filter = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const author = await Author.findOneAndUpdate(filter, doc, option).exec();
    return res.status(200).json(author);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được tác giả!",
    });
  }
};

export const remove = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const author = await Author.findOneAndDelete(filter).exec();
    return res.status(200).json({
      message: "Xóa thành công!",
      author,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Không xóa được tác giả!",
    });
  }
};

export const listSongBySinger = async (req, res) => {
  try {
    const authorId = await Author.findOne({ _id: req.params.id }).exec();
    const songs = await Song.find({ authorId }).select("-authorId").exec();
    return res.status(200).json({
      authorId,
      songs,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Không tìm được tác giả!",
    });
  }
};
