import { ChatsContainer, Footer, Header } from '@/pages/chatbox/pages/chat/components'
import styled from 'styled-components'

const Container = styled.div`
  height: 100dvh;
`

const ChatboxChatPage = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <ChatsContainer />
      <Footer />
    </Container>
  )
}

export { ChatboxChatPage }
