import styled from 'styled-components'
import { ChatsContainer } from './components/ChatsContainer/ChatsContainer'
import { Header } from './components/Header/Header'

const Container = styled.main`
  height: 100dvh;
  background-color: white;
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
