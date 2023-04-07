import styled from 'styled-components'
import { IconMoreVert, IconScheduleSend, IconDelete, IconArrowRight, IconVolumeOff, IconMap } from '@/pages/chatbox/pages/chat/components'
import { IconSearch } from '@/pages/chatbox/pages/home/components'
import { useOverlay } from '@/hooks'
import { Overlay } from '@/styled-components/components'

const OptionsContainer = styled.div<{ show: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 12px 8px;
  gap: 8px;
  position: fixed;
  top: 4.7rem;
  right: ${props => props.show ? '2rem' : '-100%'};
  transition: right 400ms;
  width: 250px;
  height: clamp(13.75rem, 25vw, 23.5rem);
  background: #1C111C;
  border: 2px solid #6D6BC5;
  box-shadow: 4px 4px 0px #6D6BC5;
  border-radius: 4px;
`

const WrapperIcon = styled.div`
  cursor: pointer;
`

const WrapperItem = styled.div`
  display: flex;
  align-items: center;
  gap:1rem;
  cursor: pointer;

  p {
  font-weight: 700;
  font-size: clamp(12px, 2vw, 14px);
  line-height: 150%;
  color: #FFFFFF;
  }
    
svg {
  fill: #281828;
  width: clamp(1.75rem, 2vw, 3.5rem);
  height: clamp(1.75rem, 2vw, 3.5rem);
  padding: clamp(0.125rem, 0.125vw, 0.25rem);
  border-radius: clamp(0.25rem, 0.25vw, 0.5rem);
  background-color: #D9D9D9;
  transition: background-color 300ms;
  outline: clamp(0.125rem, 0.125vw, 0.25rem) solid #281828;
  box-shadow: none;
  
  }

:hover {
  svg {
    background-color: #8A89D1;
    fill: unset;
    outline: unset;
  }
  p {
    transition: color 300ms;

    color: #8A89D1;
  }
}`

const Divider = styled.div`
  width: 100%;
  height: 0px;
  border-top: 1px dashed #6D6BC5;
  transform: rotate(-180deg);
`

const WrapperFirstItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const HeaderOptions = (): JSX.Element => {
  const { state, closeOverlay, showOverlay } = useOverlay()

  return (
    <>
      <WrapperIcon onClick={showOverlay}>
        <IconMoreVert />
      </WrapperIcon>
      <Overlay onClick={closeOverlay} isActive={state}>
        <OptionsContainer show={state}>
          <WrapperFirstItem>
            <WrapperItem> <IconVolumeOff /> <p>Silenciar</p>  </WrapperItem>
            <WrapperItem> <IconArrowRight /></WrapperItem>
          </WrapperFirstItem>
          <Divider />
          <WrapperItem> <IconScheduleSend /> <p>Programar mensaje</p></WrapperItem>
          <WrapperItem> <IconSearch /> <p>Buscar</p></WrapperItem>
          <WrapperItem> <IconMap /> <p>Vaciar chat</p></WrapperItem>
          <Divider />
          <WrapperItem> <IconDelete /> <p>Eliminar chat</p></WrapperItem>
        </OptionsContainer>
      </Overlay>
    </>
  )
}
export { HeaderOptions }
