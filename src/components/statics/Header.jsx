import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './styleStatics.css'
import Cart from '../Cart'

const Header = ({cartItems, borrarProducto}) => {

  const [isCartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'><img src="../src/assets/img/FUNKOS_LOKOS.png" alt="Funkos Lokos Logo" className="logo-img"/></Link></li>
          <li><Link to='/' className='link'>Inicio</Link></li>
          <li><Link to='/acercade' className='link'>Nosotros</Link></li>
          <li><Link to='/galeria' className='link'>Nuestros Productos</Link></li>
          <li><Link to='/contacto' className='link'>Contactanos</Link></li>
          <li className='cartnav'>
            <button onClick={()=>setCartOpen(true)} className='btnCart'><i className="fa-solid fa-cart-shopping"></i></button>
            <Cart cartItems={cartItems} isOpen={isCartOpen} onClose={()=>setCartOpen(false)} borrarProducto={borrarProducto}/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
