import { Router } from "express";
import routerAuthor from "./author";
// import routerCategory from "./category";
// import routerSinger from "./singer";
// import routerSong from "./song";

const router = Router();

router.use("/authors", routerAuthor);
// router.use("/categories", routerCategory);
// router.use("/singers", routerSinger);
// router.use("/songs", routerSong);

export default router;
