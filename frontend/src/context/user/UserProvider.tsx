import { UserContext } from '@/context'
import { User, UserCredentials } from '@/models'
import axios from 'axios'
import { useState } from 'react'

interface Props {
  children: React.ReactNode
}

const UserProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<boolean | User | null>(false)

  const signUp = (): void => {
    console.log('sign up')
  }

  const signIn = async (user: UserCredentials): Promise<any> => {
    const { data } = await axios.post('http://localhost:8080/api/v1/signin', user)
    return data
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
    setUser,
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
