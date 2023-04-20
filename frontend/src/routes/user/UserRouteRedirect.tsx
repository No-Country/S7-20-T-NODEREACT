import { useAuth } from '@/hooks'
import { Navigate, Outlet } from 'react-router-dom'

const UserRouteRedirect = (): JSX.Element => {
  const { user } = useAuth()

  if (user === false) return <main>loading</main>

  if (user !== null) return <Navigate to='/' />

  return <Outlet />
}

export { UserRouteRedirect }
