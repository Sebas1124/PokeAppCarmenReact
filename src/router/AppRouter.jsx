import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { DetallePage } from "../pages/DetallePage"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/detalle/:id" element={<DetallePage/>}/>
        <Route path="/favoritos" element={<h1>Pokemones Favoritos</h1>}/>

        <Route path="*" element={<h1>404 No encontrado</h1>}/>

    </Routes>
  )
}
