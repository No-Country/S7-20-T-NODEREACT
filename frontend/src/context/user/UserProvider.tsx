import { UserContext } from '@/context'
import { User, UserCredentials } from '@/models'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
}

const UserProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<boolean | User | null>(false)
  const userID = localStorage.getItem('userID')

  useEffect(() => {
    if (userID !== null) {
      getUser(userID)
        .then((response) => setUser(response.data))
        .catch((error) => console.log(error))
    } else {
      setUser(null)
    }
  }, [])

  const setUserID = (id: string): void => {
    localStorage.setItem('userID', id)
  }

  const removeUserID = (): void => {
    localStorage.removeItem('userID')
  }

  const setUserToken = (token: string): void => {
    localStorage.setItem('token', token)
  }

  const removeUserToken = (): void => {
    localStorage.removeItem('token')
  }

  const getUser = async (userID: string): Promise<any> => {
    return await axios.get(`http://localhost:8080/api/v1/users/${userID}`)
  }

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
    setUser(null)
    removeUserID()
    removeUserToken()
  }

  const [selectedChatId, setSelectedChatId] = useState<number | null>(null)

  const handleSelectedChatId = (chatId: number | null): void => {
    setSelectedChatId(chatId)
  }

  const data = {
    user,
    setUser,
    setUserID,
    removeUserID,
    setUserToken,
    removeUserToken,
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
