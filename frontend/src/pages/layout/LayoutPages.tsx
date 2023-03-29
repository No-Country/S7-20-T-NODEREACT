import { Outlet } from 'react-router-dom'

const LayoutPages = (): JSX.Element => {
  return (
    <>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </>
  )
}

export { LayoutPages }
