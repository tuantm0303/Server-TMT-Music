import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectionMongo } from "./connections";
import router from "./routers";

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(router);
connectionMongo;

// PORT RUN
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});
