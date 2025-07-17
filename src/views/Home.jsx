import React, { useContext } from 'react'
import Header from '../components/statics/Header'
import Footer from '../components/statics/Footer'
import ProductList from '../components/ProductList'
import loadingGif from '../assets/img/loading_batman.gif'
import { CartContext } from '../context/CartContext'

const Home = ({ agregarCarrito }) => {

  const { loading } = useContext(CartContext);

  return (
    <>
      <Header />

      <main className="sombreadoTitulos">
        <h1 style={{ fontSize: '3.5rem', marginTop:'0.7em' }}>Bienvenidos a FUNKOS LOKOS</h1>
        <p style={{ fontSize: '20px', marginBottom:'2em' }} >Tenemos las mejores figuras de colección y los mejores funkos del mundo</p>
      </main>


      {
        loading ? (
          <div style={{ textAlign: 'center' }}>
            <img src={loadingGif} alt="Loading..." className="loading-img" />
            <p className='sombreadoTitulos' style={{ fontSize: '38px', color: '#FFFFFF', fontWeight: '700' }}>¡Esperame...!</p>
          </div>
        ) : (
          <ProductList />
        )
      }




      <Footer />
    </>
  )
}

export default Home
