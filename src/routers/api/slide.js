import { Router } from "express";
import { controller } from "../../app";
// import { jwtAuth } from "../../middlewares";

const routerSlide = Router();

// routerSlide.use("/", jwtAuth);

routerSlide.post("/", controller.slideController.create);
routerSlide.get("/", controller.slideController.list);
routerSlide.get("/:id", controller.slideController.read);
routerSlide.put("/:id", controller.slideController.update);
routerSlide.delete("/:id", controller.slideController.remove);

export default routerSlide;
