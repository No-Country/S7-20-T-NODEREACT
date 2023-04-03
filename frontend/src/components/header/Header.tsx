import { IconMagnifyingGlass, IconMenu } from '@/components'
import styled from 'styled-components'

const HeaderStyled = styled('header')`
  color: var(--text-two);
  background-color: var(--background-two);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: clamp(1rem, 1vw, 2rem);

  svg {
    fill: var(--i-component-one);
    width: clamp(1.25rem, 1.25vw, 2.5rem);
  }
`
const WrapperIconMenu = styled('button')`
  
`
const Heading = styled('h1')`
  font-size: clamp(1rem, 1vw, 2rem);
  font-weight: 500;
`
const WrapperIconMagnifyingGlass = styled('button')`
  
`

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <WrapperIconMenu title='Icono del menu de navegacion'><IconMenu /></WrapperIconMenu>
      <Heading>CHATBOX</Heading>
      <WrapperIconMagnifyingGlass title='Icono de busqueda'><IconMagnifyingGlass /></WrapperIconMagnifyingGlass>
    </HeaderStyled>
  )
}

export { Header }
