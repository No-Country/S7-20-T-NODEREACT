import { IconLogoBox, IconLogoChat } from '@/components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoStyled = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  
  svg {
    width: 8.75rem;
  }
`

const Logo = (): JSX.Element => {
  return (
    <LogoStyled to='/'>
      <IconLogoChat />
      <IconLogoBox />
    </LogoStyled>
  )
}

export { Logo }
