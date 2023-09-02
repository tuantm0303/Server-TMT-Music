import { Router } from "express";
import { controller } from "../../app";
// import { jwtAuth } from "../../middlewares";

const routerUser = Router();

// routerUser.use("/", jwtAuth);

routerUser.post("/signup", controller.userController.signup);
routerUser.post("/signin", controller.userController.signin);

export default routerUser;
