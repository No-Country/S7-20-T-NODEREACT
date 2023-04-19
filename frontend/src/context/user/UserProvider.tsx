import { UserContext } from '@/context'
import { useState } from 'react'

interface Props {
  children: React.ReactNode
}

const UserProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<boolean | null>(false)

  const signUp = (): void => {
    console.log('sign up')
  }

  const signIn = (): void => {
    console.log('sign in')
  }

  const signInWithGoogle = (): void => {
    console.log('sign in with google')
  }

  const signInWithGithub = (): void => {
    console.log('sign in with github')
  }

  const signOut = (): void => {
    console.log('sign out')
  }

  const [selectedChatId, setSelectedChatId] = useState<string | null>(null)

  const handleSelectedChatId = (chatId: string | null): void => {
    setSelectedChatId(chatId)
  }

  const data = {
    user,
    signUp,
    signIn,
    signInWithGithub,
    signInWithGoogle,
    signOut,
    selectedChatId,
    handleSelectedChatId
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export { UserProvider }
