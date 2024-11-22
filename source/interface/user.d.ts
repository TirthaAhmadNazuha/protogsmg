import { Group, GroupListenType } from "./group"
import { IncomingMessage, Message } from "./message"

export interface GroupsUserManager {
  getAllUsedGroups(): Group[]
  getAllGroupsInSevers(): Group[]
  setListenerAllGroups(setTo: GroupListenType): void
  leaveGroup(groupname: string): Promise<void>
  leaveAllGroup(): Promise<void>
}

export interface MessagesUserManager {
  getAllMessageFromMe(): Promise<Message[]>
  getAllTagToMeMessage(): Promise<Message[]>
  getAllTaggedMessage(...username: string[]): Promise<Message[]>
  getAllUnrepliedMessageToMe(): Promise<IncomingMessage>
}

export declare class User {
  constructor(ConfUser: { username: string, servers: string[] })
  joinGroup(groupname: string): Promise<Group>
  groups: GroupsUserManager
  messages: GroupsUserManager
  offline(): Promise<void>
  online(): Promise<void>
}
