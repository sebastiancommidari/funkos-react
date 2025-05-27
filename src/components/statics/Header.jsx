import React from 'react'
import { Link } from 'react-router-dom'
import './stylestatics.css' // Assuming you have a CSS file for styles

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to='/' className='link'>Inicio</Link></li>
                <li><Link to='/acercade' className='link'></Link>Nosotros</li>
                <li><Link to='/galeria' className='link'></Link>Nuestros Productos</li>
                <li><Link to='/contacto' className='link'>Contactanos</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
