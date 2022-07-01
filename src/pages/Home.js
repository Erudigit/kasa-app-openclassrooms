import React from "react";
import Banner from '../components/Banner.js';
import Card from '../components/Card.js';
import Properties from '../data/data.json';
import ImgHomeBckgnd from '../assets/img-bckgrnd-homepage.png'
import { Link } from "react-router-dom";
import '../styles/Home.css'

function Home() {

    var oldActivePage = document.querySelector('.active-link')
    if (oldActivePage) {
        oldActivePage.classList.remove("active-link");
    }
    
    var activePage = document.querySelector('.home-page a');
    if (activePage) {
        activePage.classList.add("active-link");
    }

    return (
        <main>
            <Banner Title='Home, anywhere and everywhere' sizeBanner='small' img={ImgHomeBckgnd} />
            <div className="listing-properties">
                {Properties.map((property, index) => (
                <Link to={`/real-estates/${property.id}`} style={{ backgroundImage: `url(${property.cover})` }} key={index}>
                    <Card property={property} />
                </Link>
                ))}
            </div>
        </main>
    );
}

export default Home;