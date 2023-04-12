import { IconPerson, IconPhotoAlternate, IconScheduleSend } from '@/pages/chatbox/pages/chat/components'
import { useState } from 'react'
import styled from 'styled-components'
import { FooterScheduleOptions } from './FooterScheduleOptions'

const WrapperAttachOptions = styled.div<{ show: boolean }>`
  opacity: ${props => props.show ? '1' : '0'};
  transition: opacity 0.4s ease-in-out 0s;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  height: 100%;
  width: 100%;

  svg {
    width: clamp(2rem, 1vw, 4rem);
    height: clamp(2rem, 1vw, 4rem);
    fill: #FAFBFB;
  }
`

const WrapperIcon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #281828;
  width: 5.5rem;
  height: 5.125rem;
  border: 0.125rem solid #6F646F;
  border-radius: 0.25rem;
  gap: 0.5rem;

  p {
    font-size: 0.75rem;
    line-height: 150%;
    color: #FFFFFF;
    }
`

const WrapperFooterItems = styled.div<{ show: boolean }>`
  width: 100%;
  height: ${props => props.show ? '282px' : '130px'};
  transition:  height 0.4s;
  overflow: hidden;
`

interface Props {
  show: boolean
}

const FooterAttachOptions = ({ show }: Props): JSX.Element => {
  const [showScheduleOptions, setShowScheduleOptions] = useState(false)

  const handleAttachClick = (): void => {
    setShowScheduleOptions(!showScheduleOptions)
  }

  return (
    <WrapperFooterItems show={showScheduleOptions}>
      <WrapperAttachOptions show={show}>
        <WrapperIcon>
          <IconPerson />
          <p>Contacto</p>
        </WrapperIcon>
        <WrapperIcon>
          <IconPhotoAlternate />
          <p>Imágenes</p>
        </WrapperIcon>
        <WrapperIcon onClick={handleAttachClick}>
          <IconScheduleSend />
          <p>Programar</p>
        </WrapperIcon>
      </WrapperAttachOptions>
      <FooterScheduleOptions show={showScheduleOptions} onClick={handleAttachClick} />
    </WrapperFooterItems>
  )
}
export { FooterAttachOptions }
