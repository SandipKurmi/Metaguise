import React, { useEffect, useState } from "react";
import "./Metaland.css";

const Metaland = () => {
  const [scale, setScale] = useState(1);
  const [iframeScale, setIframeScale] = useState(1); // Start smaller for iframe to come in on scroll down
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const scaleFactor = 0.005; // Faster scaling factor for main container
  const iframeScaleFactor = 0.008; // Faster scaling factor for iframe
  const transitionDuration = "1s"; // Shorter duration for quicker transition

  useEffect(() => {
    const handleScroll = () => {
      if (!isMouseOver) return;

      const scrollY = window.scrollY;
      const minScale = 0.8;
      const maxScale = 1.2;
      const minIframeScale = 0.8;
      const maxIframeScale = 1.1;
      const scrollDiff = scrollY - prevScrollY;

      let newScale = scale;
      let newIframeScale = iframeScale;

      if (scrollDiff > 0) {
        newScale = Math.min(maxScale, scale + scaleFactor);
        newIframeScale = Math.min(
          maxIframeScale,
          iframeScale + iframeScaleFactor
        );
      } else if (scrollDiff < 0) {
        newScale = Math.max(minScale, scale - scaleFactor);
        newIframeScale = Math.max(
          minIframeScale,
          iframeScale - iframeScaleFactor
        );
      }

      setScale(newScale);
      setIframeScale(newIframeScale);
      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMouseOver, prevScrollY, scale, iframeScale]);

  return (
    <div
      className="metaland-container"
      style={{
        transform: `scale(${scale})`,
        transition: `transform ${transitionDuration} ease`,
      }}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div className="content">
        <h1 className="metaland-text">Experience Metaland</h1>
        <div className="video-container">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/HVRcBLgKIeA?si=a5Tp5rUfG1vr_Mqv"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              transform: `scale(${iframeScale})`,
              transition: `transform ${transitionDuration} ease`,
            }}
          ></iframe>
          <div className="button-container">
            <button className="hover-button">
              <span>Visit Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metaland;
