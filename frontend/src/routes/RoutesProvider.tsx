import { LayoutPages } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RoutesProvider = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPages />}>
          <Route index element={<main>home</main>} />
          <Route path='chat' element={<main>chat</main>} />
          <Route path='new-message' element={<main>new message</main>} />
          <Route path='login' element={<main>login</main>} />
          <Route path='register' element={<main>register</main>} />
          <Route path='*' element={<main>404, page not found</main>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { RoutesProvider }
