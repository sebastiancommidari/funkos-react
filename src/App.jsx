import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import Contacto from './views/Contacto'
import AcercaDe from './views/AcercaDe'
import Galeria from './views/Galeria'
import NotFound from './views/NotFound'
import DetallesProductos from './components/DetallesProductos'
import Admin from './views/Admin'
import Login from './views/Login'
import RutasProtegidas from './routes/RutasProtegidas'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'

function App() {

  const { isAuthenticated } = useContext(CartContext);

  return (

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/acercade" element={<AcercaDe />} />

        <Route path="/galeria" element={<Galeria />} />

        <Route path="/galeria/:id" element={<DetallesProductos />} />

        <Route path="/contacto" element={<Contacto />} />

        <Route path="/admin" element={<RutasProtegidas isAuthenticated={isAuthenticated}>
          <Admin />
        </RutasProtegidas>} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

  )
}

export default App
