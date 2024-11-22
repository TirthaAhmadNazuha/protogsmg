import { Group } from "./group"

export interface MessageHandler {
  (message: IncomingMessage): void | Promise<void>
}

export interface OutcomingMessage {
  tags?: string[]
  schemeId: number
  message: any
}

export interface Message extends OutcomingMessage {
  messageId: string
  messageOffset: number
  from: string
  rawMessage: Buffer
  group: Group
}

export interface IncomingMessage extends Message {
  reply(message: OutcomingMessage): Promise<boolean>
}
