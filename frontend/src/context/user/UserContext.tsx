import { IUserContext, UserCredentials } from '@/models'
import { createContext } from 'react'

const UserContext = createContext<IUserContext>({
  user: false,
  setUser: () => {},
  signUp: () => {},
  signIn: async (user: UserCredentials) => {},
  signInWithGithub: () => {},
  signInWithGoogle: () => {},
  signOut: () => {},
  handleSelectedChatId: (chatId) => {},
  selectedChatId: null
})

export { UserContext }
