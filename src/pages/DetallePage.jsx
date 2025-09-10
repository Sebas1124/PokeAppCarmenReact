import { use } from "react"
import { useParams } from "react-router-dom"


export const DetallePage = () => {
    const {id} = useParams();

  return (
    <div>Buscando Pokemon con ID: {id}</div>
  )
}
//useParams me permite acceder a los parametros que yo defina en la ruta, en este caso id
//para que funcione, tengo que ir a la ruta y definir el parametro, en este caso en approuter.jsx
//en approuter.jsx en la ruta detalle, poner /detalle/:id
//cuando yo vaya a la ruta detalle, tengo que pasarle un id, por ejemplo localhost:5173/detalle/1   