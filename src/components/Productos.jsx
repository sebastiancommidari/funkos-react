import React, {useState, useContext} from 'react'
import './styleProductos.css'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Productos = ({producto}) => {

    const [cantidad, setCantidad] = React.useState(1);

    const {handleAddToCart} = useContext(CartContext);

    const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 : prev));
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));


  return (
    <section className='card'>
        <div className='imagenContainer'>
            <img src={producto.imagen} alt="" className='imagen' />
        </div>

        <h3 className='nombre'>{producto.nombre}</h3>
        <p className='precio'>${producto.precio}</p>
        <p className='stock'>{producto.stock}</p>

        <div className='cantidadContainer'>
            <button className='qtyButton' onClick={decrease}>-</button>
            <span style={{color:'black'}}>{cantidad}</span>
            <button className='qtyButton' onClick={increase}>+</button>
        </div>

        <button onClick={() => handleAddToCart({ ...producto, cantidad })}>Agregar al carrito</button>

        <Link to={`/galeria/${producto.id}`} className='detallesLink'>Ver detalles...</Link>


    </section>
    
  )
}

export default Productos
