import { Chats, Header, Nav, WidgetNewMessage } from '@/pages/chatbox/pages/home/components'
import styled from 'styled-components'

const ChatboxHomePageStyled = styled('div')`
  display: grid;
  grid-template:
  "header" auto
  "tabs" auto
  "chats" 1fr
  / 1fr;
  max-height: 100vh;
  position: relative;
`

const ChatboxHomePage = (): JSX.Element => {
  return (
    <ChatboxHomePageStyled>
      <Header />
      <Nav />
      <Chats />
      <WidgetNewMessage />
    </ChatboxHomePageStyled>
  )
}

export { ChatboxHomePage }