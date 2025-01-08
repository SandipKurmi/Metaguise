import "./Features.css";
import Featured1 from "../assets/Featured/f1.png";
import Featured2 from "../assets/Featured/f2.png";
import Featured3 from "../assets/Featured/f3.png";
import Featured4 from "../assets/Featured/f4.png";
import Featured5 from "../assets/Featured/f5.png";
import Featured6 from "../assets/Featured/f6.png";
import Featured7 from "../assets/Featured/f7.png";
import Featured8 from "../assets/Featured/f8.png";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

const Features = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const featuredImages = [
    Featured1,
    Featured2,
    Featured3,
    Featured4,
    Featured5,
    Featured6,
    Featured7,
    Featured8,
  ];
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const itemWidth = sliderRef.current.offsetWidth;
      const newActiveSlide = Math.round(scrollPosition / itemWidth);
      setActiveSlide(newActiveSlide);
    }
  };

  useGSAP(() => {
    const imagesDiv = document.querySelector(".featured-row");
    if (!imagesDiv) return; // Guard clause for mobile view
    
    let imagesDivWidth = 2064;
    let amountToScroll = imagesDivWidth - window.innerWidth;
    amountToScroll += 80;

    const tween = gsap.to(imagesDiv, {
      x: -amountToScroll,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".featured-section",
      start: "top 20%",
      end: "+=" + amountToScroll,
      pin: true,
      animation: tween,
      scrub: 1,
    });
  });

  return (
    <>
      {/* Desktop View */}
      <div className="featured-section desktop-view">
        <div className="featured-projects-section text-center">
          <div className="featured-text">Featured Projects</div>
          <div className="featured-row-wrapper">
            <div
              className="featured-row"
              style={{
                transform: `translateX(-${26}px)`,
                transition: "transform 0.5s ease",
              }}
            >
              {featuredImages.map((image, index) => (
                <div className="featured-image" key={index}>
                  <img src={image} alt={`Project ${index + 1}`} />
                  <div className="icon-overlay">
                    <MdArrowOutward size={30} color="white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="hover-button" aria-label="See all projects">
            <span>See All Projects</span>
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="featured-section mobile-view">
        <div className="featured-projects-section text-center">
          <div className="featured-text">Featured Projects</div>
          <div 
            className="slider-container"
            ref={sliderRef}
            onScroll={handleScroll}
          >
            {featuredImages.map((image, index) => (
              <div className="slider-item" key={index}>
                <div className="featured-image">
                  <img src={image} alt={`Project ${index + 1}`} />
                  <div className="icon-overlay">
                    <MdArrowOutward size={30} color="white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination-dots">
            {featuredImages.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activeSlide ? 'active' : ''}`}
              />
            ))}
          </div>
          <button className="hover-button" aria-label="See all projects">
            <span>See All Projects</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Features;
