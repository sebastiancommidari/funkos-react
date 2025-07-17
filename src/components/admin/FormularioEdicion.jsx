import React, { useState, useEffect } from 'react';

function FormularioEdicion({ productoSeleccionado, onActualizar }) {
    const [producto, setProducto] = useState(productoSeleccionado);

    useEffect(()=>{
        setProducto(productoSeleccionado)
    },[productoSeleccionado])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });

    };
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            onActualizar(producto)
        }}>
            <h2 className='sombreadoTitulos mb-4'>Editar Producto</h2>
            <div style={{ marginBottom: '0.6rem' }}>
                <label>ID:</label>
                <input
                    type="number"
                    name="id"
                    value={producto.id || ''}
                    onChange={handleChange}
                    readOnly
                                        style={{ padding:'5px',marginRight: '0.4rem', width: '100%', maxWidth: '80px', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }}

                />
            </div>
            <div style={{ marginBottom: '0.6rem' }}>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={producto.nombre || ''}
                    onChange={handleChange}
                    required
                                        style={{ padding:'5px',  marginRight: '0.4rem', width: '100%', maxWidth: '300px', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }}

                />
            </div>
            <div style={{ marginBottom: '0.6rem' }}>
                <label>Precio:</label>
                <input
                    type="number"
                    name="precio"
                    value={producto.precio || ''}
                    onChange={handleChange}
                    required
                    min="0"
                                        style={{ padding:'5px',marginRight: '0.4rem', width: '100%', maxWidth: '200px', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }}

                />
            </div>
            <div style={{ marginBottom: '0.6rem' }}>
                <label>stock:</label>
                <input
                    type="number"
                    name="stock"
                    value={producto.stock || ''}
                    onChange={handleChange}
                    required
                                        style={{ padding:'5px',marginRight: '0.4rem', width: '100%', maxWidth: '300px', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }}

                />
            </div>
            <div style={{ marginBottom: '0.6rem' }}>
                <label>Imagen URL:</label>
                <input
                    type="text"
                    name="imagen"
                    value={producto.imagen || ''}
                    onChange={handleChange}
                    required
                                        style={{ padding:'5px',marginRight: '0.4rem', width: '100%', maxWidth: '300px', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }}

                />
            </div>
            <div style={{ marginBottom: '0.6rem' }}>
                <label>Categoria:</label>
                <input
                    type="text"
                    name="categoria"
                    value={producto.categoria || ''}
                    onChange={handleChange}
                    required
                                        style={{ padding:'5px',marginRight: '0.4rem', width: '100%', maxWidth: '300px', backgroundColor: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc', color: '#333' }}

                />
            </div>
            <button type="submit" style={{ marginBottom: '2rem' }}>Actualizar Producto</button>
        </form>
    );
}
export default FormularioEdicion;