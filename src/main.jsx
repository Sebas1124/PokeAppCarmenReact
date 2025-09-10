import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { App } from './App.jsx'
import './styles/GlobalStyles.css'
import { AppRouter } from './router/AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'

//primer paso instalar react-router-dom --> npm install react-router-dom
//importar BrowserRouter
//envolver la app con BrowserRouter, dentro de browserRouter va la app, voy a colocar otra etiqueta que es approuter
//definir las rutas en approuter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  
  </StrictMode>,
)
