import { IconAddReaction, IconAttachFileAdd } from '@/pages/chatbox/pages/chat/components'
import { useState } from 'react'
import styled from 'styled-components'
import { FooterAttachOptions } from './FooterAttachOptions'

const StyledFooter = styled.footer`
  position: sticky;
  bottom:0;
  width: 100%;
  z-index: -1;

  @media screen and (min-width: 49.75rem) {
    padding: 0 1rem;
    padding-bottom:1.625rem;
    background: inherit;
  }
`

const WrapperFooterItems = styled.div<{ show: boolean }>`
  width: 100%;
  margin: auto;
  height: ${props => props.show ? '204px' : '74px'};
  transition: height 0.4s;
  overflow: hidden;
  border-top: 2px solid #6361B3;
  display: flex;
  flex-direction: column;
  border-bottom: clamp(0.125rem, 0.125vw, 0.25rem) solid #281828;
  background-color: #1C111C;

  @media screen and (min-width: 49.75rem) {
    max-width: 40rem;
    border-radius: 0.5rem;
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

const WrapperMainOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

const IconActionWrapper = styled.div`
  cursor: pointer;
`

const Footer = (): JSX.Element => {
  const [showAttachOptions, setShowAttachOptions] = useState(false)

  const handleAttachClick = (): void => {
    setShowAttachOptions(!showAttachOptions)
  }

  return (
    <StyledFooter>
      <WrapperFooterItems show={showAttachOptions}>
        <WrapperMainOptions>
          <IconAddReaction />
          <StyledInput type='text' placeholder='Enviar mensaje a Dan' />
          <IconActionWrapper onClick={handleAttachClick}>
            <IconAttachFileAdd />
          </IconActionWrapper>
        </WrapperMainOptions>
        <FooterAttachOptions show={showAttachOptions} />
      </WrapperFooterItems>
    </StyledFooter>
  )
}
export { Footer }
