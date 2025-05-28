import React from 'react'
import Header from '../components/statics/Header'
import Footer from '../components/statics/Footer'
import ProductList from '../components/ProductList'
import loadingGif from '../assets/img/loading_batman.gif'
import { Link } from 'react-router-dom'

const Home = ({ agregarCarrito, borrarProducto, cart, productos, loading }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />

      <main>
        <h1>Bienvenidos a FUNKOS LOKOS</h1>
        <p style={{ fontSize: '20px' }}>Tenemos las mejores figuras de colección y los mejores funkos del mundo</p>
      </main>


      {
        loading ? (
          <div style={{ textAlign: 'center' }}>
            <img src={loadingGif} alt="Loading..." className="loading-img" />
            <p style={{ fontSize: '38px', color: '#FFFFFF', fontWeight: '700' }}>¡Ya casi llego...</p>
          </div>
        ) : (
          <ProductList agregarCarrito={agregarCarrito} productos={productos} />
        )
      }




      <Footer />
    </>
  )
}

export default Home
