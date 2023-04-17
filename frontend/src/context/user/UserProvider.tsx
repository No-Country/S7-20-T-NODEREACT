import { UserContext } from '@/context'
import { useState } from 'react'

interface Props {
  children: React.ReactNode
}

const UserProvider = ({ children }: Props): JSX.Element => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null)

  const handleSelectedChatId = (chatId: string | null): void => {
    setSelectedChatId(chatId)
  }

  const data = { selectedChatId, handleSelectedChatId }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export { UserProvider }
