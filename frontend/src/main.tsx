import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './routes/App'

createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
