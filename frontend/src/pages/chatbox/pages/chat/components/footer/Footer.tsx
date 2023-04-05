import { IconAddReaction, IconAttachFileAdd } from '@/pages/chatbox/pages/chat/components'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  position: fixed;
  bottom:0;
  width:100%;
  height:74px;
  border-top: 2px solid #6361B3;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: clamp(0.125rem, 0.125vw, 0.25rem) solid #281828;
  background-color: #1C111C;
  padding: clamp(1rem, 1vw, 2rem);
  
  svg {
    width: clamp(2rem, 2vw, 4rem) ;
    height: clamp(2rem, 2vw, 4rem) ;
    background: #281828;
    border-radius: 4px;
    fill: #9C959C;
    outline: clamp(0.125rem, 0.125vw, 0.25rem) solid #534653;
    padding: 0.1rem;
  }
`

const StyledInput = styled.input`
  font-weight: 700;
  font-size: clamp(12px, 2vw, 14px);
  line-height: 150%;
  padding: 12px 8px;
  width: calc(100% - 90px);
  height: 42px;
  background: #281828;
  border: 2px solid #534653;
  border-radius: 4px;
  color: #9C959C;

  ::placeholder {
  color: #534653;
}
`

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <IconAddReaction />
      <StyledInput type='text' placeholder='Enviar mensaje a Dan' />
      <IconAttachFileAdd />
    </StyledFooter>
  )
}
export { Footer }