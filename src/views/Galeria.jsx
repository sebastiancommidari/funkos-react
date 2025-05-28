import React from 'react'
import Header from '../components/statics/Header'
import Footer from '../components/statics/Footer'
import ProductList from '../components/ProductList'
import loadingGif from '../assets/img/loading_batman.gif'

const Galeria = ({ agregarCarrito, cart, productos, loading, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <h1>Galería de Productos</h1>

      {
        loading ? (
          <div style={{ textAlign: 'center' }}>
            <img src={loadingGif} alt="Loading..." className="loading-img" />
            <p style={{ fontSize: '38px', color: '#FFFFFF', fontWeight: '700' }}>Ya casi llego...!</p>
          </div>
        ) : (
          <ProductList agregarCarrito={agregarCarrito} productos={productos} />
        )
      }


      <Footer />
    </>
  )
}

export default Galeria
