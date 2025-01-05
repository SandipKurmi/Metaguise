import React, { useState, useRef, useEffect } from "react";
import "./VisionAndMission.css";
import VisionIcon from "../../../assets/about/vision.png";
import MissionIcon from "../../../assets/about/mission.png";

export const VisionAndMission = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  const visions = [
    {
      id: 1,
      icon: VisionIcon,
      title: "Vision",
      description1: `DRV (Shri Deepak Raheja's Vision) serves as the foundation for all
            meta organizations, inspired by the life lessons imparted by our
            founding father.`,
      description2: `This vision emphasizes the mindset that "Anything is Possible" when
            combined with an unbreakable will, unwavering standards, boundless
            energy, incorruptible morals, and an unstoppable aura.`,
    },
    {
      id: 2,
      icon: MissionIcon,
      title: "Mission",
      description1: `DRV (Shri Deepak Raheja's Vision) is the bloodline of all meta organizations, based on the life lessons taught by our founding father specifically focusing on a mindset "Anything is Possible".`,
      description2: `Where the will is unbreakable, standards un-challengeable, energy in-exhaustible, morals un-corruptable and the aura unstoppable.`,
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && sliderRef.current) {
      const handleScroll = () => {
        const { scrollLeft, offsetWidth } = sliderRef.current;
        const itemWidth = offsetWidth * (window.innerWidth <= 640 ? 0.7 : 0.5);
        const index = Math.round(scrollLeft / itemWidth);
        setActiveSlide(index);
      };

      sliderRef.current.addEventListener("scroll", handleScroll);
      return () => sliderRef.current?.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]);

  const handleDotClick = (index) => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.offsetWidth * (window.innerWidth <= 640 ? 0.7 : 0.5);
      sliderRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth"
      });
    }
  };

  if (isMobile) {
    return (
      <div className="vision-mission-container">
        <div className="mobile-slider" ref={sliderRef}>
          {visions.map((vision) => (
            <div key={vision.id} className="mobile-slide">
              <VisionAndMissionCard
                title={vision.title}
                icon={vision.icon}
                description1={vision.description1}
                description2={vision.description2}
              />
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {visions.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${activeSlide === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="vision-mission-container">
      <div className="vision-mission-grid">
        {visions.map((vision) => (
          <VisionAndMissionCard
            key={vision.id}
            title={vision.title}
            icon={vision.icon}
            description1={vision.description1}
            description2={vision.description2}
          />
        ))}
      </div>
    </div>
  );
};

const VisionAndMissionCard = ({ title, icon, description1, description2 }) => {
  return (
    <div className="vision-mission-card">
      <img src={icon} alt={title} className="card-icon" />
      <div className="card-content">
        <h3 className="title">{title}</h3>
        <div className="description">
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
      </div>
    </div>
  );
};
