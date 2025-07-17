import React from 'react'
import Header from '../components/statics/Header'
import Footer from '../components/statics/Footer'
import ProductList from '../components/ProductList'
import loadingGif from '../assets/img/loading_batman.gif'

const Galeria = ({ agregarCarrito, cart, productos, loading, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <h1 className='sombreadoTitulos' style={{marginTop:'1em', marginBottom:'1em'}}>Galería de Productos</h1>

      {
        loading ? (
          <div style={{ textAlign: 'center' }}>
            <img src={loadingGif} alt="Loading..." className="loading-img" />
            <p className='sombreadoTitulos' style={{ fontSize: '38px', color: '#FFFFFF', fontWeight: '700' }}>Esperame...!</p>
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
