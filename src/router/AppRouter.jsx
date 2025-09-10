import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage.jsx"
import { DetallePage } from "../pages/DetallePage.jsx"

//funcion que me retorna un html directamente, que se llama como el archivo
export const AppRouter = () => {
  return (
    <Routes>
      /*aqui van las rutas*/
      <Route path="/" element={<HomePage />}/>//entrada principal, cuando cargue la app por primera vez, se va a dirigir aqui
      //elemento que quieres cargar o mostrar en esa ruta
      <Route path="/detalle/:id" element={<DetallePage/>}/>
     //esta no va a salir, para que salga, poner en el navegador, localhost:5173/detalle
      <Route path="/favoritos" element={<h1>Pokemones favoritos</h1>}/> 
      <Route path="*" element={<h1>404 Not Found</h1>}/> //cualquier otra ruta que no este definida, va a salir not found
    </Routes>
  )
}
