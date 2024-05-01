import { config } from "dotenv";
import mongoose from "mongoose";

config();

const { MONGO_URL } = process.env;

export const connect = async () => {
  if (!MONGO_URL) {
    throw new Error("MONGO URL is not specified");
  }

  return await mongoose.connect(MONGO_URL);
};

export const disconnect = async () => {
  await mongoose.connection.close();
};

export const execute = async (fn: () => Promise<void>) => {
  await connect();
  await fn();
  await disconnect();
  process.exit();
};

mongoose.connection
  .on("connected", () => {
    console.log(`Connected to the database: ${MONGO_URL}`);
  })
  .on("disconnected", () => {
    console.log(`Disconnected from the database: ${MONGO_URL}`);
  })
  .on("error", (error) => {
    console.log(`Database connection error: ${MONGO_URL}`, error);
  });
