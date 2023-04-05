import { ChatboxChatPage, ChatboxHomePage } from '@/pages/chatbox/pages'
import styled from 'styled-components'

const ChatboxPageStyled = styled('main')`
 @media screen and (min-width: 49.75rem) {
    display: grid;
    grid-template:
    "home chat" auto
    / auto 1fr;
 }
`

const ChatboxPage = (): JSX.Element => {
  return (
    <ChatboxPageStyled>
      <ChatboxHomePage />
      {/* <ChatboxChatPage /> */}
    </ChatboxPageStyled>
  )
}

export { ChatboxPage }
