import mongoose from "mongoose";
import { configMongo } from "../configs";

const runLocalhost = configMongo.localhost;

mongoose.set("strictQuery", true);

export const connectionMongo = mongoose
  .connect(
    // `${runLocalhost.uri}:${runLocalhost.port}/${runLocalhost.databaseName}`
    'mongodb+srv://minhtuan0330:Xlb1PGWwqcbT7vmY@cluster0.1jvxnvh.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log("Connect Database success!"))
  .catch((error) => console.log('error: ', error));

export default connectionMongo;
