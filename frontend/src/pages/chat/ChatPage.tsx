import styled from 'styled-components'
import { ChatsContainer } from './components/ChatsContainer/ChatsContainer'

const Container = styled.main`
  height: 100dvh;
  background-color: white;
`

const ChatPage = (): JSX.Element => {
  return (
    <Container>
      <ChatsContainer />
    </Container>
  )
}

export { ChatPage }
