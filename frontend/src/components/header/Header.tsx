import { Logo, Navbar } from '@/components'
import { Button } from '@/styled-components/components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyled = styled('header')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #C9DBDB;
  padding: clamp(1rem, 1vw, 2rem) 5.75rem;
`

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <Logo row='true' size={1} />
      <Navbar />
      <Button to='/welcome' as={Link}>ABRIR CHATBOX</Button>
    </HeaderStyled>
  )
}

export { Header }
