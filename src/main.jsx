import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/GlobalStyles.css'
import { AppRouter } from './router/AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'

// 1. paso instalar react-router-dom -> npm install react-router-dom
// 2. paso: importar BrowserRouter
// 3. paso: envolver la app con el componente BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
)
