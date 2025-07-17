import React, { useContext } from 'react'
import './styleCart.css'
import { CartContext } from '../context/CartContext.jsx'

const Cart = ({ isOpen, onClose }) => {

    const { cart, handleDeleteFromCart, clearCart } = useContext(CartContext)

    return (
        <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
            <div className='cart-header'>
                <h2 style={{ color: 'black' }}>Carrito de Compras</h2>
                <button onClick={onClose} className='close-button'>x</button>
            </div>
            <div className='cart-content'>
                {cart.length === 0 ? (
                    <p style={{ color: 'red' }}>El carrito está vacío</p>
                ) : (<>
                    <ul className='cart-item'>
                        {cart.map((item) => (
                            <li key={item.id} style={{
                                color: 'black',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0.5rem 0',
                                fontSize: '18px',
                            }}>
                                <span>{item.cantidad} x {item.nombre} - ${item.precio * item.cantidad}</span>
                                <button onClick={() => handleDeleteFromCart(item)} style={{ marginLeft: '1rem' }}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-footer">
                        <p style={{ color: 'black', fontWeight: 'bold', fontSize: '24px', borderBlockColor: 'black', borderBlockWidth: '1px', borderBlockStyle: 'solid', padding: '0.5em' }}>
                            Total: ${cart.reduce((total, item) => total + (item.precio * item.cantidad), 0)}
                        </p>
                        <button style={{ color: 'black' }} onClick={() => clearCart()} className="btnCheckout">
                            Finalizar Compra
                        </button>
                    </div>
                </>
                )}
            </div>

        </div>
    )
}

export default Cart
