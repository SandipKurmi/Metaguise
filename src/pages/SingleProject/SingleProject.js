import { React, useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { FaYoutube, FaInstagram, FaCube } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import "./SingleProject.css";

const SingleProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedProject } = location.state || {};

  const [clickedIndex, setClickedIndex] = useState(null);
  const [contentToRender, setContentToRender] = useState([]);
  const gridRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(activeButton === index ? null : index);
  };

  const categories = Array.from(
    new Set(
      selectedProject.images
        .map((item) =>
          item.split("/")[4] !== "night" ? item.split("/")[4] : null
        )
        .filter((item) => item)
    )
  );

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
      selectedProject.images.length -
        (selectedProject.images.length % 3 === 0
          ? 3
          : selectedProject.images.length % 3)
    );
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    setContentToRender(
      darkMode
        ? selectedProject.images.filter(
            (item) => item.split("/")[4] === "night"
          )
        : selectedProject.images
    );
  }, [darkMode, selectedProject.images]); // Runs when darkMode or images change

  function filterImagesByCategory(category) {
    setSelectedCategory(category);
  }

  // Filter images based on selected category
  const filteredImages = selectedCategory
    ? contentToRender.filter((img) => img.includes(selectedCategory))
    : contentToRender;

  useEffect(() => {
    if (location.pathname === "/single-project") {
      // Hide vertical scroll for the gallery page
      document.body.style.overflowY = "hidden";
    } else {
      // Restore default overflow for other pages
      document.body.style.overflowY = "auto";
    }

    // Cleanup to ensure no lingering styles
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [location]);
  return (
    <div className="container main-container">
      <div className="row">
        <div className="col-12">
          <button onClick={() => navigate(-1)} className="back-button">
            <span className="arrow">&larr; Back</span>
          </button>
        </div>
        {/* Gallery Section occupying col-9 */}
        <div className="col-9 xs-12">
          <div className="image-grid">
            {filteredImages.map((image, index) => (
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
                  alt={`Project item ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Empty Space col-2 */}
        <div className="col-md-3 col-sm-12 sidebar-section">
          <h3 style={{ fontWeight: "bold" }}>
            {selectedProject.name.charAt(0).toUpperCase() +
              selectedProject.name.slice(1)}
          </h3>
          <div
            className="sidebar p-4 bg-darkrounded"
            style={{ marginBottom: "10px" }}
          >
            <ListGroup variant="flush">
              <ListGroup.Item
                action
                variant="dark"
                className={selectedCategory === "" ? "highlight" : "dim"}
                onClick={() => filterImagesByCategory("")}
              >
                All
              </ListGroup.Item>
              {categories.map((category, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  variant="dark"
                  onClick={() => filterImagesByCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="header-container">
              <p className="time-text">Time</p>
              <div
                className={`switch ${darkMode ? "active" : ""}`}
                onClick={toggleTheme}
              >
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={toggleTheme}
                />
                <span className="slider">
                  <FaSun className="icon sun" />
                  <FaMoon className="icon moon" />
                </span>
              </div>
            </div>
          </div>
          <div className="button-row" style={{ padding: "5px" }}>
            <div className="col-md-4">
              <button
                className={`transition-button ${
                  activeButton === 0 ? "active" : ""
                }`}
                onClick={() => handleButtonClick(0)}
              >
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
              <button
                className={`transition-button ${
                  activeButton === 1 ? "active" : ""
                }`}
                onClick={() => handleButtonClick(1)}
              >
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
              <button
                className={`transition-button ${
                  activeButton === 2 ? "active" : ""
                }`}
                onClick={() => handleButtonClick(2)}
              >
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
          <button className="dream-button">
            <span>Build Your Dream</span>
          </button>{" "}
        </div>
      </div>
      <Footer className="single-project-footer" />
    </div>
  );
};

export default SingleProject;
