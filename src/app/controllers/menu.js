import slugify from "slugify";
import { Menu } from "../models";

export const list = async (req, res) => {
  try {
    const menus = await Menu.find({}).exec();
    return res.status(200).json(menus);
  } catch (error) {
    return res.status(400).json({
      message: "Không có menu nào!",
    });
  }
};

export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const menu = await Menu.findOne(filter).exec();
    return res.status(200).json(menu);
  } catch (error) {
    return res.status(400).json({
      message: "Không có menu nào!",
    });
  }
};

export const create = async (req, res) => {
  const doc = req.body;
  doc.slug = slugify(doc.name);
  try {
    const exitMenu = await Menu.findOne({ name: doc.name }).exec();
    if (exitMenu) {
      return res.status(400).json({
        message: "menu đã tồn tại!",
      });
    }
    const menu = await new Menu(doc).save();
    return res.status(200).json(menu);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được menu!",
    });
  }
};

export const update = async (req, res) => {
  const filter = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  doc.slug = slugify(doc.name);
  try {
    const menu = await Menu.findOneAndUpdate(filter, doc, option).exec();
    return res.status(200).json(menu);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được menu!",
    });
  }
};

export const remove = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const menu = await Menu.findOneAndDelete(filter).exec();
    return res.status(200).json({
      message: "Xóa thành công!",
      menu,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Không xóa được menu!",
    });
  }
};