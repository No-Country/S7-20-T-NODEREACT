import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavStyled = styled('nav')`
@media screen and (max-width: 64rem) {
   display: none;
}
`
const NavList = styled('ul')`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;  
  gap: clamp(3.25rem, 3.25vw, 6.5rem);
`
const NavItem = styled('li')`
  color: #281828;
  font-size: clamp(1rem, 1vw, 2rem);
  font-weight: 700;
`

const Navbar = (): JSX.Element => {
  return (
    <NavStyled>
      <NavList>
        <NavItem><Link to='features'>Carácteristicas</Link></NavItem>
        <NavItem><Link to='faqs'>Preguntas frecuentes</Link></NavItem>
        <NavItem><Link to='privacy'>Privacidad</Link></NavItem>
      </NavList>
    </NavStyled>
  )
}

export { Navbar }
