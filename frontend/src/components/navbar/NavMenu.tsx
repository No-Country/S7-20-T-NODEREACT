import { IconAwesome, IconHelp, IconPrivacy } from '@/components'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const NavStyled = styled('nav')<{ show: boolean }>`
  transition: top 500ms;
  width: 100%;
  position: fixed;
  top: -25%;
  left: 0;
  background-color: #C9DBDB;
  padding: clamp(1.5rem, 1.5vw, 3rem) clamp(1rem, 1vw, 2rem);

  ${({ show }) => show && css`
    top: 0;
  `}

 @media screen and (min-width: 64rem) {
    display: none;
 }
`
const NavList = styled('ul')`
  display: flex;
  flex-flow: row nowrap;
  gap: clamp(.5rem, .5vw, 1rem);
`
const NavItem = styled('li')`
  flex: 1;
  color: #281828;
  font-size: clamp(0.75rem, 0.75vw, 1.5rem);
  font-weight: 700;
  line-height: 150%;
  text-align: center;
  overflow-wrap: anywhere;
`
const NavLink = styled(Link)`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: clamp(0.5rem, 0.5vw, 1rem);
  padding: clamp(0.5rem, 0.5vw, 1rem);
  border-radius: clamp(0.25rem, 0.25vw, 0.5rem);
  background-color: #DBE7E7;
  transition: color 300ms, outline 100ms;

  svg {
    fill: #281828;
    width: clamp(1.75rem, 1.75vw, 3.5rem);
    height: clamp(1.75rem, 1.75vw, 3.5rem);
    padding: clamp(0.125rem, 0.125vw, 0.25rem);
    border-radius: clamp(0.25rem, 0.25vw, 0.5rem);
    background-color: #FAFBFB;
    outline: clamp(0.125rem, 0.125vw, 0.25rem) solid #281828;
    transition: fill 300ms, outline 300ms;
  }

  :hover {
    color: #6D6BC5;
    outline: clamp(0.125rem, 0.125vw, 0.25rem) solid #6D6BC5;

    svg {
      fill: #6D6BC5;
      outline: clamp(0.125rem, 0.125vw, 0.25rem) solid #6D6BC5;
    }
  }
`

interface Props {
  show: boolean
  close: () => void
}

const NavMenu = ({ show, close }: Props): JSX.Element => {
  return (
    <NavStyled show={show}>
      <NavList>
        <NavItem>
          <NavLink onClick={close} to='/features'>
            <IconAwesome />
            Carácteristicas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={close} to='/faqs'>
            <IconHelp />
            Preguntas frecuentes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={close} to='/privacy'>
            <IconPrivacy />
            Privacidad
          </NavLink>
        </NavItem>
      </NavList>
    </NavStyled>
  )
}

export { NavMenu }
