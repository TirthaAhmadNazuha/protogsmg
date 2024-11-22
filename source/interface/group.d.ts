import { OutcomingMessage, MessageHandler, IncomingMessage } from "./message"

export type GroupListenType = 'mute' | 'pause' | 'allow'

export declare class Group {
  setListening(setTo: GroupListenType): void
  whenImTagged(handler: MessageHandler): void
  messageHandler(handler: MessageHandler): void
  send(message: OutcomingMessage): Promise<boolean>
  send(message: OutcomingMessage, waitForReplyUsers: string[]): Promise<IncomingMessage>
}
