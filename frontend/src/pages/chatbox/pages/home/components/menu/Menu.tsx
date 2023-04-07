import { MenuNav, MenuUser } from '@/pages/chatbox/pages/home/components'
import styled, { css } from 'styled-components'

const MenuStyled = styled('aside')<{ show: boolean }>`
  height: 100%;
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 1;
  background-color: #C9DBDB;
  padding: clamp(1.25rem, 1.25vw, 2.5rem) clamp(1rem, 1vw, 2rem);
  transition: left 400ms;
  overflow: auto;

  ::-webkit-scrollbar{
    display: none;
  }

  ${({ show }) => show && css`
    left: 0;
  `}
`

interface Props {
  show: boolean
}

const Menu = ({ show }: Props): JSX.Element => {
  return (
    <MenuStyled show={show}>
      <MenuUser />
      <MenuNav />
    </MenuStyled>
  )
}

export { Menu }
