import mongoose from "mongoose";
import { configMongo } from "../configs";

const runLocalhost = configMongo.localhost;

mongoose.set("strictQuery", true);

export const connectionMongo = mongoose
  .connect(
    `${runLocalhost.uri}:${runLocalhost.port}/${runLocalhost.databaseName}`
  )
  .then(() => console.log("Connect Database success!"))
  .catch((error) => console.log('error: ', error));

export default connectionMongo;
