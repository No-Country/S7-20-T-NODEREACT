import { createContext } from 'react'

interface UserContextType {
  selectedChatId: string | null
  handleSelectedChatId: (chatId: string | null) => void
}

const UserContext = createContext<UserContextType>({
  selectedChatId: null,
  handleSelectedChatId: function (): void {}
})

export { UserContext }
