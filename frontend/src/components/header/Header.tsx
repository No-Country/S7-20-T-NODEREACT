import { IconMenu, Logo, NavMenu, Navbar } from '@/components'
import { useOverlay } from '@/hooks'
import { Button, Overlay } from '@/styled-components/components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyled = styled('header')`
  position: sticky;
  top: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #c9dbdb;
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 5.75vw, 11.5rem);
  outline: 0.125rem solid #281828;
  z-index: 1;

  .header-btn {
    @media screen and (max-width: 64rem) {
      display: none;
    }
  }
`
const WrapperIconMenu = styled('button')`
  @media screen and (min-width: 64rem) {
    display: none;
  }
`

const Header = (): JSX.Element => {
  const { state, showOverlay, closeOverlay, closeOverlayWithElement } = useOverlay()

  return (
    <HeaderStyled>
      <Logo row='true' size={1} />
      <Navbar />
      <Overlay isActive={state} onClick={closeOverlay}>
        <NavMenu show={state} close={closeOverlayWithElement} />
      </Overlay>
      <Button className='header-btn' to='/chatbox' as={Link}>
        ABRIR CHATBOX
      </Button>
      <WrapperIconMenu onClick={showOverlay}>
        <IconMenu />
      </WrapperIconMenu>
    </HeaderStyled>
  )
}

export { Header }
