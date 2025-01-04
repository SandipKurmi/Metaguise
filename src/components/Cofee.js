import React from 'react';
import './Cofee.css';
import bookCover from '../assets/cover.png';


const Cofee = () => {
    return (
        <div className="cofee-container">
            <main className="cofee-content">
                <div className="cofee-section">
                    <h1>Get our Coffee Table Book.</h1>
                    <button className="hover-button"><span>Download</span></button>
                </div>
                <div className="image-section">
                    <img src={bookCover} alt="METAGUISE Odyssey Book Cover" />
                </div>
            </main>
        </div>
    );
}

export default Cofee;