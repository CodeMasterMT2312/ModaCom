import React from 'react';
import './stilos/Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer_derechos">
                <div className="row">
                    <div className="col col-sm-4">
                        <p>Escuela Politecnica Nacional <br /> ESFOT</p>
                    </div>
                    <div className="col col-sm-4">
                        <p className="footer__copy">
                            Todos los derechos reservados &copy; 2024 <br /> Grupo-8
                        </p>
                    </div>
                    <div className="col col-sm-4">
                        <div className="footer__icons">
                            <h6 className="titulo_de_redes">Síguenos en todas nuestras redes sociales</h6>
                            <div className="footer__icon-group">
                                <a href="#" className="footer__icon fab fa-facebook-f"></a>
                                <a href="#" className="footer__icon fab fa-twitter"></a>
                                <a href="#" className="footer__icon fab fa-instagram"></a>
                                <a href="#" className="footer__icon fab fa-tiktok"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
