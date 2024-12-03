import React, { useEffect, useRef, useState } from 'react';
import './Team.css'; // Your CSS file
import Team1 from '../assets/Maskgroup.png';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 } // Adjust the threshold as per your requirement
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="container team-container" ref={sectionRef}>
      <div className="row">
        {/* Left part of the container */}
        <div className="col-md-6">
          <div>
            {/* Placeholder content for scrolling effect */}
            <div className="placeholder"></div>

            {/* Scroll section with sliding animation */}
            <div className={`scroll-section-team image-container-team ${isVisible ? 'active' : ''}`}>
              <img
                src={Team1}
                alt="Scroll Animation"
                className={`img-fluid-team slide-in-image ${isVisible ? 'active' : ''}`}
              />
            </div>

            {/* Additional content to scroll through */}
            <div className="placeholder"></div>
          </div>
        </div>

        {/* Right part of the container */}
        <div className="col-md-6">
          <div className={`text-container slide-in-text ${isVisible ? 'active' : ''}`}>
            <h1 className="team-text">Metaguise Snapshot</h1>
            <button className="hover-button"><span>Our Team</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;