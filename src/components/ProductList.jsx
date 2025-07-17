import Productos from './Productos'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ProductList = () => {

  const { productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);

  return (
    <>
      <h2 style={{ marginBottom: '1rem'}} className="sombreadoTitulos">¡Mirá todas nuestras novedades!</h2>
      <input
        type='text'
        placeholder='Buscar productos...'
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ marginBottom: '4rem', padding: '0.5rem', width: '100%', maxWidth: '400px', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', color: '#333'   }}
      />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '25px',
        justifyContent: 'center',
        padding: '0 20px',
      }}>
        {
          productosFiltrados.map(producto =>
            <Productos key={producto.id} producto={producto} />
          )
        }
      </div>
    </>
  )
}

export default ProductList
