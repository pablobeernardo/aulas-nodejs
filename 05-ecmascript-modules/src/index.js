import { disconectDatabase, connectToDatabase } from "./utils/database.js";
import { getDataFromApi } from "./utils/api.js";

connectToDatabase("my-database");
disconectDatabase("Mydata");
getDataFromApi()
