import { fastifyCors, FastifyCorsOptions } from "@fastify/cors";
import { FastifyInstance, FastifyPluginCallback, FastifyRegisterOptions } from "fastify";

export default function cors(f: FastifyInstance): [FastifyPluginCallback, FastifyRegisterOptions<FastifyCorsOptions>] {
  const options = {
    // allowedHeaders: f.config.CORS_ALLOWED_HEADERS,
    // cacheControl: f.config.CORS_CACHE_CONTROL,
    // credentials: f.config.CORS_CREDENTIALS,
    // exposedHeaders: f.config.CORS_EXPOSED_HEADERS,
    // hideOptionsRoute: f.config.CORS_HIDE_OPTIONS_ROUTE,
    // maxAge: f.config.CORS_MAX_AGE,
    // methods: f.config.CORS_METHODS,
    // optionsSuccessStatus: f.config.CORS_OPTIONS_SUCCESS_STATUS,
    origin: f.config.CORS_ORIGIN,
    // preflight: f.config.CORS_PREFLIGHT,
    // preflightContinue: f.config.CORS_PREFLIGHT_CONTINUE,
    // strictPreflight: f.config.CORS_STRICT_PREFLIGHT,
  };
  return [fastifyCors, options];
}
