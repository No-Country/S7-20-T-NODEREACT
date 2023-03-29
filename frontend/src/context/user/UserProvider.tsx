import { UserContext } from '@/context'

interface Props {
  children: React.ReactNode
}

const UserProvider = ({ children }: Props): JSX.Element => {
  const data = {}

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export { UserProvider }
