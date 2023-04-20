import { Chat } from '@/pages/chatbox/pages/home/components'
import { chatsData } from '@/utils/ChatsData'
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
      {chatsData.map(chat => (
        <Chat key={chat.id} chatData={chat} />
      ))}
    </ListOfChat>
  )
}

export { Chats }
