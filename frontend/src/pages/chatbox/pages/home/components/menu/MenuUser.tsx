import { useAuth } from '@/hooks'
import { IconQrCode } from '@/pages/chatbox/pages/home/components'
import styled from 'styled-components'

const MenuUserStyled = styled('section')`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: clamp(0.5rem, 0.5vw, 1rem) clamp(1rem, 1vw, 2rem);
  grid-template:
    'image name qrcode' auto
    'image email qrcode' auto
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
  color: #8f9b9b;
  font-size: clamp(0.75rem, 0.75vw, 1.5rem);
  font-weight: 500;
`
const WrapperIconQrCode = styled('button')`
  grid-area: qrcode;

  svg {
    fill: #eae8ea;
    width: clamp(1.75rem, 1.75vw, 3.5rem);
    background-color: #6d6bc5;
  }
`

const MenuUser = (): JSX.Element => {
  const { user } = useAuth()

  const firstName = typeof user !== 'boolean' ? user?.firstName : 'test'
  const lastName = typeof user !== 'boolean' ? user?.lastName : 'test'
  const email = typeof user !== 'boolean' ? user?.email : 'test'

  return (
    <MenuUserStyled>
      <MenuImage data-bx src='https://randomuser.me/api/portraits/men/52.jpg' alt='Imagen de perfil del usuario' />
      <MenuName>
        {firstName} {lastName}
      </MenuName>
      <MenuEmail>{email}</MenuEmail>
      <WrapperIconQrCode>
        <IconQrCode />
      </WrapperIconQrCode>
    </MenuUserStyled>
  )
}

export { MenuUser }
