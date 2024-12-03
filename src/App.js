import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import SingleProject from './pages/SingleProject/SingleProject';
import Allproducts from './pages/AllProduct/Allproducts';
import Allprojects from './pages/AllProject/Allprojects';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Metavision from './components/Metavision';

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
// import Metavision from './components/Metavision';
// import Cofee from './components/Cofee';
// import Features from './components/Features';
// import Product from './components/Product';
// import Brochure from './components/Brochure';
// import Team from './components/Team';
// import Metaland from './components/Metaland';
// import Landmark from './components/Landmark';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<Allproducts />} />
          <Route path="/all-projects" element={<Allprojects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/single-project" element={<SingleProject />} />
          <Route path="/About" element={<About />} />
          <Route path="/metavision" element={<Metavision />} />
        </Routes>
      </Layout>
    </Router>
    // <div className="Home">
    //   <MainContent />
    //   <Landmark />
    //   <Features />
    //   <Metavision />
    //   <Product />
    //   <Metaland />
    //   <Team />
    //   <Brochure />
    //   <Cofee />
    //   <Footer />
    // </div>
  );
}

export default App;