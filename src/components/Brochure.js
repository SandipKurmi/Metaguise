import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Brochure.css';
import Metaform from '../assets/Brochures/formopen.jpg';
import Metafunction from '../assets/Brochures/functionopen.jpg';
import Metaparametric from '../assets/Brochures/parametricopen.jpg';
import Metasurface from '../assets/Brochures/patinaopen.jpg';

const Brochure = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const gallery = [
        { src: Metaform, name: 'Metaform' },
        { src: Metafunction, name: 'Metafunction' },
        { src: Metaparametric, name: 'Metaparametric' },
        { src: Metasurface, name: 'Metasurface' }
    ];

    return (
        <div className="container">
            <h1 className="brochure-title">Our Brochures</h1>
            <div className="row">
            <div className="col-md-1"></div>
                <div className="col-md-10">
                {gallery.map((item, index) => (
                    <div
                        key={index}
                        className={`grid-item ${hoveredIndex === index ? 'col-md-6' : 'col-md-2'} `}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="image-brochure-container">
                            <img src={item.src}  alt={item.name}  className="img-fluid" />
                            <div className="brochure-overlay">{item.name} </div>
                        </div>
                    </div>
                ))}
                </div>
                <div className="col-md-1"></div>
                </div>
            </div>
    );
};

export default Brochure;
