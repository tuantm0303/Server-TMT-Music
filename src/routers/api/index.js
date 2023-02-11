import { Router } from "express";
import routerAuthor from "./author";
import routerCategory from "./category";
import routerSinger from "./singer";
import routerSong from "./song";
import routerSlide from "./slide";

const router = Router();

router.use("/authors", routerAuthor);
router.use("/categories", routerCategory);
router.use("/singers", routerSinger);
router.use("/songs", routerSong);
router.use("/slides", routerSlide);

export default router;
