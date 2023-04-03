import { IconArrowBack } from '@/components/icons/IconArrowBack'
import { IconMoreVert } from '@/components/icons/IconMoreVert'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 70.5px;
  left: 0px;
  top: 0px;
  background: #4B4B4B;
  color: #C1C1C1;
  z-index:1;
`

const WrapperLeftItems = styled.div`
  display: flex;
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
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #C1C1C1;
`

const UserStatus = styled.p`
  margin:0;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #7F7F7F;
`

const WrapperUserData = styled.div`
  display: flex;
  align-items: center;
`

const UserAvatarPlaceholder = styled.div<{ userAvatar: string }>`
  width: 40px;
  height: 40px;
  background-color: #7F7F7F;
  border-radius: 4px;
  background-image: ${props => props.userAvatar.length >= 1 ? `url(${props.userAvatar})` : ''};
  background-size: contain;
`

const UserStatusInAvatar = styled.div`
  width: 8px;
  height: 8px;
  background: #F0673C;
  margin-left: auto;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
`

const WrapperIconArrowBack = styled.div`
  padding: 23px 16px;
`

const WrapperIconMoreVert = styled.div`
  padding: 13px 16px 33px;
`

const Header = (): JSX.Element => {
  const senderData = { userName: 'Dan Abramov', userAvatar: 'https://bit.ly/dan-abramov', userIsWritting: true, userIsOnline: true }

  const { userName, userAvatar, userIsWritting, userIsOnline } = senderData

  return (
    <StyledHeader>
      <WrapperLeftItems>
        <WrapperIconArrowBack>
          <IconArrowBack />
        </WrapperIconArrowBack>
        <WrapperUserData>
          <UserAvatarPlaceholder userAvatar={userAvatar}>
            {userIsOnline && <UserStatusInAvatar />}
          </UserAvatarPlaceholder>
          <WrapperUserInfo>
            <UserName>{userName}</UserName>
            {userIsWritting && <UserStatus>escribiendo...</UserStatus>}
          </WrapperUserInfo>
        </WrapperUserData>
      </WrapperLeftItems>
      <WrapperIconMoreVert>
        <IconMoreVert />
      </WrapperIconMoreVert>
    </StyledHeader>
  )
}
export { Header }
