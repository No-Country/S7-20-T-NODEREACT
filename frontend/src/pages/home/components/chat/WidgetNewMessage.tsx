import { IconAddComment } from '@/pages/home/components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const WidgetNewMessageStyled = styled(Link)`
  position: fixed;
  bottom: 5%;
  right: 5%;
  
  svg {
    width: clamp(2.5rem, 2.5vw, 4rem);
    height: clamp(2.5rem, 2.5vw, 4rem);
    padding: clamp(0.25rem, 0.25vw, 0.5rem);
  }
`

const WidgetNewMessage = (): JSX.Element => {
  return (
    <WidgetNewMessageStyled to='new-message'>
      <IconAddComment />
    </WidgetNewMessageStyled>
  )
}

export { WidgetNewMessage }
