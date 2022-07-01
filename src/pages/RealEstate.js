import React from "react";
import Collapse from '../components/Collapse.js';
import Gallery from '../components/Gallery.js';
import { useParams } from "react-router-dom";
import Properties from '../data/data.json';
import '../styles/RealEstate.css' 

function RealEstate() {

    var oldActivePage = document.querySelector('.active-link')
    if (oldActivePage) {
        oldActivePage.classList.remove("active-link");
    }

    const params = useParams().estateId;

    function b(idToSearch) {
        return Properties.filter(item => {
          return item.id === idToSearch
        })
    };
    
    const Estate = b(params)[0]

    function setColor(index) {
        if (index <= Estate.rating) {
            return "#FF6060"
        } else {
            return "#E3E3E3"
        }
    }


    return (
        <main>
            <div className="gallery">
                <Gallery pictures={Estate.pictures} />
            </div>
            <div className="top-part">
                <div className="left-part">
                    <div className="details">
                        <h1>{Estate.title}</h1>
                        <p>{Estate.location}</p>
                    </div>
                    <div className="tag-part">
                        {Estate.tags.map((tag, index) => (
                        <div className="tag" key={index}>
                            <p>{tag}</p>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="right-part">
                    <div className="user-part">
                        <p>{Estate.host.name}</p>
                        <div className="container-img">
                            <img className="host-picture" src={Estate.host.picture} alt="host picture" />
                        </div>
                    </div>
                    <div className="rate-part">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={setColor(1)} />
                        </svg>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={setColor(2)} />
                        </svg>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={setColor(3)} />
                        </svg>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={setColor(4)}/>
                        </svg>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={setColor(5)}/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="collapse-part">
                <div className="left-part">
                    <Collapse title='Description' description={Estate.description} />
                </div>
                <div className="right-part">
                    <Collapse title='Amenities' description={Estate.Amenities} />
                </div>
            </div>
        </main>
    );
}

export default RealEstate;