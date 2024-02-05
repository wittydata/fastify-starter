export * from "./fcm";

export type ReplyStatus = "error" | "success";

export interface Reply {
  status: ReplyStatus;
}

export interface ReplyWithError extends Reply {
  error: unknown;
}
