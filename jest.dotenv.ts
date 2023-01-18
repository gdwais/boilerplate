import dotenv from "dotenv";

const envFile = ".env.test";
dotenv.config({
  path: `./${envFile}`,
});
