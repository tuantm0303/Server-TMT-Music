import { Router } from "express";
import { controller } from "../../app";
// import { jwtAuth } from "../../middlewares";

const routerCategory = Router();

// routerCategory.use("/", jwtAuth);

routerCategory.post("/", controller.categoryController.create);
routerCategory.get("/", controller.categoryController.list);
routerCategory.get("/:id", controller.categoryController.read);
routerCategory.get("/slug/:slug", controller.categoryController.readSLug);
routerCategory.put("/:id", controller.categoryController.update);
routerCategory.delete("/:id", controller.categoryController.remove);

export default routerCategory;
