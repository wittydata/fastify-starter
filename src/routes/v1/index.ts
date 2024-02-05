import { FastifyInstance, FastifyPluginOptions } from "fastify";

import fcm from "./fcm";

export default function (fastify: FastifyInstance, opts: FastifyPluginOptions, done: (err?: Error) => void): void {
  fastify.register(fcm, { prefix: "fcm" });
  done();
}
