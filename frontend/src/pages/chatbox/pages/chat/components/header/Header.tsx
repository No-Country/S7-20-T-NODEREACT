import { IconArrowBack, IconMoreVert } from '@/pages/chatbox/pages/chat/components'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { IconSearch } from '../../../home/components'

const StyledHeader = styled.header`
  position: sticky;
  top:0;
  width:100%;
  height: clamp(4.625rem, 8vw,5rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: clamp(0.125rem, 0.125vw, 0.25rem) solid #281828;
  background-color: #c9dbdb;
  padding: clamp(1rem, 2vw, 1.188rem) clamp(1rem, 2vw, 1.5rem);
  
  svg {
    width: clamp(2rem, 2vw, 4rem) ;
    height: clamp(2rem, 2vw, 4rem) ;
  }
`

const WrapperUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  height: 40px;
  justify-content: space-between;
`

const UserName = styled.p`
  margin:0;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #281828;
`

const UserStatus = styled.p`
  margin:0;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #8A89D1;
`

const WrapperUserData = styled.div`
  display: flex;
  align-items: center;
`

const UserAvatarPlaceholder = styled.div<{ userAvatar: string }>`
  width: clamp(2.5rem, 1vw, 4.5rem) ;
  height: clamp(2.63rem, 1vw, 4.63rem) ;
  margin-left: clamp(1.375rem, 4vw, 2.375rem);
  background-color: #7F7F7F;
  border-radius: 4px;
  background-image: ${props => props.userAvatar.length >= 1 ? `url(${props.userAvatar})` : ''};
  background-size: cover;
  background-position: center center;
  outline: clamp(0.125rem, 0.125vw, 0.25rem) solid #281828;
  box-shadow: clamp(0.375rem, 0.375vw, 0.75rem) clamp(0.375rem, 0.375vw, 0.75rem) 0 #6d6bc5;
  border-radius: clamp(0.25rem, 0.25vw, 0.5rem);
`

const UserStatusInAvatar = styled.div`
  width: 8px;
  height: 8px;
  background: #57AC81;
  margin-left: auto;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
`

const WrapperRightItems = styled.div`
  margin-left: auto;
  padding-right: 2.5rem;
  visibility: hidden;

  @media screen and (min-width: 49.75rem) {
    visibility: visible;
  }
`

const Header = (): JSX.Element => {
  const senderData = { userName: 'Dan Abramov', userAvatar: 'https://bit.ly/dan-abramov', userIsWritting: true, userIsOnline: true }

  const { userName, userAvatar, userIsWritting, userIsOnline } = senderData

  return (
    <StyledHeader>
      <WrapperUserData>
        <NavLink to='/'>
          <IconArrowBack />
        </NavLink>
        <UserAvatarPlaceholder userAvatar={userAvatar}>
          {userIsOnline && <UserStatusInAvatar />}
        </UserAvatarPlaceholder>
        <WrapperUserInfo>
          <UserName>{userName}</UserName>
          {userIsWritting && <UserStatus>escribiendo...</UserStatus>}
        </WrapperUserInfo>
      </WrapperUserData>
      <WrapperRightItems>
        <IconSearch />
      </WrapperRightItems>
      <IconMoreVert />
    </StyledHeader>
  )
}
export { Header }
