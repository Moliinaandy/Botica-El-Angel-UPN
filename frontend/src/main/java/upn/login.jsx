import React, { useState } from 'react'

function Login({ onLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aquí normalmente llamarías a tu backend (Spring Boot)
        if (username === 'admin' && password === '1234') {
            onLogin() // cambia el estado en App.jsx
        } else {
            alert('Usuario o contraseña incorrectos')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Ingresar</button>
        </form>
    )
}

export default Login

