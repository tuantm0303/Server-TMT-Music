import { Category } from "../models";

export const list = async (req, res) => {
  try {
    const categories = await Category.find({}).exec();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).json({
      message: "Không có thể loại nào!",
    });
  }
};

export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const category = await Category.findOne(filter).exec();
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({
      message: "Không có thể loại nào!",
    });
  }
};

export const create = async (req, res) => {
  const doc = req.body;
  try {
    const exitCategory = await Category.findOne({ name: doc.name }).exec();
    if (exitCategory) {
      return res.status(400).json({
        message: "Thể loại đã tồn tại!",
      });
    }
    const category = await new Category(doc).save();
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được thể loại!",
    });
  }
};

export const update = async (req, res) => {
  const filter = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const exitCategory = await Category.findOne({ name: doc.name }).exec();
    if (exitCategory) {
      return res.status(400).json({
        message: "Thể loại đã tồn tại!",
      });
    }
    const category = await Category.findOneAndUpdate(
      filter,
      doc,
      option
    ).exec();
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được thể loại!",
    });
  }
};

export const remove = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const category = await Category.findOneAndDelete(filter).exec();
    return res.status(200).json({
      message: "Xóa thành công!",
      category,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Không xóa được thể loại!",
    });
  }
};
