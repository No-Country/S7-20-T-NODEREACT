import { UserContext } from '@/context'
import { ChatMessage, DateBadge } from '@/pages/chatbox/pages/chat/components'
import { chatsData } from '@/utils/ChatsData'
import { useContext } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem clamp(0.3rem, 1vw, 2rem) 2rem clamp(0.3rem, 1vw, 2rem);
  min-height: 100%;
  gap: 0.5rem;
  margin: auto;
  position: relative;

  @media screen and (min-width: 49.75rem) {
    max-width: 41rem;
    padding: 2.5rem 1rem 4rem 1rem;
  }
`

const ChatsContainer = (): JSX.Element => {
  const user = useContext(UserContext)
  const selectedChatId = user.selectedChatId

  const selectedChat = chatsData.find((chat) => chat.id === selectedChatId)

  const messages = selectedChat?.messages?.map((message) => (
    <ChatMessage key={message.id} message={message} />
  ))

  return (
    <Container>
      <DateBadge />
      {messages}
    </Container>
  )
}
export { ChatsContainer }
