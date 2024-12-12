import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Product.css';
import Product1 from '../assets/products/coin.jpg';
import Product2 from '../assets/products/sequin.png';
import Product3 from '../assets/products/caskey.jpg';
import Product4 from '../assets/products/shingle.jpg';
import Arrow from '../assets/arrow.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Product = () => {
  gsap.registerPlugin(useGSAP);
  const handleMouseEnter = (e) => {
    const arrow = e.currentTarget.querySelector('.arrow-icon');
    const name = e.currentTarget.querySelector('.product-card p');
    gsap.to(arrow, { x: 40, duration: 0.2, opacity: 1, ease: "bounce.in" });
    gsap.to(name, {x: -10, duration: 0.2})
  };

  const handleMouseLeave = (e) => {
    const arrow = e.currentTarget.querySelector('.arrow-icon');
    const name = e.currentTarget.querySelector('.product-card p');
    gsap.to(arrow, { x: 0, duration: 0.2, opacity: 0 });
    gsap.to(name, {x: 0, duration: 0.2})
  };

  const products = [
    {
      id: 1,
      name: 'Metacoin',
      image: Product1,
    },
    {
      id: 1,
      name: 'Metasequin',
      image: Product2,
    },
    {
      id: 1,
      name: 'Cascading Keys',
      image: Product3,
    },
    {
      id: 1,
      name: 'Metashingles',
      image: Product4,
    },
  ];
  return (
    <Container className='top-products-section text-center'>
      <h1 className='products-title'>Top Products</h1>
      <Row className='product-row mt-4'>
        {products.map((product) => (
          <Col xs={12} md={6} lg={3} className='product-col mb-4'>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='product-card tw-cursor-pointer'
            >
              <img
                src={product.image}
                alt={product.name}
                className='product-image'
              />
              <p className='font tw-flex tw-justify-center tw-items-center'>
                {product.name}
                <img src={Arrow} alt='arrow' className='arrow-icon'></img>
              </p>
            </div>
          </Col>
        ))}
      </Row>
      <button className='hover-button'>
        <span>See All Projects</span>
      </button>
    </Container>
  );
};

export default Product;
