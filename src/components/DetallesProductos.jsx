import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './statics/Header';
import Footer from './statics/Footer';
import { CartContext } from '../context/CartContext';

const DetallesProductos = () => {
    const { id } = useParams();
    const { productos } = useContext(CartContext);

    // Esperar a que productos esté cargado
    if (!productos || productos.length === 0) {
        return (
            <>
                <Header />
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <h2 style={{ color: '#333' }}>Cargando producto...</h2>
                </div>
                <Footer />
            </>
        );
    }

    const product = productos.find((producto) => String(producto.id) === String(id));

    // Si no se encuentra el producto
if (!product) {
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2 style={{ color: '#c00' }}>Producto no encontrado</h2>
        <Link to="/">
          <div
            style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: '#4f207a',
              color: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold',
              marginTop: '1rem'
            }}
          >
            Volver a Home
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
}

    return (
        <>
            <Header />
            <section
                style={{
                    maxWidth: '600px',
                    margin: '32px auto',
                    padding: '2rem',
                    border: '1px solid #eee',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                    background: '#fff'
                }}
            >
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
                    {product.nombre}
                </h1>

                {product.imagen && (
                    <img
                        src={product.imagen}
                        alt={product.nombre}
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            height: 'auto',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            marginBottom: '1.5rem',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                    />
                )}

                <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>
                    {product.description}
                </p>

                <p style={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#000' }}>
                    Precio: ${product.precio}
                </p>

                <details open style={{
                    marginBottom: '1.5rem',
                    backgroundColor: '#f9f9f9',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid #ddd'
                }}>
                    <summary style={{ fontWeight: 'bold', color: '#333' }}>
                        Detalles del producto
                    </summary>
                    <div style={{ color: '#555', marginTop: '1rem' }}>
                        <div style={{ padding: '0.5rem 0', borderBottom: '1px solid #ccc' }}>
                            <strong>Marca:</strong> Acme
                        </div>
                        <div style={{ padding: '0.5rem 0', borderBottom: '1px solid #ccc' }}>
                            <strong>Categoría:</strong> {product.categoria}
                        </div>
                        <div style={{ padding: '0.5rem 0', borderBottom: '1px solid #ccc' }}>
                            <strong>SKU:</strong> {product.id + 1250}
                        </div>
                        <div style={{ padding: '0.5rem 0', borderBottom: '1px solid #ccc' }}>
                            <strong>Fecha de lanzamiento:</strong> {new Date().toLocaleDateString('es-ES', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </div>
                    </div>
                </details>

                <p style={{ fontSize: '1.5rem', color: '#42105b', marginBottom: '1.5rem' }}>
                    Stock: {product.stock}
                </p>

                <Link to="/">
                    <div
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            background: '#4f207a',
                            color: '#fff',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            marginTop: '1rem'
                        }}
                    >
                        Volver a Home
                    </div>
                </Link>
            </section>
            <Footer />
        </>
    );
};

export default DetallesProductos;