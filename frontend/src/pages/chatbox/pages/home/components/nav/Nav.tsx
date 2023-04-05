import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavStyled = styled('nav')`
  display: flex;
  flex-flow: row nowrap;
  gap: clamp(2.5rem, 2.5vw, 5rem);
  padding: clamp(1rem, 1vw, 2rem);
  background-color: #EEF4F4;
`
const NavLinkStyled = styled(NavLink)`
  flex: 1;
  color: #9C959C;
  text-align: center;
  font-size: clamp(1rem, 1vw, 2rem);
  font-weight: 700;
  position: relative;

  &.active{
    color: #281828;

    span {
      width: 100%;
    }
  }
`
const NavBorder = styled('span')`
  width: 0;
  height: clamp(0.25rem, 0.25vw, 0.5rem);
  position: absolute;
  left: 0;
  bottom: -85%;
  background-color: #6D6BC5;
  transition: width 300ms;
`

const Nav = (): JSX.Element => {
  return (
    <NavStyled>
      <NavLinkStyled to='/' end>Chats <NavBorder /></NavLinkStyled>
      <NavLinkStyled to='grupos'>Grupos <NavBorder /></NavLinkStyled>
      <NavLinkStyled to='canales'>Canales  <NavBorder /></NavLinkStyled>
    </NavStyled>
  )
}

export { Nav }
