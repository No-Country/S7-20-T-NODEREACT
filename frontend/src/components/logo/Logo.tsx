import { IconLogoBox, IconLogoChat } from '@/components'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

interface LogoProps {
  row?: 'true'
  size?: 1 | 2
}

const LogoStyled = styled(Link)<LogoProps>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  
  svg {
    width: clamp(8.75rem, 8.75vw, 17.5rem);
  }
  
  ${({ row }) => row === 'true' && css`
    flex-direction:row;
  `}
  ${({ size }) => size === 1 && css`
    svg {
      width: clamp(4.5rem, 4.5vw, 8rem);
    }
  `}
`

interface Props extends LogoProps {
  to?: string
}

const Logo = ({ row, size, to = '/' }: Props): JSX.Element => {
  return (
    <LogoStyled row={row} size={size} to={to}>
      <IconLogoChat />
      <IconLogoBox />
    </LogoStyled>
  )
}

export { Logo }
