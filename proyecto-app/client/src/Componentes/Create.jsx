import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './stilos/Create.css';

function Create() {
    const [values, setValues] = useState({
        Name: '',
        LastName: '',
        Email: '',
        password: '',
        Age: '',
        Telf: '',
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!values.Name) newErrors.Name = 'El nombre es requerido.';
        if (!values.LastName) newErrors.LastName = 'El apellido es requerido.';
        
        // Validación de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!values.Email || !emailRegex.test(values.Email)) newErrors.Email = 'Correo electrónico inválido.';
        
        if (!values.password) newErrors.password = 'La contraseña es requerida.';
        
        // Validación de edad
        if (values.Age < 0) newErrors.Age = 'La edad no puede ser negativa.';
        
        if (!values.Telf) newErrors.Telf = 'El teléfono es requerido.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            axios.post('/Registrarse', values)
                .then((res) => {
                    navigate('/');
                    console.log(res);
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div className="containerxd">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="form-container">
                        <div className='d-flex justify-content-start'>
                            <Link to='/' className='btn btn-success'>Inicio</Link>
                        </div>
                        <h2 className="text-center mb-4">Crear Cuenta</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="nombre" 
                                    name="Name" 
                                    value={values.Name} 
                                    onChange={handleChange} 
                                />
                                {errors.Name && <div className="text-danger">{errors.Name}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="apellido" className="form-label">Apellido</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="apellido" 
                                    name="LastName" 
                                    value={values.LastName} 
                                    onChange={handleChange} 
                                />
                                {errors.LastName && <div className="text-danger">{errors.LastName}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">Correo electrónico</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="correo" 
                                    name="Email" 
                                    value={values.Email} 
                                    onChange={handleChange} 
                                />
                                {errors.Email && <div className="text-danger">{errors.Email}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contrasenia" className="form-label">Contraseña</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="contrasenia" 
                                    name="password" 
                                    value={values.password} 
                                    onChange={handleChange} 
                                />
                                {errors.password && <div className="text-danger">{errors.password}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="edad" className="form-label">Edad</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="edad" 
                                    name="Age" 
                                    value={values.Age} 
                                    min="0" 
                                    onChange={handleChange} 
                                />
                                {errors.Age && <div className="text-danger">{errors.Age}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Teléfono</label>
                                <input 
                                    type="tel" 
                                    className="form-control" 
                                    id="telefono" 
                                    name="Telf" 
                                    value={values.Telf} 
                                    onChange={handleChange} 
                                />
                                {errors.Telf && <div className="text-danger">{errors.Telf}</div>}
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Crear Cuenta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
