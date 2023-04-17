import { IconQrCode } from '@/pages/chatbox/pages/home/components'
import styled from 'styled-components'

const MenuUserStyled = styled('section')`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: clamp(.5rem, .5vw, 1rem) clamp(1rem, 1vw, 2rem);
  grid-template: 
  "image name qrcode" auto
  "image email qrcode" auto
  / auto 1fr auto;
  word-break: break-all;
`
const MenuImage = styled('img')`
  grid-area: image;
  width: clamp(4rem, 4vw, 8rem);
  aspect-ratio: 1;
`
const MenuName = styled('h3')`
  align-self: flex-end;
  justify-self: flex-start;
  grid-area: name;
  color: #281828;
  font-size: clamp(1rem, 1vw, 2rem);
  font-weight: 500;
`
const MenuEmail = styled('h4')`
  align-self: flex-start;
  justify-self: flex-start;
  grid-area: email;
  color: #8F9B9B;
  font-size: clamp(0.75rem, 0.75vw, 1.5rem);
  font-weight: 500;
`
const WrapperIconQrCode = styled('button')`
  grid-area: qrcode;

  svg {
    fill: #EAE8EA;
    width: clamp(1.75rem, 1.75vw, 3.5rem);
    background-color: #6D6BC5;
  }
`

const MenuUser = (): JSX.Element => {
  return (
    <MenuUserStyled>
      <MenuImage data-bx src='https://s3-alpha-sig.figma.com/img/a339/5e70/440b48a236ef3499b537246b735e66b0?Expires=1681689600&Signature=UDUygl4LDxFYx0IKFRRGu6MbAsC-plbVm5gnJWmy2m0JTjfEmINPE1uDGyvi-ulXdexxo8dcRXjw8ELixRwRw56lA5Kxi2MIcfmY27neq6NzE3fhr45FYXPu7tl5nHiT1mD3JIAYh-CNA9m9TXwuI31H8vyLhAATpV5vPRaj5AIMn-ADNh9VUNFjuLfDE1fX1pssM7OX986VOgviGlVtvxggL~8tQ1iTKjZj-34Zp-GdD6fAZmRZ~zVjh2QntSG0exLrMtAjm5VqQctSAQSV616UXiHkuiCz2nXRmZgWLdVodzULQJTKb3T~eunr6U54bjUUIq~tDxMwXKvmttsVcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='Imagen de perfil del usuario' />
      <MenuName>Juan Perez</MenuName>
      <MenuEmail>davidmedev@gmail.com</MenuEmail>
      <WrapperIconQrCode><IconQrCode /></WrapperIconQrCode>
    </MenuUserStyled>
  )
}

export { MenuUser }
