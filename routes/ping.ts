import { FastifyInstance, FastifyRequest } from "fastify";
import { version, name } from "../package.json";

const ping = (fastify: FastifyInstance, _: any, done: () => void) => {
  fastify.get("", (request: FastifyRequest<any>, reply) => {
    reply.statusCode = 200;
    reply.send({
      name,
      version,
    });
  });
  done();
};

export default ping;
