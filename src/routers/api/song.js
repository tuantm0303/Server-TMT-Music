import { Router } from "express";
import { controller } from "../../app";
// import { jwtAuth } from "../../middlewares";

const routerSong = Router();

// routerSong.use("/", jwtAuth);

routerSong.post("/", controller.songController.create);
routerSong.get("/", controller.songController.list);
routerSong.get("/:id", controller.songController.read);
routerSong.get("/slug/:slug", controller.songController.readSlug);
routerSong.put("/:id", controller.songController.update);
routerSong.delete("/:id", controller.songController.remove);

export default routerSong;
