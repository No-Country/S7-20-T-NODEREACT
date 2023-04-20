import { Message } from './message.model'

export interface ChatList {
  id: number
  userName: string
  image: string
  lastMessageDate: string
  lastMessage: string
  unread: number
  status: string
  messages?: Message[]
}
