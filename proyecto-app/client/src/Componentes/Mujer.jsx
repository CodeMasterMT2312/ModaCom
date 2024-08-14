import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import './stilos/offerStyle.css';
import img1 from './img/gunittee.webp';
import img2 from './img/aprioriblouse.webp';
import img3 from './img/kardiganknitted.webp';
import img4 from './img/slacksstraight.webp';
import img5 from './img/Pantalones capri.webp';
import img6 from './img/shortsjean.webp';
import img7 from './img/twentyeightshoes.webp';
import img8 from './img/platformsneakers.jpg';
import img9 from './img/protegesneakers.jpg';

function CatalogoMujeres(){
    const productos = [
        { img: img1, title: 'Camiseta G-Unit', price: '$25.00' },
        { img: img2, title: 'Blusa Apriori', price: '$9.72' },
        { img: img3, title: 'Cardigan Tejido', price: '$10.72' },
        { img: img4, title: 'Pantalones Lisos', price: '$7.28' },
        { img: img5, title: 'Pantalones Capri', price: '$13.21' },
        { img: img6, title: 'Short Jeans', price: '$5.98' },
        { img: img7, title: 'Tacones', price: '$28.57' },
        { img: img8, title: 'Zapatillas Altas', price: '$25.63' },
        { img: img9, title: 'Zapatillas Protege', price: '$30.00' },
    ];

    return (
        <div>
            <Header />
            <Nav />
            <section className="catalogo">
                <div className="container">
                    <h2 className="text-center mb-5">Catálogo para Mujeres</h2>
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
            <Footer/>
        </div>
    );
}

export default CatalogoMujeres;
