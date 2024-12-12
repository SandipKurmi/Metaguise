import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from '../../components/MainContent';
import Footer from '../../components/Footer';
import Metavision from '../../components/Metavision';
import Cofee from '../../components/Cofee';
import Features from '../../components/Features';
import Product from '../../components/Product';
import Brochure from '../../components/Brochure';
import Team from '../../components/Team';
import Metaland from '../../components/Metaland';
import { Swipper } from '../../components/Swiper';
import Featured from '../../components/Featured';
import Metavision1 from '../../components/Metavision1';

function Home() {
  return (
    <div className='Home'>
      <Swipper />
      {/* <MainContent /> */}
      <Featured />
      {/* <Features /> */}
      <Metavision1 />
      {/* <Metavision /> */}
      <Product />
      <Metaland />
      <Team />
      <Brochure />
      <Cofee />
      <Footer />
    </div>
  );
}

export default Home;
