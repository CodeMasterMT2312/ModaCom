import React from 'react';
import Hombre1 from './img/hombre1.jpg';
import MujerModelo from './img/mujermodelo.jpg';
import ninos from './img/ninos.jpg';
import fotoFamiliar from './img/foto_familair.jpg';
import galapagos from './img/galapagos.jpg'
import hombreModelo from './img/hombre_modelo.jpg';
import mujer from './img/mujer.webp';
import parejaNinos from './img/pareja ninos.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stilos/Dashboard.css';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

function Dashboard() {
    return (
        <div>
            <Header />
            <Nav />
            <main>
                {/* Carousel */}
                <div className='carrusel'>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={Hombre1} className="w-50" alt="Modelo Hombre" />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={MujerModelo} className="w-50" alt="Modelo Mujer" />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={ninos} className="w-50" alt="Niños Modelos" />
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


                {/* Espaciador */}
                <div className="espacius">
                    <br />
                </div>

                {/* Historia */}
                <div className="history">
                    <div className="row">
                        <div className="col col-sm-4">
                            <img src={fotoFamiliar} alt="" width="500" height="300" />
                        </div>
                        <div className="col col-sm-4 text-center">
                            <h2>MISION</h2>
                            <h4>
                                Modacon su importancia es unir a las generaciones a través de la pasión por la moda, ofreciendo prendas de alta calidad y diseños atemporales y en tendencia que celebren el legado familiar y el estilo personal.
                            </h4>
                        </div>
                        <div className="col col-sm-4">
                            <img src={galapagos} alt="" width="500" height="300" />
                        </div>
                    </div>
                </div>

                {/* Cuerpo */}
                <div className="cuerpo">
                    <div className="row">
                        <div className="col col-sm-4">
                            <div className="card" style={{ width: '28rem' }}>
                                <img src={hombreModelo} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Una imagen varonil es lo que repesenta, en esta sección puedes buscar las nuevas tendecias ..... </p>
                                    <center><button type="button" className="btn btn-outline-dark">Conocer más</button></center>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-4">
                            <div className="card" style={{ width: '26rem' }}>
                                <img src={mujer} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Un paso más a la belleza, en esta temporada .....</p>
                                    <center><button type="button" className="btn btn-outline-dark">Conocer más</button></center>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-4">
                            <div className="card" style={{ width: '25rem' }}>
                                <img src={parejaNinos} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Nuestros pequeños de la casa se visten en tendecia, en nuestro catálogo puedes encontrar .....</p>
                                    <center><button type="button" className="btn btn-outline-dark">Conocer más</button></center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Dashboard;
