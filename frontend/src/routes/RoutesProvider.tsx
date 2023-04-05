import { ChatboxNewMessagePage, ChatboxPage, ErrorPage, FaqsPage, FeaturesPage, HomePage, LayoutPages, LoginPage, PrivacyPage, RegisterPage } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RoutesProvider = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPages />}>
          <Route index element={<HomePage />} />
          <Route path='features' element={<FeaturesPage />} />
          <Route path='faqs' element={<FaqsPage />} />
          <Route path='privacy' element={<PrivacyPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
        <Route path='/chatbox' element={<ChatboxPage />} />
        <Route path='/chatbox/chat/:chat' element={<ChatboxPage />} />
        <Route path='/chatbox/new-message' element={<ChatboxNewMessagePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RoutesProvider }
