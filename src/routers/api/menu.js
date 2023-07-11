import { Router } from "express";
import { controller } from "../../app";

const routerAuthor = Router();

routerAuthor.post("/", controller.menuController.create);
routerAuthor.get("/", controller.menuController.list);
routerAuthor.get("/:id", controller.menuController.read);
routerAuthor.put("/:id", controller.menuController.update);
routerAuthor.delete("/:id", controller.menuController.remove);

export default routerAuthor;
