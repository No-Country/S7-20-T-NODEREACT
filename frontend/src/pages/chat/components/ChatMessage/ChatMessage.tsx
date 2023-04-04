import { Message } from '@/models/message.model'
import styled from 'styled-components'

const MessageContainer = styled.div<{ isSent: boolean }>`
  display:flex;
  flex-direction: ${props => props.isSent ? 'row-reverse' : 'row'};
`
const MessageTail = styled.div<{ isSent: boolean }>`
  width: 0;
  height: 0;
  border-right: ${props => props.isSent ? '0px solid transparent' : '15px solid #FFFFFF'};
  border-left: ${props => props.isSent ? '15px solid #2E2D53' : '0px solid transparent'};
  border-bottom: 15px solid transparent;
`
const MessageData = styled.div<{ isSent: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 300px;
  height: fit-content;
  padding: 8px 8px 6px;
  border-radius: ${props => props.isSent ? '4px 0px 4px 4px ' : '0px 4px 4px 4px'};
  background-color: ${props => props.isSent ? '#2E2D53' : '#FFFFFF'};
  margin-right: ${props => props.isSent ? 'unset' : 'auto'};
  margin-left: ${props => props.isSent ? 'auto' : 'unset'};
`
const Text = styled.p<{ isSent: boolean }>`
  color: ${props => props.isSent ? '#FFFFFF' : '#281828'};
  width: 284px;
  margin: 0;
  padding-top:8px;
  text-align: start;
  font-weight: 400;
  font-size: clamp(14px, 2vw, 16px);
  line-height: 120%;
  letter-spacing: 0.02em;
`
const Image = styled.img`
  border-radius: 4px !important;
`
const Date = styled.p`
  height: 14px;
  padding-right: 12px;
  margin: 0;
  color:#6D6BC5;
  font-weight: 400;
  font-size: 12px;
  font-size: clamp(12px, 2vw, 14px);
  line-height: 120%;
  text-align: right;
  letter-spacing: 0.02em;
  margin-left:auto;
`

interface Props {
  message: Message
}

const ChatMessage: React.FC<Props> = ({ message }): JSX.Element => {
  const { userId, text, image, date } = message
  const formatedDate = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const isSent = userId === '1'

  return (
    <MessageContainer isSent={isSent}>
      <MessageTail isSent={isSent} />
      <MessageData isSent={isSent}>
        {image !== undefined && <Image src={image} alt='' />}
        <Text isSent={isSent}>{text}</Text>
        <Date>{formatedDate}</Date>
      </MessageData>
    </MessageContainer>
  )
}
export { ChatMessage }
