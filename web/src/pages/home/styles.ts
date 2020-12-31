import styled from 'styled-components';

import { ScrollCSS } from '@styles/global';

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 350px;

  background-color: ${(props) => props.theme.colors.home.background};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 14px;

  background-color: ${(props) => props.theme.colors.home.header};

  border-bottom: 2px solid ${(props) => props.theme.colors.stroke};
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 330px;

  margin: 8px auto;
  padding: 14px 20px;

  border-radius: 8px;

  font-size: 1.6rem;
  font-weight: 400;

  border: 1px solid ${(props) => props.theme.colors.stroke};

  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.home.searchInput};

  &::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

export const Divider = styled.hr`
  width: 100%;
  max-width: 320px;

  height: 1px;
  margin: 0 auto;

  background-color: #333;
`;

export const Chats = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-top: 15px;
  padding-left: 13px;

  overflow-y: auto;
  ${ScrollCSS};
`;

export const Chat = styled.li`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-top: 12px;

  hr {
    margin: 0;
  }

  svg,
  img {
    width: 50px;
  }

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    hr {
      display: none;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  padding-bottom: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-left: 15px;
`;

export const Username = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const LastMessage = styled.p`
  margin-top: 5px;

  font-size: 1.4rem;
`;

// Right Side

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding-bottom: 27px;

  background-color: ${(props) => props.theme.colors.home.chat.background};
`;

export const MessageInput = styled.input`
  width: auto;

  margin: 0 20px;
  padding: 14px 20px;

  border-radius: 8px;

  font-size: 1.6rem;
  font-weight: 400;

  border: 1px solid ${(props) => props.theme.colors.stroke};

  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.home.chat.messageInput};

  &::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

export const MessagesContainer = styled.ul`
  display: flex;
  flex-direction: column-reverse;

  height: 100%;

  padding-bottom: 30px;

  overflow-y: auto;

  ${ScrollCSS};
`;

export const Message = styled.li`
  display: flex;

  width: 90%;

  margin: 25px 20px 0;

  &:last-child {
    margin-top: 0;
  }
`;

export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-left: 15px;
`;

export const MessageUsername = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const MessageText = styled.textarea.attrs({
  readOnly: true,
})`
  width: 100%;

  margin-top: 7px;
  padding: 4px 12px;

  border: 1px solid ${(props) => props.theme.colors.stroke};
  border-radius: 4px;

  font-size: 1.6rem;
  line-height: 2.2rem;

  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.home.chat.message};

  resize: none;
`;