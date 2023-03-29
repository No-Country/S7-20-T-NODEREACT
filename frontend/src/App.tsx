import { UserProvider } from '@/context'
import { RoutesProvider } from '@/routes'
import { StylesProvider } from '@/styled-components'

const App = (): JSX.Element => {
  return (
    <UserProvider>
      <StylesProvider />
      <RoutesProvider />
    </UserProvider>
  )
}

export { App }
