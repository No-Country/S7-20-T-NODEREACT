import styled, { css } from 'styled-components'

const Overlay = styled('div')<{ isActive: boolean }>`
  width: 0;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000ac;
  z-index: 1;

  ${({ isActive }) => isActive && css`
    width: 100%;
  `}
`

export { Overlay }
