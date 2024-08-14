import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './stilos/Create.css';

function Forgot() {
    const [data, setData] = useState({
        Email: '',
        newPassword: ''
    });
    const { Name } = useParams();
    const navigate = useNavigate();

    useEffect(() => { }, [Name]);

    function handleChange(e) {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('/Actualizar', data)
            .then((res) => {
                navigate("/");
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="container-custom">
            <div className='d-flex justify-content-end'>
                <Link to='/' className='btn btn-success'>Inicio</Link>
            </div>
            <h2 className="text-center mb-4">Recuperar Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        id="correo"
                        name="Email"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contrasenia" className="form-label">Nueva Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="contrasenia"
                        name="newPassword"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Actualizar Contraseña</button>
                </div>
            </form>
        </div>
    );
}

export default Forgot;
