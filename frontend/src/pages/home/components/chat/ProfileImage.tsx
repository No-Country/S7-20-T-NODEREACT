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
const ChatPictureStatus = styled('span')<{ status: 'online' | 'offline' | 'deleted' }>`
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

const ProfileImage = (): JSX.Element => {
  return (
    <ChatPicture>
      <img src='https://s3-alpha-sig.figma.com/img/a339/5e70/440b48a236ef3499b537246b735e66b0?Expires=1681689600&Signature=UDUygl4LDxFYx0IKFRRGu6MbAsC-plbVm5gnJWmy2m0JTjfEmINPE1uDGyvi-ulXdexxo8dcRXjw8ELixRwRw56lA5Kxi2MIcfmY27neq6NzE3fhr45FYXPu7tl5nHiT1mD3JIAYh-CNA9m9TXwuI31H8vyLhAATpV5vPRaj5AIMn-ADNh9VUNFjuLfDE1fX1pssM7OX986VOgviGlVtvxggL~8tQ1iTKjZj-34Zp-GdD6fAZmRZ~zVjh2QntSG0exLrMtAjm5VqQctSAQSV616UXiHkuiCz2nXRmZgWLdVodzULQJTKb3T~eunr6U54bjUUIq~tDxMwXKvmttsVcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='Imagen de perfil del contacto' />
      <ChatPictureStatus status='online' />
    </ChatPicture>
  )
}

export { ProfileImage }
