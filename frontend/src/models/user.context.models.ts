import { User, UserCredentials } from '@/models'

export interface IUserContext {
  user: boolean | null | User
  setUser: React.Dispatch<React.SetStateAction<boolean | null | User>>
  setUserID: (id: string) => void
  removeUserID: () => void
  setUserToken: (token: string) => void
  removeUserToken: () => void
  signUp: () => void
  signIn: (user: UserCredentials) => Promise<any>
  signInWithGithub: () => void
  signInWithGoogle: () => void
  signOut: () => void
  selectedChatId: string | null
  handleSelectedChatId: (chatId: string | null) => void
}
