import { RequestAuth, RequestAuthBody } from '@mytypes/requestAuth';
import { Response } from 'express';
import Conversation from '../schemas/Conversation';

interface Create {
  toUserId: number;
}

type IndexRequest = RequestAuth;
type CreateRequest = RequestAuthBody<Create>;

class ConversationController {
  async index(req: IndexRequest, res: Response) {
    const conversations = await Conversation.find();

    return res.json(conversations);
  }

  async create(req: CreateRequest, res: Response) {
    const { toUserId } = req.body;

    const conversation = await Conversation.create({
      toUserId,
    });

    return res.json(conversation);
  }
}

export default new ConversationController();
