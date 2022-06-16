import React from "react";
import Banner from '../components/Banner.js';
import Card from '../components/Card.js';
import Properties from '../data/data.json';
import ImgHomeBckgnd from '../assets/img-bckgrnd-homepage.png'

function Home() {

    return (
        <main>
            <Banner sizeBanner='small' img={ImgHomeBckgnd} />
            <div class="listing-properties">
                {Properties.map((property, index) => (
                <Card property={property} index={index} />
                ))}
            </div>
        </main>
    );
}

export default Home;