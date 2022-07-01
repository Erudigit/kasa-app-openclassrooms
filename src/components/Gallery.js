import '../styles/Gallery.css'
import React, { useState } from "react";

function Gallery(props) {
    const ArrayImg = props.pictures;

    const [count, setCount] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = (ArrayImg.length - 1);
        } else if (newIndex > (ArrayImg.length - 1)) {
            newIndex = 0;
        }
        setCount(newIndex);
    };

    let buttonPrev;
    let buttonNext;

    if (ArrayImg.length > 1) {
        buttonPrev = <button className="prev-btn" onClick={() => updateIndex(count - 1)}>
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
            </svg>
        </button>
        buttonNext = <button className="next-btn" onClick={() => updateIndex(count + 1)}>
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.959961 72.3458L8.03996 79.4258L47.64 39.8258L8.03996 0.22583L0.959961 7.30583L33.48 39.8258L0.959961 72.3458Z" fill="white"/>
            </svg>  
        </button>
    }

    return (
        <><div className="carousel" style={{ transform: `translateX(-${count * 100}%)` }}>
            {ArrayImg.map((image, index) => (
                <div key={index} className="container-img">
                    <img src={image} alt="image carousel" />
                </div>
            ))}
        </div>
        {buttonPrev}
        {buttonNext}
        </>
    )
}

export default Gallery