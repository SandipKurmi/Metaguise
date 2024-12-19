import { React, useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { FaYoutube, FaInstagram, FaCube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer'; 
import './SingleProduct.css';


const SingleProduct = () => {

  const location = useLocation();
  const { selectedProduct } = location.state || {};

  const [clickedIndex, setClickedIndex] = useState(null);
  const gridRef = useRef < HTMLDivElement > (null)

  const handleImageClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index)
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (gridRef.current && !gridRef.current.contains(event.target)) {
        setClickedIndex(null)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, []);

  const isLastRow = (index) => {
    return index >= selectedProduct.images.length - (selectedProduct.images.length % 3 === 0 ? 3 : selectedProduct.images.length % 3);
  };

  const navigate = useNavigate();
  return (
    <div className="container main-container">
      <div className="row tw-min-h-[80vh]">
      {/* <div claassName="col-12">
        <button
          onClick={() => navigate(-1)}
          className="back-button"
        >
          <span className="arrow">&larr;</span> Back
        </button>
      </div> */}
        {/* Gallery Section occupying col-9 */}
        <div className="col-9 xs-12">
          <div className="image-grid">
            {selectedProduct.images.map((image, index) => (
              <div
                key={index}
                className={`grid-item ${isLastRow(index) ? 'last-row' : ''} ${clickedIndex === index ? 'active' : ''}`}
                onClick={() => {
                  handleImageClick(index)
                }}
              >
                <img src={`${process.env.PUBLIC_URL}/${image}`} className="grid-image" />
              </div>
            ))}
          </div>
        </div>
        {/* Empty Space col-2 */}
        <div className="col-md-3 col-sm-12 sidebar-section" >
          <h3 style={{ fontWeight: 'bold' }}>{selectedProduct.name.charAt(0).toUpperCase() + selectedProduct.name.slice(1)}</h3>
          <div className="sidebar p-4 bg-darkrounded tw-text-white">
            <ListGroup variant="flush">
              <ListGroup.Item action variant="dark" style={{ fontSize: '14px' }}>{selectedProduct.description.charAt(0).toUpperCase() + selectedProduct.description.slice(1)}</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="row" style={{padding:'5px'}}>
            <div className="col-md-4">
              <button className="transition-button">
                <span className="icon">
                  <FaYoutube />
                </span>
                <span className="text"><span className="icon">
                  <FaYoutube />
                </span>See on YouTube</span>
              </button>
            </div>
            <div className="col-md-4">
              <button className="transition-button">
                <span className="icon">
                  <FaInstagram />
                </span>
                <span className="text"><span className="icon">
                  <FaInstagram />
                </span>See on Instagram</span>
              </button>
            </div>
            <div className="col-md-4">
              <button className="transition-button">
                <span className="icon">
                  <FaCube />
                </span>
                <span className="text"><span className="icon">
                  <FaCube />
                </span>Explore AR</span>
              </button>
            </div>
          </div>
          <button class="dream-button"><span>Build Your Dream</span></button>        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;