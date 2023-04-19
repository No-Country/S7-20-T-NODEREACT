import { IUserContext } from '@/models'
import { createContext } from 'react'

const UserContext = createContext<IUserContext>({
  user: false,
  signUp: () => {},
  signIn: () => {},
  signInWithGithub: () => {},
  signInWithGoogle: () => {},
  signOut: () => {},
  handleSelectedChatId: (chatId) => {},
  selectedChatId: null
})

export { UserContext }
