import styled from 'styled-components'
import { ChatMessage } from '../ChatMessage/ChatMessage'
import { DateBadge } from '../DateBadge/DateBadge'

const data = [
  {
    id: 1,
    userId: '1',
    text: 'Mensaje de prueba para adasd checkear los espaciados.Mensaje de prueba para checkear los espaciados.',
    date: new Date()
  },
  {
    id: 2,
    userId: '2',
    text: 'Mensaje de prueba para checkear los espaciados, textos comas etc. Lo que venga para hacer la caja mas realista ! ?$ 1243 2244 44 -- @.',
    date: new Date()
  },
  {
    id: 3,
    userId: '1',
    text: 'Mensaje de prueba para adasd checkear los espaciados.Mensaje de prueba para checkear los espaciados.',
    date: new Date()
  },
  {
    id: 4,
    userId: '2',
    text: 'Mensaje de prueba para checkear los espaciados, textos comas etc. Lo que venga para hacer la caja mas realista ! ?$ 1243 2244 44 -- @.',
    date: new Date()
  },
  {
    id: 5,
    userId: '2',
    text: 'Mensaje de prueba para checkear los espaciados, textos comas etc. Lo que venga para hacer la caja mas realista ! ?$ 1243 2244 44 -- @.',
    image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
    date: new Date()
  }
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  min-height: 100%;
  margin-top:80px;
  gap: 0.5rem;
`

const ChatsContainer = (): JSX.Element => {
  return (
    <Container>
      <DateBadge />
      {data.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </Container>
  )
}
export { ChatsContainer }
