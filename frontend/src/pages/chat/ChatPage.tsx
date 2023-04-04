import styled from 'styled-components'
import { ChatsContainer, Header } from '@/pages/chat/components'

const Container = styled.main`
  height: 100dvh;
  background-color: #281828;
`

const ChatPage = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <ChatsContainer />
    </Container>
  )
}

export { ChatPage }
