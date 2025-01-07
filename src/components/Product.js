import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Product.css";
import Product1 from "../assets/products/coin.jpg";
import Product2 from "../assets/products/sequin.png";
import Product3 from "../assets/products/caskey.jpg";
import Product4 from "../assets/products/shingle.jpg";
import Arrow from "../assets/arrow.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Product = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  gsap.registerPlugin(useGSAP);

  const handleMouseEnter = (e) => {
    const arrow = e.currentTarget.querySelector(".arrow-icon");
    const name = e.currentTarget.querySelector(".product-card p");
    gsap.to(arrow, { x: 40, duration: 0.2, opacity: 1, ease: "bounce.in" });
    gsap.to(name, { x: -10, duration: 0.2 });
  };

  const handleMouseLeave = (e) => {
    const arrow = e.currentTarget.querySelector(".arrow-icon");
    const name = e.currentTarget.querySelector(".product-card p");
    gsap.to(arrow, { x: 0, duration: 0.2, opacity: 0 });
    gsap.to(name, { x: 0, duration: 0.2 });
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const itemWidth = sliderRef.current.offsetWidth / 1.5; // 1.5 items per view
      const newActiveSlide = Math.round(scrollPosition / itemWidth);
      setActiveSlide(newActiveSlide);
    }
  };

  const products = [
    {
      id: 1,
      name: "Metacoin",
      image: Product1,
    },
    {
      id: 2,
      name: "Metasequin",
      image: Product2,
    },
    {
      id: 3,
      name: "Cascading Keys",
      image: Product3,
    },
    {
      id: 4,
      name: "Metashingles",
      image: Product4,
    },
  ];

  return (
    <Container className="top-products-section text-center">
      <h1 className="products-title">Top Products</h1>
      <div className="product-container">
        <div className="desktop-view">
          <Row className="product-row mt-4">
            {products.map((product) => (
              <Col key={product.id} xs={6} md={6} lg={3} className="product-col mb-4">
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="product-card tw-cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <p className="font tw-flex tw-justify-center tw-items-center">
                    <span className="font-span">{product.name}</span>
                    <img src={Arrow} alt="arrow" className="arrow-icon"></img>
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="mobile-view">
          <div 
            className="slider-container" 
            ref={sliderRef}
            onScroll={handleScroll}
          >
            {products.map((product) => (
              <div key={product.id} className="slider-item">
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="product-card tw-cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <p className="font tw-flex tw-justify-center tw-items-center">
                    <span className="font-span">{product.name}</span>
                    <img src={Arrow} alt="arrow" className="arrow-icon"></img>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination-dots">
            {products.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activeSlide ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
      <button className="hover-button">
        <span>See All Products</span>
      </button>
    </Container>
  );
};

export default Product;
