import React from 'react'
import Header from '../components/statics/Header'
import Footer from '../components/statics/Footer'

const AcercaDe = ({cart, borrarProducto}) => {
  return (
    <>
    <Header borrarProducto={borrarProducto} cartItems={cart}/>
      <h1>Acerca de...</h1>
    <Footer/>  
    </>
  )
}

export default AcercaDe
