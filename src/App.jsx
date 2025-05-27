import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contacto from './views/Contacto'
import AcercaDe from './views/AcercaDe'
import Galeria from './views/Galeria'
import NotFound from './views/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (

      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/acercade" element={<AcercaDe/>} />
            <Route path="/galeria" element={<Galeria/>} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
      </Router>
  
  )
}

export default App
