import fastify, { FastifyInstance } from "fastify";

const fastifyStatic = require("fastify-static");

import path from "path";

const Cors = require("fastify-cors");

// const Cors = require("fastify-cors")

import ping from "./routes/ping";

import dotenv from "dotenv";

const buildApp = async (envFile: string): Promise<FastifyInstance> => {
  dotenv.config({
    path: `../${envFile}`,
  });

  const app = fastify({ logger: true });

  app.register(fastifyStatic, {
    root: path.join(process.cwd(), "../client/build"),
    prefix: "/",
  });

  app.register(Cors, {
    origin: "*",
  });

  app.register(ping, { prefix: "/api/ping" });
  const port = process.env.PORT || "3005";

  const listenOptions = {
    port: 3005,
    address: "0.0.0.0",
  };

  app.listen(listenOptions, () => {
    console.log(`Server Running at ${port} 🚀`);
  });

  return app;
};

process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});

export default buildApp;
