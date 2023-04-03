import { Chat, Nav, WidgetNewMessage } from '@/pages/home/components'
import styled from 'styled-components'

const ListOfChat = styled('section')`
  display: flex;
  flex-direction: column;
  gap: clamp(.5rem, .5vw, 1rem);
  padding: clamp(.5rem, .5vw, 1rem) clamp(1rem, 1vw, 2rem);
`

const HomePage = (): JSX.Element => {
  return (
    <main>
      <Nav />
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
        <Chat />
        <Chat />
        <Chat />
        <WidgetNewMessage />
      </ListOfChat>
    </main>
  )
}

export { HomePage }
