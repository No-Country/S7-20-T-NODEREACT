import { useState } from 'react'
import styled, { css } from 'styled-components'

const TabsStyled = styled('ul')`
  display: flex;
  flex-flow: row nowrap;
  gap: clamp(2.5rem, 2.5vw, 5rem);
  padding: clamp(1rem, 1vw, 2rem);
  background-color: #EEF4F4;
`
const TabItem = styled('li')<{ isActive: boolean }>`
  flex: 1;
  color: #9C959C;
  text-align: center;
  font-size: clamp(1rem, 1vw, 2rem);
  font-weight: 700;
  position: relative;

 @media screen and (min-width: 64rem) {
    cursor: pointer;
 }

  ${({ isActive }) => isActive && css`
    color: #281828;
    
    span {
      width: 100%;
    }
  `}
`
const TabBorder = styled('span')`
  width: 0;
  height: clamp(0.25rem, 0.25vw, 0.5rem);
  position: absolute;
  left: 0;
  bottom: -85%;
  background-color: #6D6BC5;
  transition: width 300ms;
`

const Tabs = (): JSX.Element => {
  const [tabOptions, setTabOptions] = useState({
    chats: true,
    groups: false,
    channels: false
  })

  const handleTabChange = (tab: string): void => {
    setTabOptions({
      chats: false,
      groups: false,
      channels: false,
      [tab]: true
    })
  }

  return (
    <TabsStyled>
      <TabItem onClick={() => handleTabChange('chats')} isActive={tabOptions.chats}>Chats <TabBorder /></TabItem>
      <TabItem onClick={() => handleTabChange('groups')} isActive={tabOptions.groups}>Grupos <TabBorder /></TabItem>
      <TabItem onClick={() => handleTabChange('channels')} isActive={tabOptions.channels}>Canales  <TabBorder /></TabItem>
    </TabsStyled>
  )
}

export { Tabs }
