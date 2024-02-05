import { TokenMessage } from "firebase-admin/messaging";

import { Reply } from ".";

export type ReplyStatus = "error" | "success";

export type FCMMessage = TokenMessage;

export interface FCMSendReply extends Reply {
  message: string;
}
