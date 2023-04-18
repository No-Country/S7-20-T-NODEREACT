import { UserContext } from '@/context'
import { ChatsContainer, Footer, Header } from '@/pages/chatbox/pages/chat/components'
import { useContext } from 'react'
import styled from 'styled-components'
import backgroundImage from '@/assets/img/background-pattern.webp'

const Container = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  right: ${props => props.show ? '0' : '-100%'};
  transition: right 400ms;
  height: 100dvh;
  overflow-y: auto;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: 49.75rem) {
    position: sticky;
    display: block;
  }
`

const WrapperChat = styled.div<{ show: boolean }>`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: visibility 400ms;

  @media screen and (min-width: 49.75rem) {
    transition: none;
  }
`

const ChatboxChatPage = (): JSX.Element => {
  const { selectedChatId } = useContext(UserContext)

  const hasSelectedChatId = selectedChatId !== null

  return (
    <Container show={hasSelectedChatId}>
      <WrapperChat show={hasSelectedChatId}>
        <Header />
        <ChatsContainer />
        <Footer />
      </WrapperChat>
    </Container>
  )
}

export { ChatboxChatPage }
