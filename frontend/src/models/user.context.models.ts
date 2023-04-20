import { User, UserCredentials } from '@/models'

export interface IUserContext {
  user: boolean | null | User
  setUser: React.Dispatch<React.SetStateAction<boolean | null | User>>
  signUp: () => void
  signIn: (user: UserCredentials) => Promise<any>
  signInWithGithub: () => void
  signInWithGoogle: () => void
  signOut: () => void
  selectedChatId: number | null
  handleSelectedChatId: (chatId: number | null) => void
}
