import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectionMongo } from "./connections";

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
connectionMongo;

// PORT RUN
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});
