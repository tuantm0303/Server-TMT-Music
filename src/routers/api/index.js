import { Router } from "express";
import routerAuthor from "./author";
import routerCategory from "./category";
import routerMenu from "./menu";
import routerSinger from "./singer";
import routerSlide from "./slide";
import routerSong from "./song";
import routerUser from "./user";

const router = Router();

router.use("/authors", routerAuthor);
router.use("/categories", routerCategory);
router.use("/singers", routerSinger);
router.use("/songs", routerSong);
router.use("/slides", routerSlide);
router.use("/menus", routerMenu);
router.use("/", routerUser);

export default router;
