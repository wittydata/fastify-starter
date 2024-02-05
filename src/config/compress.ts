import { fastifyCompress, FastifyCompressOptions } from "@fastify/compress";
import { FastifyPluginCallback, FastifyRegisterOptions } from "fastify";

export default function compress(): [FastifyPluginCallback, FastifyRegisterOptions<FastifyCompressOptions>] {
  const options = {};
  return [fastifyCompress, options];
}
