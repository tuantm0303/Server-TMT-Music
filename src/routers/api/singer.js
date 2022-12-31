import { Router } from "express";
import { controller } from "../../app";
// import { jwtAuth } from "../../middlewares";

const routerSinger = Router();

// routerSinger.use("/", jwtAuth);

routerSinger.post("/", controller.singerController.create);
routerSinger.get("/", controller.singerController.list);
routerSinger.get("/:id", controller.singerController.read);
routerSinger.get("/slug/:slug", controller.singerController.readSlug);
routerSinger.put("/:id", controller.singerController.update);
routerSinger.delete("/:id", controller.singerController.remove);
routerSinger.get("/listSong/:id", controller.singerController.listSongBySinger);

export default routerSinger;
