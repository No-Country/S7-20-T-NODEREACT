import { Footer, Header } from '@/components'
import { Outlet } from 'react-router-dom'

const LayoutPages = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export { LayoutPages }
