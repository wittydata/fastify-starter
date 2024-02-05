import { FastifyLoggerOptions } from "fastify";
import { PinoLoggerOptions } from "fastify/types/logger";

const envToLogger: { [key: string]: PinoLoggerOptions | boolean } = {
  development: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "yyyy-mm-dd HH:MM:ss Z",
        ignore: "pid,hostname",
        singleLine: true,
        messageFormat: "{msg} {if req.method}<-- {req.method} {req.url}",
      },
    },
  },
  production: true,
  test: false,
};

export default <{ logger: FastifyLoggerOptions }>{ logger: envToLogger["development"] ?? true };
