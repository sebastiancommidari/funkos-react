import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    })

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [isAuthenticated, setIsAuth] = useState(false);
    const [busqueda, setBusqueda] = useState('')

    useEffect(() => {
        fetch('https://68784af531d28a460e1dcbcb.mockapi.io/product')
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

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));}, [cart]);

    const productosFiltrados = productos.filter((producto) =>
        producto?.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

const handleAddToCart = (producto) => {
  setCart((prevCart) => {
    const existente = prevCart.find((item) => item.id === producto.id);
    if (existente) {
      return prevCart.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + producto.cantidad }
          : item
      );
    } else {
      return [...prevCart, { ...producto }];
    }
  });
};


const handleDeleteFromCart = (producto) => {
  setCart((prevCart) => {
    return prevCart
      .map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
      .filter((item) => item.cantidad > 0);
  });
};

    const clearCart = () => {
        setCart([])
        localStorage.removeItem('cart');
        toast.info('Compra finalizada!')
    }


    return (
        <CartContext.Provider value={{
            cart,
            productos,
            loading,
            error,
            setError,
            handleAddToCart,
            handleDeleteFromCart,
            isAuthenticated,
            setIsAuth,
            clearCart,
            busqueda,
            setBusqueda,
            productosFiltrados
        }}>
            {children}
        </CartContext.Provider>
    );
}