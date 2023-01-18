import buildApp from "./app";

const envFile = ".env";

const server = buildApp(envFile);

export default server;
