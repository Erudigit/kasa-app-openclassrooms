import React from "react";
import Collapse from '../components/Collapse.js';
import '../styles/About.css';
import Banner from '../components/Banner.js';
import ImgHomeBckgnd from '../assets/bckgrnd-about.png';

function About() {

    var oldActivePage = document.querySelector('.active-link')
    if (oldActivePage) {
        oldActivePage.classList.remove("active-link");
    }

    var activePage = document.querySelector('.about-page a');
    if (activePage) {
        activePage.classList.add("active-link");
    }

    return (
        <main>
            <Banner sizeBanner='small' img={ImgHomeBckgnd} />
            <div className="collapse-about">
                <Collapse title='Reliability' description="The ads posted on Kasa guarantee total reliability of the place. The photos are consistent with the accommodations, and all information is regularly checked by our teams." />
                <Collapse title='Respect' description="Caring is one of the founding values of Kasa. Any discriminatory behavior or disruptive behavior in the neighborhood will result in exclusion from our platform." />
                <Collapse title='Service' description="Our teams are at your disposal to provide you with the best experience. Please do not hesitate to contact us if you have any questions." />
                <Collapse title='Safty' description="Safety is Kasa's priority. Both for our guests and for travelers, each accommodation is compliant with the safety criteria established by our services. By leaving a note for both the host and the tenant, our teams can verify that the standards are respected. We also organize workshops on home security for our guests." />
            </div>
        </main>
    );
}

export default About;