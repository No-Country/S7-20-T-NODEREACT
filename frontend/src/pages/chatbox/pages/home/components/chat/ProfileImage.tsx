import styled, { css } from 'styled-components'

const ChatPicture = styled('picture')`
  grid-area: image;
  width: clamp(4.75rem, 4.75vw, 9.5rem);
  aspect-ratio: 1;
  background-color: #281828;
  border-radius: clamp(0.25rem, 0.25vw, 0.5rem);
  padding: clamp(0.125rem, 0.125vw, 0.25rem);
  position: relative;
`
const ChatPictureStatus = styled('span') <{ status: 'online' | 'offline' | 'deleted' }>`
  position: absolute;
  top: 0;
  right: 0;
  width: clamp(1rem, 1vw, 2rem);
  height: clamp(1rem, 1vw, 2rem);
  border: 0.125rem solid #281828;
  border-radius: clamp(0.25rem, 0.25vw, 0.5rem);
  background: #57AC81;

  ${({ status }) => status === 'offline' && css`
    background-color: #9C959C;
  `}
  ${({ status }) => status === 'deleted' && css`
    background-color: #FFFFFF;
  `}
`
interface Props {
  imgUrl: string
}

const ProfileImage = ({ imgUrl }: Props): JSX.Element => {
  return (
    <ChatPicture>
      <img src={imgUrl} alt='Imagen de perfil del contacto' />
      <ChatPictureStatus status='online' />
    </ChatPicture>
  )
}

export { ProfileImage }
