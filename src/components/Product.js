import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Product.css';
import Product1 from '../assets/products/coin.jpg';
import Product2 from '../assets/products/sequin.png';
import Product3 from '../assets/products/caskey.jpg';
import Product4 from '../assets/products/shingle.jpg';
import Arrow from '../assets/arrow.png';

const Product = () => {
  return (
      <Container className="top-products-section text-center">
        <h1 className="products-title">Top Products</h1>
        <Row className="product-row mt-4">
          <Col xs={12} md={6} lg={3} className="product-col mb-4">
            <div className="product-card">
              <img src={Product1} alt="Metacoin" className="product-image" />
              <p className="product-name">Metacoin <img src={Arrow} alt="arrow"
                className="arrow-icon"></img></p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="product-col mb-4">
            <div className="product-card">
              <img src={Product2} alt="Metasequin" className="product-image" />
              <p className="product-name">Metasequin <img src={Arrow} alt="arrow"
                className="arrow-icon"></img></p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="product-col mb-4">
            <div className="product-card">
              <img src={Product3} alt="Cascading Keys" className="product-image" />
              <p className="product-name">Cascading Keys <img src={Arrow} alt="arrow"
                className="arrow-icon"></img></p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="product-col mb-4">
            <div className="product-card">
              <img src={Product4} alt="Metashingles" className="product-image" />
              <p className="product-name">Metashingles   <img src={Arrow} alt="arrow" className="arrow-icon"></img></p>
            </div>
          </Col>
        </Row>
        <button className="hover-button"><span>See All Projects</span></button>
      </Container>
  );
};

export default Product;
