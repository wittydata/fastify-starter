import * as admin from "firebase-admin";
import { Message } from "firebase-admin/messaging";
import path from "node:path";

import { EnvConfig } from "../config/env";

async function init(config: EnvConfig): Promise<void> {
  const serviceAccount = await import(path.resolve(config.GOOGLE_APPLICATION_CREDENTIALS));
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}

function send(message: Message, dryRun?: boolean): Promise<string> {
  return admin.messaging().send(message, dryRun);
}

const fcm = Object.freeze({ init, send });
export default fcm;
