import { IconAddComment } from '@/pages/home/components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const WidgetNewMessageStyled = styled(Link)`
  border-radius: 100%;
  border: clamp(0.125rem, 0.125vw, 0.25rem) solid #281828 ;
  box-shadow: clamp(0.25rem, 0.25vw, 0.5rem) clamp(0.25rem, 0.25vw, 0.5rem) 0 #6D6BC5;
  background-color: #FAFBFB;
  padding: clamp(0.5rem, 0.5vw, 1rem);
  margin: 0 auto;
  transition: 300ms;
  position: fixed;
  bottom: 5%;
  right: 5%;

  svg {
    fill: #281828;
    width: clamp(2.5rem, 2.5vw, 4rem);
    height: clamp(2.5rem, 2.5vw, 4rem);
  }

  :hover {
    border: clamp(0.125rem, 0.125vw, 0.25rem) solid #6D6BC5;
    background-color: #FAFBFB;

    svg {
      fill: #6D6BC5;
    }
  }
  :active{
    border: clamp(0.125rem, 0.125vw, 0.25rem) solid #6D6BC5;
    box-shadow: none;
    background-color: #281828;

    svg {
      fill: #FAFBFB;
    }
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
