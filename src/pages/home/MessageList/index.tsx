import React, { useCallback, useEffect, useRef } from 'react';

import { useSocket } from '@contexts/socket';
import { Chat, Message as MessageInterface } from '@mytypes/message';

import { convertInnerHtmlToText } from '@utils/html';

import UserIcon from '../assets/user.svg';
import { MessagesContainer, MessageContainer, MessageInfo, MessageUsername, MessageText } from './styles';

interface OwnProps {
  chat?: Chat;
}

type Props = OwnProps;

interface MessageProps {
  message: MessageInterface;
  username: string;
}

const Message: React.FC<MessageProps> = ({ message, username }) => {
  const messageRef = useRef<HTMLLIElement>();

  const handleCopy = useCallback((event: React.ClipboardEvent) => {
    event.preventDefault();

    const text = convertInnerHtmlToText(messageRef.current.innerHTML);

    event.clipboardData.setData('text/plain', text);
  }, []);

  return (
    <MessageContainer>
      <UserIcon />
      <MessageInfo>
        <MessageUsername>{username}</MessageUsername>

        <MessageText ref={messageRef} onCopy={handleCopy}>
          {message.text}
        </MessageText>
      </MessageInfo>
    </MessageContainer>
  );
};

const MessageList: React.FC<Props> = ({ chat }) => {
  const messageListRef = useRef<HTMLUListElement>(null);
  const socketConnection = useSocket();

  const getSenderUserMessage = useCallback(
    (message: MessageInterface) => {
      if (message.senderUserId === chat.conversation.user.id) {
        return chat.conversation.user;
      }

      if (message.senderUserId === chat.conversation.toUser.id) {
        return chat.conversation.toUser;
      }

      return undefined;
    },
    [chat?.conversation]
  );

  useEffect(() => {
    function handleChatMessageCreated() {
      messageListRef.current.scrollTo(0, messageListRef.current.scrollHeight);
    }

    socketConnection.on('create-chat-message-response', handleChatMessageCreated);

    return () => {
      socketConnection.off('create-chat-message-response', handleChatMessageCreated);
    };
  }, [socketConnection]);
  return (
    <MessagesContainer ref={messageListRef} visible={chat !== undefined}>
      {chat?.messages.map((message) => (
        <Message key={message._id} message={message} username={getSenderUserMessage(message).name} />
      ))}
    </MessagesContainer>
  );
};

export default MessageList;
