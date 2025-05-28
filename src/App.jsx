import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contacto from './views/Contacto'
import AcercaDe from './views/AcercaDe'
import Galeria from './views/Galeria'
import NotFound from './views/NotFound'

function App() {

  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/data/productos.json')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setProductos(data)
          setLoading(false)
        }, 2000)
      }
      )
      .catch(err => {
        console.log('Error', err)
        setLoading(false)
        setError(true)
      })
  }, [])

  const handleAddToCart = (producto) => {
    const existingProduct = cart.find(item => item.id === producto.id)
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item ))
    } else {
      setCart([...cart, { ...producto, quantity: 1 }])
    }
  }

  const handleDeleteFromCart = (producto) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === producto.id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return null
          }
        } else {
          return item
        }
      }).filter(item => item != null);
    });
  };

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} loading={loading} />} />
        <Route path="/acercade" element={<AcercaDe cart={cart} borrarProducto={handleDeleteFromCart}/>} />
        <Route path="/galeria" element={<Galeria agregarCarrito={handleAddToCart} cart={cart} productos={productos} loading={loading} borrarProducto={handleDeleteFromCart}/>} />
        <Route path="/contacto" element={<Contacto cart={cart} borrarProducto={handleDeleteFromCart}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  )
}

export default App
