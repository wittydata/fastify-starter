import { fastifyEnv, FastifyEnvOptions } from "@fastify/env";
import { Type } from "@sinclair/typebox";
import { FastifyPluginCallback, FastifyRegisterOptions } from "fastify";

const schema = Type.Object({
  NAME: Type.String({ default: "Fastify Starter" }),
  HOST: Type.String({ default: "0.0.0.0" }),
  PORT: Type.Number({ default: 3100 }),
  URL: Type.String({ default: "http://localhost:3100" }),
  CORS_ALLOWED_HEADERS: Type.Optional(Type.Union([Type.String(), Type.Null()])),
  CORS_CACHE_CONTROL: Type.Optional(Type.Union([Type.String(), Type.Null()])),
  CORS_CREDENTIALS: Type.Optional(Type.Union([Type.Boolean(), Type.Null()])),
  CORS_EXPOSED_HEADERS: Type.Optional(Type.Union([Type.String(), Type.Null()])),
  CORS_HIDE_OPTIONS_ROUTE: Type.Optional(Type.Union([Type.Boolean(), Type.Null()])),
  CORS_MAX_AGE: Type.Optional(Type.Union([Type.Number(), Type.Null()])),
  CORS_METHODS: Type.Optional(Type.Union([Type.String(), Type.Null()])),
  CORS_OPTIONS_SUCCESS_STATUS: Type.Optional(Type.Union([Type.Number(), Type.Null()])),
  CORS_ORIGIN: Type.Optional(Type.Union([Type.Boolean(), Type.String(), Type.Null()])),
  CORS_PREFLIGHT: Type.Optional(Type.Union([Type.Boolean(), Type.Null()])),
  CORS_PREFLIGHT_CONTINUE: Type.Optional(Type.Union([Type.Boolean(), Type.Null()])),
  CORS_STRICT_PREFLIGHT: Type.Optional(Type.Union([Type.Boolean(), Type.Null()])),
  GOOGLE_APPLICATION_CREDENTIALS: Type.String(),
});

const options = { confKey: "config", dotenv: true, schema };

export default function env(): [FastifyPluginCallback, FastifyRegisterOptions<FastifyEnvOptions>] {
  return [fastifyEnv, options];
}
export interface EnvConfig {
  NAME: string;
  HOST: string;
  PORT: number;
  URL: string;
  CORS_ALLOWED_HEADERS?: string;
  CORS_CACHE_CONTROL?: string;
  CORS_CREDENTIALS?: boolean;
  CORS_EXPOSED_HEADERS?: string;
  CORS_HIDE_OPTIONS_ROUTE?: boolean;
  CORS_MAX_AGE?: number;
  CORS_METHODS?: string;
  CORS_OPTIONS_SUCCESS_STATUS?: number;
  CORS_ORIGIN?: boolean | string;
  CORS_PREFLIGHT?: boolean;
  CORS_PREFLIGHT_CONTINUE?: boolean;
  CORS_STRICT_PREFLIGHT?: boolean;
  GOOGLE_APPLICATION_CREDENTIALS: string;
}
