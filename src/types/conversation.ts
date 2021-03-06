import { Message } from './message';
import { User } from './user';

export interface Conversation {
  _id: string;
  user: User;
  toUser: User;

  lastMessage?: Message;
}
