import React from 'react'
import Header from '../components/statics/Header'
import Footer from '../components/statics/Footer'

const Contacto = ({cart, borrarProducto}) => {
  return (
    <>
    <Header borrarProducto={borrarProducto} cartItems={cart}/>
      <h1>Contacto</h1>
    <Footer/>  
    </>
  )
}

export default Contacto
