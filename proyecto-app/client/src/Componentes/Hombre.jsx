import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import pro1 from './img/pro1.webp';
import pro2 from './img/pro2.avif';
import pro3 from './img/pro3.jpg';
import pro4 from './img/pro4.jpg';
import pro5 from './img/pro5.webp';
import pro6 from './img/pro6.webp';
import pro7 from './img/pro7.webp';
import pro8 from './img/pro8.webp';
import pro9 from './img/pro9.webp';
import './stilos/offerStyle.css';

function CatalogoHombres(){
    return (
        <div>
            <Header />
            <Nav />
            <section className="catalogo">
                <div className="container">
                    <h2 className="text-center mb-5">Catálogo para hombres</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {/* Primera fila de tarjetas */}
                        {/* Tarjeta 1 */}
                        <div className="col">
                            <div className="card h-100">
                                <img src={pro1} className="card-img-top" alt="Imagen del producto" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Camiseta Long Sleeve</h5>
                                    <p className="card-text">Precio: $29.99</p>
                                    <a href="#" className="btn btn-primary mt-auto">Comprar</a>
                                </div>
                            </div>
                        </div>
                        {/* Tarjeta 2 */}
                        <div className="col">
                            <div className="card h-100">
                                <img src={pro2} className="card-img-top" alt="Imagen del producto" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Camiseta de Algodon</h5>
                                    <p className="card-text">Precio: $14.99</p>
                                    <a href="#" className="btn btn-primary mt-auto">Comprar</a>
                                </div>
                            </div>
                        </div>
                        {/* Tarjeta 3 */}
                        <div className="col">
                            <div className="card h-100">
                                <img src={pro3} className="card-img-top" alt="Imagen del producto" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Camiseta manga corta</h5>
                                    <p className="card-text">Precio: $14.99</p>
                                    <a href="#" className="btn btn-primary mt-auto">Comprar</a>
                                </div>
                            </div>
                        </div>
                        {/* Segunda fila de tarjetas */}
                        {/* Tarjeta 4 */}
                        <div className="col">
                            <div className="card h-100">
                                <img src={pro4} className="card-img-top" alt="Imagen del producto" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Jeans Negros</h5>
                                    <p className="card-text">Precio: $24.99</p>
                                    <a href="#" className="btn btn-primary mt-auto">Comprar</a>
                                </div>
                            </div>
                        </div>
                        {/* Tarjeta 5 */}
                        <div className="col">
                            <div className="card h-100">
                                <img src={pro5} className="card-img-top" alt="Imagen del producto" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Vaqueros</h5>
                                    <p className="card-text">Precio: $24.99</p>
                                    <a href="#" className="btn btn-primary mt-auto">Comprar</a>
                                </div>
                            </div>
                        </div>
                        {/* Tarjeta 6 */}
                        <div className="col">
                            <div className="card h-100">
                                <img src={pro6} className="card-img-top" alt="Imagen del producto" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Jeans elásticos</h5>
                                    <p className="card-text">Precio: $19.99</p>
                                    <a href="#" className="btn btn-primary mt-auto">Comprar</a>
                                </div>
                            </div>
                        </div>
                        {/* Tercera fila de tarjetas */}
                        {/* Tarjeta 7 */}
                        <div className="col">
                            <div className="card h-100">
                                <img src={pro7} className="card-img-top" alt="Imagen del producto" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Gorra "America"</h5>
                                    <p className="card-text">Precio: $9.99</p>
                                    <a href="#" className="btn btn-primary mt-auto">Comprar</a>
                                </div>
                            </div>
                        </div>
                        {/* Tarjeta 8 */}
                        <div className="col">
                            <div className="card h-100">
                                <img src={pro8} className="card-img-top" alt="Imagen del producto" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Gorra "Light Up"</h5>
                                    <p className="card-text">Precio: $9.99</p>
                                    <a href="#" className="btn btn-primary mt-auto">Comprar</a>
                                </div>
                            </div>
                        </div>
                        {/* Tarjeta 9 */}
                        <div className="col">
                            <div className="card h-100">
                                <img src={pro9} className="card-img-top" alt="Imagen del producto" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Gorra "New Sound"</h5>
                                    <p className="card-text">Precio: $9.99</p>
                                    <a href="#" className="btn btn-primary mt-auto">Comprar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default CatalogoHombres;
