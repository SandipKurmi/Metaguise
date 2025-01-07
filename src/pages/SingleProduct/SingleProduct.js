import { React, useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Dropdown, ListGroup } from "react-bootstrap";
import { FaYoutube, FaInstagram, FaCube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import "./SingleProduct.css";

const SingleProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { selectedProduct } = location.state || {};

  const [clickedIndex, setClickedIndex] = useState(null);
  const gridRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleImageClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (gridRef.current && !gridRef.current.contains(event.target)) {
        setClickedIndex(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [gridRef]);

  const isLastRow = (index) => {
    return (
      index >=
      selectedProduct.images.length -
        (selectedProduct.images.length % 3 === 0
          ? 3
          : selectedProduct.images.length % 3)
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container main-container">
      <div className="row">
        <div className="col-12">
          <button onClick={() => navigate(-1)} className="back-button">
            <span className="arrow">&larr; Back</span>
          </button>

          {isMobile && (
            <div className="mobile-controls">
              <div className="mobile-row">
                <Dropdown
                  show={showDropdown}
                  onToggle={(isOpen) => setShowDropdown(isOpen)}
                  className="description-dropdown"
                >
                  <Dropdown.Toggle variant="dark" id="description-dropdown">
                    Description
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      {selectedProduct.description.charAt(0).toUpperCase() +
                        selectedProduct.description.slice(1)}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="social-icons">
                  <button className="icon-button">
                    <FaInstagram />
                  </button>
                  <button className="icon-button">
                    <FaYoutube />
                  </button>
                  <button className="icon-button">
                    <FaCube />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Gallery Section occupying col-9 */}
        <div className="col-9 xs-12">
          <div className="image-grid" style={{ maxHeight: "90vh" }}>
            {selectedProduct.images.map((image, index) => (
              <div
                key={index}
                className={`grid-item ${isLastRow(index) ? "last-row" : ""} ${
                  clickedIndex === index ? "active" : ""
                }`}
                onClick={() => {
                  handleImageClick(index);
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/${image}`}
                  className="grid-image"
                  alt={`${selectedProduct.name} view ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Empty Space col-2 */}
        <div className="col-md-3 col-sm-12 sidebar-section">
          <h3 style={{ fontWeight: "bold" }}>
            {selectedProduct.name.charAt(0).toUpperCase() +
              selectedProduct.name.slice(1)}
          </h3>
          <div className="sidebar p-4 bg-darkrounded tw-text-white">
            <ListGroup variant="flush">
              <ListGroup.Item
                action
                variant="dark"
                style={{ fontSize: "14px" }}
              >
                {selectedProduct.description.charAt(0).toUpperCase() +
                  selectedProduct.description.slice(1)}
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <button className="transition-button">
                <span className="icon">
                  <FaYoutube />
                </span>
                <span className="text">
                  <span className="icon">
                    <FaYoutube />
                  </span>
                  See on YouTube
                </span>
              </button>
            </div>
            <div className="col-md-4">
              <button className="transition-button">
                <span className="icon">
                  <FaInstagram />
                </span>
                <span className="text">
                  <span className="icon">
                    <FaInstagram />
                  </span>
                  See on Instagram
                </span>
              </button>
            </div>
            <div className="col-md-4">
              <button className="transition-button">
                <span className="icon">
                  <FaCube />
                </span>
                <span className="text">
                  <span className="icon">
                    <FaCube />
                  </span>
                  Explore AR
                </span>
              </button>
            </div>
          </div>
          <button className="hover-button">
            <span>Build Your Dream</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
