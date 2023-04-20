import { UserContext } from '@/context'
import { IUserContext } from '@/models'
import { useContext } from 'react'

const useAuth = (): IUserContext => {
  const context = useContext(UserContext)
  return context
}

export { useAuth }
