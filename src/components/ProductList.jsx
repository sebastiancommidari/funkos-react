import React from 'react'
import Productos from './Productos'

const ProductList = ({productos, agregarCarrito}) => {
    console.log(productos);

  return (
    <>
      <h2>¡Mirá todas nuestras novedades!</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
      {
        productos.map (producto =>
            <Productos key={producto.id} producto={producto}
            agregarCarrito={agregarCarrito} />
        )
      }
      </div>
    </>
  )
}

export default ProductList
