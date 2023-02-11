import { Slide } from "../models";

export const list = async (req, res) => {
  try {
    const slides = await Slide.find({}).exec();
    return res.status(200).json(slides);
  } catch (error) {
    return res.status(400).json({
      message: "Không có slides nào!",
    });
  }
};

export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const slide = await Slide.findOne(filter).exec();
    return res.status(200).json(slide);
  } catch (error) {
    return res.status(400).json({
      message: "Không có slide nào!",
    });
  }
};

export const create = async (req, res) => {
  const doc = req.body;
  try {
    const exitSlide = await Slide.findOne({ name: doc.name }).exec();
    if (exitSlide) {
      return res.status(400).json({
        message: "Slide đã tồn tại!",
      });
    }
    const slide = await new Slide(doc).save();
    return res.status(200).json(slide);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được slide!",
    });
  }
};

export const update = async (req, res) => {
  const filter = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const slide = await Slide.findOneAndUpdate(filter, doc, option).exec();
    return res.status(200).json(slide);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được slide!",
    });
  }
};

export const remove = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const slide = await Slide.findOneAndDelete(filter).exec();
    return res.status(200).json({
      message: "Xóa thành công!",
      slide,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Không xóa được slide!",
    });
  }
};
