import { Chat } from '@/pages/chatbox/pages/home/components'
import styled from 'styled-components'

const ListOfChat = styled('section')`
  display: flex;
  flex-direction: column;
  gap: clamp(.5rem, .5vw, 1rem);
  padding: clamp(.5rem, .5vw, 1rem) clamp(1rem, 1vw, 2rem);
  overflow: auto;

  ::-webkit-scrollbar{
    width: 0;
  }
`

const Chats = (): JSX.Element => {
  return (
    <ListOfChat>
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </ListOfChat>
  )
}

export { Chats }
