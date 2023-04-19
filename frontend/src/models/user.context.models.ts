export interface IUserContext {
  user: boolean | null
  signUp: () => void
  signIn: () => void
  signInWithGithub: () => void
  signInWithGoogle: () => void
  signOut: () => void
  selectedChatId: string | null
  handleSelectedChatId: (chatId: string | null) => void
}
