import { FastifyInstance, FastifyPluginOptions } from "fastify";

import v1 from "./v1";

const prefixApi = "api";

export default function (fastify: FastifyInstance, opts: FastifyPluginOptions, done: (err?: Error) => void): void {
  fastify.register(v1, { prefix: `${prefixApi}/v1` });
  done();
}
