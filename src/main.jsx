import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/GlobalStyles.css'
import { AppRouter } from './router/AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'

// 1. paso instalar react-router-dom -> npm install react-router-dom
// 2. paso: importar BrowserRouter
// 3. paso: envolver la app con el componente BrowserRouter

//primer paso instalar react-router-dom --> npm install react-router-dom
//importar BrowserRouter
//envolver la app con BrowserRouter, dentro de browserRouter va la app, voy a colocar otra etiqueta que es approuter
//definir las rutas en approuter
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  // </StrictMode>,
)
