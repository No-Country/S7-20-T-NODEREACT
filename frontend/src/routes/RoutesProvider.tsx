import { ErrorPage, LoginPage, RegisterPage } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RoutesProvider = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<main>pages home layout</main>}>
          <Route index element={<main>home page</main>} />
          <Route path='features' element={<main>feature page</main>} />
          <Route path='faqs' element={<main>faqs page</main>} />
          <Route path='privacy' element={<main>privacy page</main>} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
        <Route path='/chatbox' element={<main>chatbox page</main>} />
        <Route path='/chatbox/chat/:chat' element={<main>chatbox page</main>} />
        <Route path='/chatbox/new-message' element={<main>chatbox new message page</main>} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RoutesProvider }
