import { React, useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { FaYoutube, FaInstagram, FaCube } from "react-icons/fa";
import { FaSun, FaMoon } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './SingleProject.css';


const SingleProject = () => {

  const location = useLocation();
  const { selectedProject } = location.state || {};

  const [clickedIndex, setClickedIndex] = useState(null);
  const [contentToRender, setContentToRender] = useState([]);
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
    return index >= selectedProject.images.length - (selectedProject.images.length % 3 === 0 ? 3 : selectedProject.images.length % 3);
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    setContentToRender(darkMode ? selectedProject.images.filter((item) => item.split('/')[4] === 'night') : selectedProject.images);
  }, [darkMode]); // Runs every time darkMode updates

  const navigate = useNavigate();
  return (
    <div className="container main-container">
      <div className="row">
        <div claassName="col-12">
          <button
            onClick={() => navigate(-1)}
            className="back-button"
          >
            <span className="arrow">&larr;</span> Back
          </button>
        </div>
        {/* Gallery Section occupying col-9 */}
        <div className="col-9 xs-12">
          <div className="image-grid">
            {contentToRender.map((image, index) => (
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
        <div className="col-md-3 col-sm-12 sidebar-section">
          <h3 style={{ fontWeight: 'bold' }}>Metacoin</h3>
          <div className="sidebar p-4 bg-darkrounded" style={{ marginBottom: '10px' }}>
            <ListGroup variant="flush">
              {/* <ListGroup.Item action variant="dark" style={{color: "#fff"}}>Section</ListGroup.Item> */}
              <ListGroup.Item action variant="dark">
                All
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Metasequin
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Metafin
              </ListGroup.Item>
              <ListGroup.Item action variant="dark">
                Metacassette
              </ListGroup.Item>
              < ListGroup.Item action variant="dark">
                Metapyramid
              </ListGroup.Item >
              < ListGroup.Item action variant="dark">
                Metacoin
              </ListGroup.Item >
              < ListGroup.Item action variant="dark">
                Metacassette Perforated
              </ListGroup.Item >
              < ListGroup.Item action variant="dark">
                Metaflute
              </ListGroup.Item >
              < ListGroup.Item action variant="dark">
                Metacassette Grooved
              </ListGroup.Item >
              < ListGroup.Item action variant="dark">
                Metalouver
              </ListGroup.Item >
              < ListGroup.Item action variant="dark">
                Metaplank
              </ListGroup.Item >
              < ListGroup.Item action variant="dark">
                Metapyramid
              </ListGroup.Item >
              < ListGroup.Item action variant="dark">
                Metashingle
              </ListGroup.Item >
              < ListGroup.Item action variant="dark">
                Metafold
              </ListGroup.Item >
              < ListGroup.Item action variant="dark">
                Solid Panel
              </ListGroup.Item >
              < ListGroup.Item action variant="dark">
                metalouver Grey
              </ListGroup.Item >
              < ListGroup.Item action variant="dark">
                metalouver Wood
              </ListGroup.Item >
              < ListGroup.Item action variant="dark" >
                Metagate
              </ListGroup.Item >
            </ListGroup>
          </div>
          <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <div className="header-container">
              <p className="time-text">Time</p>
              <button className="toggle-button" onClick={toggleTheme}>
                {darkMode ? <FaMoon className="icon" /> : <FaSun className="icon" />}
              </button>
            </div>
          </div>

          <div className="row">
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
          <button class="hover-button"><span>Build Your Dream</span></button>        </div>
      </div>
    </div >
  );
};

export default SingleProject;