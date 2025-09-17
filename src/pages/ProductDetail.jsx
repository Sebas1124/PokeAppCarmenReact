import { useParams } from "react-router-dom"

export const ProductDetail = () => {

    const { id, color, talla, nombre } = useParams();

  return (
    <>
        <h1>Talla {talla}</h1>
        <h1>Color {color}</h1>
        <h1>Id {id}</h1>
        <h1>Nombre {nombre}</h1>
    </>
  )
}
