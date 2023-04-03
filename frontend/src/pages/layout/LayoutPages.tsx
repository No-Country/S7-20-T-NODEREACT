import { Footer } from '@/components'
import { Header } from '@/pages/home/components'
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
