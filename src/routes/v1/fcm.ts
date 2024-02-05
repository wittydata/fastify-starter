import { FastifyInstance, FastifyPluginOptions } from "fastify";

import { fcm } from "../../util";
import { FCMMessage, FCMSendReply, ReplyWithError } from "../../types/routes/v1";

export default function (fastify: FastifyInstance, opts: FastifyPluginOptions, done: (err?: Error) => void): void {
  fastify.post<{ Body: FCMMessage }>("/send", async function (request, reply) {
    try {
      reply.code(200);
      return <FCMSendReply>{ status: "success", message: await fcm.send(request.body) };
    } catch (err) {
      reply.code(400);
      console.log("Unable to send:", err);
      return <ReplyWithError>{ status: "error", error: err };
    }
  });
  done();
}
