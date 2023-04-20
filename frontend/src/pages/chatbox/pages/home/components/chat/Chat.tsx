import { UserContext } from '@/context'
import { ChatList } from '@/models/chatList.model'
import { ProfileImage } from '@/pages/chatbox/pages/home/components'
import { useContext } from 'react'
import styled from 'styled-components'

const ChatStyled = styled('article')`
  display: grid;
  grid-template: 
  "image header" auto
  "image footer" auto
  / auto 1fr;
  gap: 0 clamp(0.5rem, 0.5vw, 1rem);
  font-size: clamp(0.75rem, 0.75vw, 1.5rem);
  font-weight: 500;
  cursor: pointer;
`
const ChatHeader = styled('header')`
  grid-area: header;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`
const ChatHeaderName = styled('h2')`
  color: #281828;
  font-size: clamp(1rem, 1vw, 2rem);
  font-weight: 700;
`
const ChatHeaderDate = styled('h3')`
  color: #6D6BC5;
`
const ChatFooter = styled('footer')`
  grid-area: footer;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: clamp(1rem, 1vw, 2rem);
  overflow: hidden;
`
const ChatFooterMessage = styled('p')`
  color: #8A89D1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const ChatFooterBadge = styled('span')`
  color: #FFFFFF;
  background-color: #6D6BC5;
  border-radius: 100%;
  padding: clamp(0.125rem, 0.125vw, 0.25rem) clamp(0.375rem, 0.375vw, 0.75rem);
`

interface Props {
  chatData: ChatList
}

const Chat = ({ chatData }: Props): JSX.Element => {
  const { handleSelectedChatId } = useContext(UserContext)

  const {
    id,
    userName, image,
    lastMessageDate,
    lastMessage,
    unread
  } = chatData

  return (
    <ChatStyled onClick={() => handleSelectedChatId(id)}>
      <ProfileImage imgUrl={image} />
      <ChatHeader>
        <ChatHeaderName>{userName}</ChatHeaderName>
        <ChatHeaderDate>{lastMessageDate}</ChatHeaderDate>
      </ChatHeader>
      <ChatFooter>
        <ChatFooterMessage>{lastMessage}</ChatFooterMessage>
        {unread >= 1 && <ChatFooterBadge>{unread}</ChatFooterBadge>}
      </ChatFooter>
    </ChatStyled>
  )
}

export { Chat }
