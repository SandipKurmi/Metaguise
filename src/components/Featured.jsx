import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import './Features.css';
import 'react-multi-carousel/lib/styles.css';
import Featured1 from '../assets/Featured/f1.png';
import Featured2 from '../assets/Featured/f2.png';
import Featured3 from '../assets/Featured/f3.png';
import Featured4 from '../assets/Featured/f4.png';
import Featured5 from '../assets/Featured/f5.png';
import Featured6 from '../assets/Featured/f6.png';
import Featured7 from '../assets/Featured/f7.png';
import Featured8 from '../assets/Featured/f8.png';

import styled from 'styled-components';

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` },
}))`
  position: relative;
  width: 100%;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` },
}))`
  position: absolute;
  height: 100%;
  will-change: transform;
`;

const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (ref, setTranslateX) => {
  window.addEventListener('scroll', () => {
    const offsetTop = -ref.current.offsetTop;
    setTranslateX(offsetTop);
  });
};

const Featured = () => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener('resize', resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // Number of items to show on large screens
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2, // Number of items to show on tablet screens
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Number of items to show on mobile screens
    },
  };

  const images = [
    Featured1,
    Featured2,
    Featured3,
    Featured4,
    Featured5,
    Featured6,
    Featured7,
    Featured8,
  ];

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {images.map((image, index) => (
            <div className='featured-image' key={index}>
              <img src={image} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
};

export default Featured;
