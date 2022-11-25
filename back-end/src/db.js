import { MongoClient } from "mongodb";

let client;

export const initializeDbConnection = async () => {
  client = await MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const getDbConnection = (dbName) => {
  console.log("db is connected");
  const db = client.db(dbName);
  return db;
};
