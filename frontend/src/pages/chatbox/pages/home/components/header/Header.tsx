import { IconLogoBox, IconLogoChat } from '@/components'
import { useOverlay } from '@/hooks'
import { IconMenu, IconSearch, Menu } from '@/pages/chatbox/pages/home/components'
import { Overlay } from '@/styled-components/components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyled = styled('header')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: clamp(0.125rem, 0.125vw, 0.25rem) solid #281828;
  background-color: #c9dbdb;
  padding: clamp(1rem, 1vw, 2rem);

  svg {
    width: clamp(2rem, 2vw, 4rem);
    height: clamp(2rem, 2vw, 4rem);
  }

  @media screen and (min-width: 49.75rem) {
    height: clamp(4.625rem, 8vw, 5rem);
  }
`
const WrapperIconMenu = styled('button')``
const WrapperIconLogo = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  svg {
    width: clamp(3rem, 3vw, 6rem);
  }
`
const WrapperIconSearch = styled('button')``

const Header = (): JSX.Element => {
  const { state, closeOverlay, showOverlay } = useOverlay()

  return (
    <HeaderStyled>
      <Overlay onClick={closeOverlay} isActive={state}>
        <Menu show={state} />
      </Overlay>
      <WrapperIconMenu onClick={showOverlay} title='Icono del menu de navegacion'>
        <IconMenu />
      </WrapperIconMenu>
      <WrapperIconLogo to='/'>
        <IconLogoChat />
        <IconLogoBox />
      </WrapperIconLogo>
      <WrapperIconSearch title='Icono de busqueda'>
        <IconSearch />
      </WrapperIconSearch>
    </HeaderStyled>
  )
}

export { Header }
