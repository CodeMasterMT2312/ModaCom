import React, { useState, useEffect } from 'react';
import verano from './img/verano.jpg';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import './stilos/offerStyle.css';

function SeasonOffers() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        // Fetch offers from the API
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setOffers(data))
            .catch(error => console.error("Error fetching offers:", error));
    }, []);

    return (
        <div>
            <Header />
            <Nav />
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="placeholder1">
                            {/* Imagen grande */}
                            <img src={verano} alt="Imagen Grande" />
                        </div>
                    </div>
                </div>
                <div className="season-offers">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="chiller-font text-chiller">OFERTAS DE TEMPORADA</h2>
                        </div>
                    </div>
                    <div className="row mt-4">
                        {offers.map(offer => (
                            <div key={offer.ID} className="col-md-4 text-center">
                                <div className="card">
                                    <div className="placeholder1">
                                        {/* Imagen de oferta */}
                                        <img 
                                            src={`/api/products/${offer.ID}/image`} 
                                            alt={`Imagen ${offer.ID}`} 
                                        />
                                    </div>
                                    <div className="card-body">
                                        <div className="price chiller-font text-chiller">
                                            <span style={{ textDecoration: 'line-through' }}>{offer.PrecioAnt}$</span> {offer.PrecioPromo}$
                                        </div>
                                        <button className="btn btn-comprar chiller-font">COMPRAR</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SeasonOffers;
