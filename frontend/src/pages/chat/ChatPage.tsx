import styled from 'styled-components'
import { ChatsContainer, Footer, Header } from '@/pages/chat/components'

const Container = styled.main`
  height: 100dvh;
`

const ChatPage = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <ChatsContainer />
      <Footer />
    </Container>
  )
}

export { ChatPage }
