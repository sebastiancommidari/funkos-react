import React, { useState } from 'react';

function FormularioProducto({ onAgregar }) {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        stock: '',
        imagen: '',
        categoria: '',
    });
    const [errores, setErrores] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };


    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }
        if (!producto.precio || producto.precio <= 0) {
            nuevosErrores.precio = 'El precio debe ser mayor a 0.';
        }
        if (!producto.categoria.trim() || producto.categoria.length < 5) {
            nuevosErrores.categoria = 'La categoria debe tener al menos 5 caracteres.';
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validarFormulario()) {
            return;
        }
        onAgregar(producto);
        setProducto({
            nombre: '',
            precio: '',
            stock: '',
            imagen: '',
            categoria: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className='sombreadoTitulos mb-4'>Agregar Producto</h2>
            <div style={{ marginBottom: '0.6rem' }}>
                <label style={{ marginRight: '0.4rem' }}>Nombre:</label>
                <input
                    type="text" name="nombre" value={producto.nombre} onChange={handleChange} required style={{ padding:'5px',marginRight: '0.4rem', width: '100%', maxWidth: '300px', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }}/>
                {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
            </div>
            <div style={{ marginBottom: '0.6rem' }}>
                <label style={{ marginRight: '0.4rem' }}>Precio:</label>
                <input type="number" name="precio" value={producto.precio} onChange={handleChange} required style={{ padding:'5px',marginRight: '0.4rem', width: '100%', maxWidth: '300px', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }}
                    min="0" />
                {errores.precio && <p style={{ color: 'red' }}>{errores.precio}</p>}
            </div>

            <div style={{ marginBottom: '0.6rem' }}>
                <label style={{ marginRight: '0.4rem' }}>Stock:</label>
                <input
                    type="number"
                    name="stock"
                    value={producto.stock || ''}
                    onChange={handleChange}
                    required
                    style={{ padding:'5px',marginRight: '0.4rem', width: '100%', maxWidth: '300px', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }}
                />
                {errores.stock && <p style={{ color: 'red' }}>{errores.stock}</p>}
            </div>
            <div style={{ marginBottom: '0.6rem' }}>
                <label style={{ marginRight: '0.4rem' }}>Imagen URL:</label>
                <input
                    type="text"
                    name="imagen"
                    value={producto.imagen || ''}
                    onChange={handleChange}
                    required
                    style={{ padding:'5px',marginRight: '0.4rem', width: '100%', maxWidth: '300px', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }}
                />
                {errores.imagen && <p style={{ color: 'red' }}>{errores.imagen}</p>}
            </div>
            <div style={{ marginBottom: '0.6rem' }}>
                <label style={{ marginRight: '0.4rem' }}>Categoría:</label>
                <input
                    type="text"
                    name="categoria"
                    value={producto.categoria || ''}
                    onChange={handleChange}
                    required
                    style={{ padding:'5px',marginRight: '0.4rem', width: '100%', maxWidth: '300px', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }}
                />
                {errores.categoria && <p style={{ color: 'red' }}>{errores.categoria}</p>}
            </div>

            <button type="submit" style={{ marginBottom: '2rem' }}>Agregar Producto</button>
        </form>
    );
}

export default FormularioProducto;