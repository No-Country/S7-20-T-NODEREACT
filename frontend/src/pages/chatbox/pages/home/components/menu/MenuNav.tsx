import { IconScheduleSend, IconHelp } from '@/components'
import { IconAccountCircle, IconAddPerson, IconBell, IconBookmark, IconEditComment, IconGroupAdd, IconSetting } from '@/pages/chatbox/pages/home/components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuNavStyled = styled('nav')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(2.5rem, 2.5vw, 5rem);
  padding: clamp(5rem, 5vw, 10rem) 0;
`
const MenuNavUl = styled('ul')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(0.75rem, 0.75vw, 1.5rem);
`
const MenuNavLi = styled('li')`
  color: #281828;
  font-size: clamp(0.875rem, 0.875vw, 1.75rem);
  font-weight: 700;
  transition: color 300ms;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: clamp(1rem, 1vw, 2rem);
  
  svg {
    fill: #281828;
    width: clamp(1.75rem, 1.75vw, 3.5rem);
    height: clamp(1.75rem, 1.75vw, 3.5rem);
    padding: clamp(0.125rem, 0.125vw, 0.25rem);
    border-radius: clamp(0.25rem, 0.25vw, 0.5rem);
    background-color: #D9D9D9;
    transition: background-color 300ms;
    outline: clamp(0.125rem, 0.125vw, 0.25rem) solid #281828;
  }
  
  :hover{
    color: #6D6BC5;
    
    svg {
      background-color: #8A89D1;
    }
  }
`

const MenuNav = (): JSX.Element => {
  return (
    <MenuNavStyled>
      <MenuNavUl>
        <MenuNavLi>
          <IconAccountCircle />
          <Link to='contacts'>Contactos</Link>
        </MenuNavLi>
        <MenuNavLi>
          <IconGroupAdd />
          <Link to='new-group'>Nuevo grupo</Link>
        </MenuNavLi>
      </MenuNavUl>
      <MenuNavUl>
        <MenuNavLi>
          <IconBookmark />
          <Link to='save-messages'>Mensajes guardados</Link>
        </MenuNavLi>
        <MenuNavLi>
          <IconScheduleSend />
          <Link to='programmed-messages'>Mensajes programados</Link>
        </MenuNavLi>
        <MenuNavLi>
          <IconEditComment />
          <Link to='draft'>Borradores</Link>
        </MenuNavLi>
      </MenuNavUl>
      <MenuNavUl>
        <MenuNavLi>
          <IconAddPerson />
          <Link to='invite-friends'>Invitar amigos</Link>
        </MenuNavLi>
        <MenuNavLi>
          <IconHelp />
          <Link to='help'>Ayuda</Link>
        </MenuNavLi>
      </MenuNavUl>
      <MenuNavUl>
        <MenuNavLi>
          <IconBell />
          <Link to='notifications'>Notificaciones</Link>
        </MenuNavLi>
        <MenuNavLi>
          <IconSetting />
          <Link to='settings'>Ajustes</Link>
        </MenuNavLi>
      </MenuNavUl>
    </MenuNavStyled>
  )
}

export { MenuNav }
