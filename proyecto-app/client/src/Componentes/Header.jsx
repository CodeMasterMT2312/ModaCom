import React from 'react';
import { Link } from 'react-router-dom';
import './stilos/Header.css';
import tri from './img/latri.png';
import logo from './img/logo.jpg';

function Header() {
    return (
        <header>
            {/* Imagen de fondo */}
            <div className="imagen">
                <img src={tri} alt="Banner de la TRI" />
            </div>

            {/* Encabezado */}
            <div className="encabezado">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        {/* Columna con el logo */}
                        <div className="col-md-3">
                            <Link to="/dashboard">
                                <img 
                                    src={logo} 
                                    alt="Logo MODACON" 
                                    width="100px" 
                                    height="100px" 
                                />
                            </Link>
                        </div>
                        {/* Columna con el título y el eslogan */}
                        <div className="col-md-6 text-center">
                            <h1 className="titulo">MODACOM</h1>
                            <h6 className="letras">
                                Vive la mejor experiencia y que nadie te cuente de como vestir
                            </h6>
                        </div>
                        {/* Columna con el botón de cerrar sesión */}
                        <div className="col-md-3 text-end">
                            <Link to="/">
                                <button className="btn btn-logout">
                                    Cerrar Sesión
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
