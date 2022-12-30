import { Router } from "express";
import { controller } from "../../app";
// import { jwtAuth } from "../../middlewares";

const routerAuthor = Router();

// routerAuthor.use("/", jwtAuth);

routerAuthor.post("/", controller.authorController.create);
routerAuthor.get("/", controller.authorController.list);
routerAuthor.get("/:id", controller.authorController.read);
routerAuthor.put("/:id", controller.authorController.update);
routerAuthor.delete("/:id", controller.authorController.remove);

export default routerAuthor;
