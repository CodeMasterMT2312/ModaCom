import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './stilos/Create.css';

function Login() {
    const [user, setUser] = useState({ Email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/Login', user)
            .then((res) => {
                if (res.data.success) {
                    if (user.Email === 'admin@admin.com' && user.password === 'admin123') {
                        navigate('/admin'); // Redirige al componente Admin
                    } else {
                        navigate('/dashboard'); // Redirige al dashboard para otros usuarios
                    }
                } else {
                    console.log(res.data.message);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col text">
                    <h1>MODACOM</h1><br />
                    <p>Vive la mejor experiencia</p>
                    <p>Que nadie te cuente cómo vestir</p>
                </div>
                <div className="col login">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="Email" className="form-label" style={{ fontWeight: 'bold', color: 'Black' }}>Correo Electrónico</label>
                        <input type="email" name="Email" placeholder="Correo Electrónico" className="form-control" required onChange={handleChange} /><br />
                        <label htmlFor="password" className="form-label" style={{ fontWeight: 'bold', color: 'Black' }}>Contraseña</label>
                        <input type="password" name="password" placeholder="Contraseña" className="form-control" required onChange={handleChange} /><br />
                        <button type="submit" className="btn btn-success init">Iniciar Sesión</button><br />
                        <p className="olcontra"><Link className="olcontraA" to="/Actualizar">¿Olvidaste tu contraseña?</Link></p>
                        <div className="line"></div><br />
                        <Link to="/Registrarse" className="btn btn-primary crear">Crear Cuenta</Link><br />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
