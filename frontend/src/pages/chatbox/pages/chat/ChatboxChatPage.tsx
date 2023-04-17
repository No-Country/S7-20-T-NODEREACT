import { UserContext } from '@/context'
import { ChatsContainer, Footer, Header } from '@/pages/chatbox/pages/chat/components'
import { useContext } from 'react'
import styled from 'styled-components'

const Container = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  right: ${props => props.show ? '0' : '-100%'};
  transition: right 400ms;
  z-index: 1;
  height: 100dvh;
  overflow-y: auto;
  background-color: #281828;
  width: 100%;

  @media screen and (min-width: 49.75rem) {
    position: unset;
    display: block;
  }
`

const ChatboxChatPage = (): JSX.Element => {
  const { selectedChatId } = useContext(UserContext)

  const hasSelectedChatId = selectedChatId !== null

  return (
    <Container show={hasSelectedChatId}>
      {hasSelectedChatId &&
        <>
          <Header />
          <ChatsContainer />
          <Footer />
        </>}
    </Container>
  )
}

export { ChatboxChatPage }
