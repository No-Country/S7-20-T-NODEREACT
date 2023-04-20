import { useAuth } from '@/hooks'
import { Navigate, Outlet } from 'react-router-dom'

const UserRouteProtected = (): JSX.Element => {
  const { user } = useAuth()

  if (user === false) return <main>loading</main>

  if (user === null) return <Navigate to='/welcome' />

  return <Outlet />
}

export { UserRouteProtected }
