import React from 'react';
import Header from '../components/statics/Header';
import Footer from '../components/statics/Footer';

const Contacto = ({ cart, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <main style={{ maxWidth: '700px', margin: 'auto', padding: '2rem' }} className='sombreadoTitulos'>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ffffffff' }}>Contacto</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          ¿Tenés dudas, sugerencias o simplemente querés compartir tu amor por los funkos? ¡Nos encantaría leerte!
        </p>
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="nombre" style={{ display: 'block', marginBottom: '0.5rem' }}>Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Correo electrónico:</label>
            <input type="email" id="email" name="email" placeholder="correo@ejemplo.com" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="mensaje" style={{ display: 'block', marginBottom: '0.5rem' }}>Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escribí tu mensaje..." style={{ width: '100%', padding: '0.5rem', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }} />
          </div>
          <button type="submit" style={{ backgroundColor: '#403371', color: 'white', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '6px', fontWeight: 'bold' }}>
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Contacto;
