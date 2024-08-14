import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import './stilos/offerStyle.css';
// Importar imágenes
import camisetacina from "./img/camisetacina.webp";
import camisetamy from "./img/camisetamy.webp";
import pajamasanrio from "./img/pajamasanrio.webp";
import denimpants from "./img/denimpants.webp";
import camisetalvl10 from "./img/camisetalvl10.jfif";
import pajamadino from "./img/pajamadino.webp";
import sweatfortnite from "./img/sweatfortnite.jfif";
import pawout from "./img/pawout.webp";
import toddler from "./img/toddler.webp";

function CatalogoNinos() {
    const productos = [
        { img: camisetacina, title: 'Camiseta Cinnamonroll', price: '$14.02' },
        { img: camisetamy, title: 'Camiseta MyMelody', price: '$12.35' },
        { img: pajamasanrio, title: 'Pijama Sanrio', price: '$30.52' },
        { img: denimpants, title: 'Pantalones Denim', price: '$11.90' },
        { img: camisetalvl10, title: 'Camiseta "Level 10 unlocked"', price: '$9.21' },
        { img: pajamadino, title: 'Pijama Dinosaurio', price: '$5.99' },
        { img: sweatfortnite, title: 'Sudadera "Fortnite"', price: '$23.57' },
        { img: pawout, title: 'Conjunto "Paw Patrol"', price: '$15.63' },
        { img: toddler, title: 'Conjunto para Bebés', price: '$6.18' },
    ];

    return (
        <div>
            <Header />
            <Nav />
            <section className="catalogo">
                <div className="container">
                    <h2 className="text-center mb-5">Catálogo para Niños</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {productos.map((producto, index) => (
                            <div className="col" key={index}>
                                <div className="card h-100">
                                    <img src={producto.img} className="card-img-top" alt={`Imagen del producto ${index + 1}`} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{producto.title}</h5>
                                        <p className="card-text">Precio: {producto.price}</p>
                                        <a href="#" className="btn btn-primary mt-auto">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default CatalogoNinos;
