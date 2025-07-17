import React, { useState, useContext } from 'react';

import { CartContext } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
const Login = () => {
    const { email, setEmail, password, setPassword, handleSubmit, errors } = useAuth();

    return (
        <>
            <h1 className="sombreadoTitulos" style={{ textAlign: 'center', marginTop: '3rem', fontSize: '2.5rem' }}>
                ¡Bienvenido!
            </h1>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    maxWidth: '400px',
                    margin: 'auto',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label className="sombreadoTitulos" htmlFor="formBasicEmail" style={{ marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        Email address
                    </label>
                    <input
                        id="formBasicEmail"
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            padding: '0.5rem',
                            border: `1px solid ${errors.email ? 'red' : '#ced4da'}`,
                            borderRadius: '0.25rem',
                            marginRight: '0.4rem', backgroundColor: '#f0f0f0', color: '#333'
                        }}
                    />
                    {errors.email && (
                        <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                            {errors.email}
                        </div>
                    )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label className="sombreadoTitulos" htmlFor="formBasicPassword" style={{ marginTop: '0.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        Password
                    </label>
                    <input
                        id="formBasicPassword"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            padding: '0.5rem',
                            border: `1px solid ${errors.password ? 'red' : '#ced4da'}`,
                            borderRadius: '0.25rem',
                            marginRight: '0.4rem', backgroundColor: '#f0f0f0', color: '#333'
                        }}
                    />
                    {errors.password && (
                        <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                            {errors.password}
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    style={{
                        backgroundColor: '#5f3374ff',
                        color: 'white',
                        padding: '0.75rem',
                        border: 'none',
                        borderRadius: '0.25rem',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        marginTop: '0.5rem',
                        marginBottom: '3.5rem',
                    }}
                >
                    Submit
                </button>
            </form>
        </>

    );
};

export default Login;
