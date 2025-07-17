import React, { useState, useEffect, useContext } from "react";
import FormularioProducto from "../components/admin/FormularioProducto";
import FormularioEdicion from "../components/admin/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import './styleAdmin.css';


const Admin = () => {

    const { setIsAuth } = useContext(CartContext)

    const {
        productos,
        loading,
        open,
        setOpen,
        openEditor,
        setOpenEditor,
        seleccionado,
        setSeleccionado,
        agregarProducto,
        actulizarProducto,
        eliminarProducto,
    } = useContext(AdminContext)

    const navigate = useNavigate()

    return (
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <nav>
                        <ul className="nav">
                            <li className="navItem">
                                <button className="navButton sombreadoTitulos" onClick={() => {
                                    setIsAuth(false);
                                    navigate('/');
                                    localStorage.removeItem('isAuth');
                                }}>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </li>
                            <li className="navItem sombreadoTitulos">
                                <a href="/admin">Admin</a>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="title sombreadoTitulos">Panel Administrativo</h1>

                    <button
                        onClick={() => setOpen(true)}
                        style={{ marginBottom: '2rem' }}
                    >
                        Agregar producto nuevo
                    </button>
                    {open && (<FormularioProducto onAgregar={agregarProducto} />)}
                    {openEditor && (<FormularioEdicion productoSeleccionado={seleccionado} onActualizar={actulizarProducto} />)}

                    <ul className="list">
                        {productos.map((product) => (
                            <li key={product.id} className="listItem">
                                <img
                                    src={product.imagen}
                                    alt={product.nombre}
                                    className="listItemImage"
                                />
                                <span>{product.nombre}</span>
                                <span>${product.precio}</span>
                                <div>
                                    <button
                                        className="editButton"
                                        onClick={() => {
                                            setOpenEditor(true);
                                            setSeleccionado(product);
                                            window.scrollTo({ top: 100, behavior: 'smooth' });
                                        }}
                                    >
                                        Editar
                                    </button>

                                    <button className="deleteButton" onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Admin;