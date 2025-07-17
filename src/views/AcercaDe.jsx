import React from 'react';
import Header from '../components/statics/Header';
import Footer from '../components/statics/Footer';

const AcercaDe = () => {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '900px', margin: 'auto', padding: '2rem' }} className='sombreadoTitulos'>
        <h1 style={{ fontSize: '2.5rem', color: '#ffffffff', marginBottom: '1rem' }}>Sobre Funkos Lokos</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          En <strong>Funkos Lokos</strong> somos apasionados por las figuras coleccionables que marcan épocas, fandoms y emociones. Nacimos con la idea de reunir en un solo lugar la magia de personajes icónicos del cine, series, videojuegos y cultura pop.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          Desde los clásicos de DC, Star Wars y Dragon Ball, hasta joyitas retro y ediciones limitadas, nuestro catálogo está en constante expansión. Queremos que cada fanático encuentre su figura soñada con solo unos clics.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          Creemos en el coleccionismo como una forma de expresión personal. Por eso, además de vender productos, compartimos historias, curiosidades y novedades del mundo Funko en nuestras redes.
        </p>
        <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#ffffffff' }}>
          ¡Gracias por ser parte de esta comunidad que no para de crecer!
        </p>
      </main>
      <Footer />
    </>
  );
};

export default AcercaDe;