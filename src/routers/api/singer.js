import { Router } from "express";
import { controller } from "../../app";
// import { jwtAuth } from "../../middlewares";

const routerSinger = Router();

// routerSinger.use("/", jwtAuth);

routerSinger.post("/", controller.singerController.create);
routerSinger.get("/", controller.singerController.list);
routerSinger.get("/:id", controller.singerController.read);
routerSinger.put("/:id", controller.singerController.update);
routerSinger.delete("/:id", controller.singerController.remove);

export default routerSinger;