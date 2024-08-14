import React from 'react';
import { Link } from 'react-router-dom';
import './stilos/Nav.css';

function Nav(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="nav-link disabled" to="/dashboard">MODACOM</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/promocion">Promoción</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hombre">Hombre</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mujer">Mujer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ninos">Niños</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">Contáctanos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
