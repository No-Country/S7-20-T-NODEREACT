import { IUserContext, UserCredentials } from '@/models'
import { createContext } from 'react'

const UserContext = createContext<IUserContext>({
  user: { id: '', firstName: '', lastName: '', email: '', password: '' },
  setUser: () => {},
  setUserID: (id) => {},
  removeUserID: () => {},
  setUserToken: (token) => {},
  removeUserToken: () => {},
  signUp: () => {},
  signIn: async (user: UserCredentials) => {},
  signInWithGithub: () => {},
  signInWithGoogle: () => {},
  signOut: () => {},
  handleSelectedChatId: (chatId) => {},
  selectedChatId: null
})

export { UserContext }
