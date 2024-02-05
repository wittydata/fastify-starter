import { fastify, FastifyInstance, FastifyListenOptions } from "fastify";

import { compress, cors, env, logger } from "./config";
import { EnvConfig } from "./config/env";
import routes from "./routes";
import { fcm } from "./util";

declare global {
  // eslint-disable-next-line no-var
  var config: EnvConfig;
}

declare module "fastify" {
  interface FastifyInstance {
    // this should be same as the confKey in options
    // specify your typing here
    config: EnvConfig;
  }
}

const f: FastifyInstance = fastify(logger).register(...env());
start(f);

function listen(f: FastifyInstance): (err: Error | null, address: string) => void {
  return async (err: Error | null, address: string): Promise<void> => {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    console.log(`${f.config.NAME} listening at ${address}`);
  };
}

function init(f: FastifyInstance): [FastifyListenOptions, (err: Error | null, address: string) => void] {
  const options: FastifyListenOptions = { host: f.config.HOST, port: f.config.PORT };
  return [options, listen(f)];
}

async function start(f: FastifyInstance): Promise<void> {
  await f;
  f.register(...compress())
    .register(...cors(f))
    .register(routes)
    .listen(...init(f));
  global.config = f.config;
  fcm.init(f.config);
}
