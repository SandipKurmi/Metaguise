// src/components/Gallery.js
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';
import './Allproducts.css';


const Allproducts = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [selectedCategory, setSelectedCategory] = useState('');
  const singleProductDetail = [{
    name: 'MetaCoin',
    description: 'A revolutionary parametric facade system designed to elevate architectural aesthetics. Crafted with premium metals and enhanced with MetaSurface finishes, MetaCoin offers unparalleled customizability, from the shape and size of each element to its color and arrangement. Its dynamic design reacts to light and perspective, creating ever-changing visual effects. Ideal for contemporary and iconic structures, MetaCoin transforms facades into captivating works of art that are sustainable, durable, and visually stunning​​.',
    images: ['assets/Allproducts/MetaParametric/metacoin/metacoin1.jpg',
      'assets/Allproducts/MetaParametric/metacoin/metacoin2.png',
      'assets/Allproducts/MetaParametric/metacoin/metacoin3.jpg',
      'assets/Allproducts/MetaParametric/metacoin/metacoin4.png',
      'assets/Allproducts/MetaParametric/metacoin/metacoin5.png',
      'assets/Allproducts/MetaParametric/metacoin/metacoin6.jpg',
      'assets/Allproducts/MetaParametric/metacoin/metacoin7.png',
      'assets/Allproducts/MetaParametric/metacoin/metacoin8.jpg',
      'assets/Allproducts/MetaParametric/metacoin/metacoin9.png',
      'assets/Allproducts/MetaParametric/metacoin/metacoin10.png',
      'assets/Allproducts/MetaParametric/metacoin/metacoin11.png',
      'assets/Allproducts/MetaParametric/metacoin/metacoin12.png',
      'assets/Allproducts/MetaParametric/metacoin/metacoin13.png',
      'assets/Allproducts/MetaParametric/metacoin/metacoin14.png',
      'assets/Allproducts/MetaParametric/metacoin/metacoin15.png',
      'assets/Allproducts/MetaParametric/metacoin/metacoin16.png',
      'assets/Allproducts/MetaParametric/metacoin/metacoin17.png'
    ]
  }, {
    name: 'MetaSequin',
    description: 'Elevate your structure with MetaShingles, a system of overlapping metal panels designed to create dynamic textures and visual depth. Fully customizable in shape, size, color and finish, MetaShingles offer endless design possibilities to suit any architectural vision. These shingles bring a contemporary flair to facades while ensuring durability and weather resistance. Perfect for residential and commercial projects, MetaShingles strike a balance between aesthetic appeal and robust functionality, allowing you to tailor your facade to your unique style​.',
    images: [
      'assets/Allproducts/MetaParametric/metasequin/metasequin2.png',
      'assets/Allproducts/MetaParametric/metasequin/metasequin3.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin4.png',
      'assets/Allproducts/MetaParametric/metasequin/metasequin5.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin6.png',
      'assets/Allproducts/MetaParametric/metasequin/metasequin7.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin8.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin9.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin10.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin11.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin12.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin13.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin14.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin15.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin16.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin17.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin18.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin19.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin20.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin22.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin23.jpg',
      'assets/Allproducts/MetaParametric/metasequin/metasequin24.jpg',
    ]
  }, {
    name: 'MetaPyramid',
    description: 'A tribute to ancient architectural wonders, MetaPyramid captures the essence of the pyramids with its geometric precision. Featuring 3D perforations that play with light and shadow, these facades create dynamic visual patterns that change throughout the day. Ideal for bold and iconic designs, MetaPyramid adds a layer of intrigue and timeless sophistication to modern architecture​.',
    images: ['assets/Allproducts/MetaForm/metapyramid/metapyramid1.jpg',
      'assets/Allproducts/MetaForm/metapyramid/metapyramid2.png',
      'assets/Allproducts/MetaForm/metapyramid/metapyramid3.jpg',
      'assets/Allproducts/MetaForm/metapyramid/metapyramid4.png',
      'assets/Allproducts/MetaForm/metapyramid/metapyramid5.jpg',
      'assets/Allproducts/MetaForm/metapyramid/metapyramid6.png',
      'assets/Allproducts/MetaForm/metapyramid/metapyramid7.jpg',
      'assets/Allproducts/MetaForm/metapyramid/metapyramid8.png',
      'assets/Allproducts/MetaForm/metapyramid/metapyramid9.jpg',
      'assets/Allproducts/MetaForm/metapyramid/metapyramid10.jpg',
    ]
  }, {
    name: 'MetaShingles',
    description: 'Elevate your structure with MetaShingles, a system of overlapping metal panels designed to create dynamic textures and visual depth. These shingles bring a contemporary flair to facades while ensuring durability and weather resistance. Perfect for residential and commercial projects, MetaShingles strike a balance between aesthetic appeal and robust functionality​.',
    images: ['assets/Allproducts/MetaForm/metashingle/metashingle1.png',
      'assets/Allproducts/MetaForm/metashingle/metashingle2.png',
      'assets/Allproducts/MetaForm/metashingle/metashingle3.png',
      'assets/Allproducts/MetaForm/metashingle/metashingle4.png',
      'assets/Allproducts/MetaForm/metashingle/metashingle5.png',
      'assets/Allproducts/MetaForm/metashingle/metashingle6.png',
      'assets/Allproducts/MetaForm/metashingle/metashingle7.png',
      'assets/Allproducts/MetaForm/metashingle/metashingle8.png',
      'assets/Allproducts/MetaForm/metashingle/metashingle9.png',
      'assets/Allproducts/MetaForm/metashingle/metashingle10.png',
      'assets/Allproducts/MetaForm/metashingle/metashingle11.jpg',
      'assets/Allproducts/MetaForm/metashingle/metashingle12.jpg',
    ]
  }, {
    name: 'Cascading Keys',
    description: 'An architectural ode to natural harmony, Cascading Keys incorporates aluminum and stainless steel in flowing forms that mimic the rhythm of nature. These facades resemble the gentle hum of wind chimes or the flutter of butterfly wings, captivating viewers with their elegance. Ideal for tranquil, design-forward spaces, Cascading Keys creates a seamless blend of beauty and function​.',
    images: ['assets/Allproducts/MetaForm/CascadingKeys/caskey2.png',
      'assets/Allproducts/MetaForm/CascadingKeys/caskey3.png',
      'assets/Allproducts/MetaForm/CascadingKeys/caskey4.png',
      'assets/Allproducts/MetaForm/CascadingKeys/caskey5.png',
      'assets/Allproducts/MetaForm/CascadingKeys/caskey6.png'
    ]
  }, {
    name: 'MetaCassette',
    description: 'A versatile facade solution, MetaCassette offers three distinct panel types—grooved, perforated, and solid—each designed to bring unique aesthetic and functional qualities to architectural projects. Together, these options empower architects and designers to craft facades that are not only visually captivating but also tailored to specific functional requirements​​.',
    images: ['assets/Allproducts/MetaForm/metacassette/metacassette1.png',
      'assets/Allproducts/MetaForm/metacassette/metacassette2.jpg',
      'assets/Allproducts/MetaForm/metacassette/metacassette3.png',
      'assets/Allproducts/MetaForm/metacassette/metacassette4.jpg',
      'assets/Allproducts/MetaForm/metacassette/metacassette5.jpg',
      'assets/Allproducts/MetaForm/metacassette/metacassette6.png',
      'assets/Allproducts/MetaForm/metacassette/metacassette7.jpg',
      'assets/Allproducts/MetaForm/metacassette/metacassette8.png',
      'assets/Allproducts/MetaForm/metacassette/metacassette9.jpg',
      'assets/Allproducts/MetaForm/metacassette/metacassette10.png',
      'assets/Allproducts/MetaForm/metacassette/metacassette11.png',
      'assets/Allproducts/MetaForm/metacassette/metacassette12.png',
      'assets/Allproducts/MetaForm/metacassette/metacassette13.png',
      'assets/Allproducts/MetaForm/metacassette/metacassette14.png',
      'assets/Allproducts/MetaForm/metacassette/metacassette15.jpg',
      'assets/Allproducts/MetaForm/metacassette/metacassette16.jpg',
      'assets/Allproducts/MetaForm/metacassette/metacassette17.jpg',
      'assets/Allproducts/MetaForm/metacassette/metacassette19.jpg',
      'assets/Allproducts/MetaForm/metacassette/metacassette20.jpg',
      'assets/Allproducts/MetaForm/metacassette/metacassette21.jpg'
        ]
  }, {
    name: 'MetaFlute',
    description: 'A sleek solution for architectural facades, MetaFlute combines lightweight yet durable metals to create rhythmic, vertical lines that enhance any structure. These extrusions shield buildings from harsh weather while adding a touch of modern sophistication. MetaFlute is ideal for projects requiring elegance, resilience, and minimal maintenance​​.',
    images: ['assets/Allproducts/MetaForm/metaflute/metaflute1.jpg',
      'assets/Allproducts/MetaForm/metaflute/metaflute2.png',
      'assets/Allproducts/MetaForm/metaflute/metaflute3.jpg',
      'assets/Allproducts/MetaForm/metaflute/metaflute4.png',
      'assets/Allproducts/MetaForm/metaflute/metaflute5.png',
      'assets/Allproducts/MetaForm/metaflute/metaflute6.png',
      'assets/Allproducts/MetaForm/metaflute/metaflute7.png',
      'assets/Allproducts/MetaForm/metaflute/metaflute8.png',
      'assets/Allproducts/MetaForm/metaflute/metaflute9.png',
      'assets/Allproducts/MetaForm/metaflute/metaflute10.png',
      'assets/Allproducts/MetaForm/metaflute/metaflute11.png',
      'assets/Allproducts/MetaForm/metaflute/metaflute13.png',
      'assets/Allproducts/MetaForm/metaflute/metaflute14.png',
      'assets/Allproducts/MetaForm/metaflute/metaflute15.png',
      'assets/Allproducts/MetaForm/metaflute/metaflute16.png',
    ]
  }, {
    name: 'MetaFold',
    description: 'MetaFold transforms spaces with its innovative folding panels, seamlessly connecting indoor and outdoor environments. Featuring multi-faceted panes crafted from premium metals, it creates dynamic openings that enhance airflow and natural light. Perfect for modern homes and commercial spaces, MetaFold embodies functional luxury and design flexibility​.',
    images: [
      'assets/Allproducts/MetaFunction/metafold/metafold2.png',
      'assets/Allproducts/MetaFunction/metafold/metafold3.png',
      'assets/Allproducts/MetaFunction/metafold/metafold4.jpg',
      'assets/Allproducts/MetaFunction/metafold/metafold5.jpg',
      'assets/Allproducts/MetaFunction/metafold/metafold6.jpg'
    ]
  }, {
    name: 'MetaFin',
    description: 'Showcasing the perfect blend of fluidity and structure, MetaFin features parametric designs crafted from lightweight metals. With its smooth, organic curves and ability to reflect and play with light, MetaFin creates a stunning visual narrative. This facade system is ideal for projects that demand sustainable, artistic, and high-performance solutions​​.',
    images: ['assets/Allproducts/MetaParametric/metafin/metafin2.png',
      'assets/Allproducts/MetaParametric/metafin/metafin1.png',
      'assets/Allproducts/MetaParametric/metafin/metafin2.png',
      'assets/Allproducts/MetaParametric/metafin/metafin3.png',
      'assets/Allproducts/MetaParametric/metafin/metafin4.png',
      'assets/Allproducts/MetaParametric/metafin/metafin5.png',
      'assets/Allproducts/MetaParametric/metafin/metafin6.png'
    ]
  }, {
    name: 'MetaHydra',
    description: 'MetaHydra brings together the beauty of copper and the resilience of parametric design. Its unique panels mimic the fluidity of water, transforming facades into living works of art. The pure copper material ages gracefully, developing a rich patina that adds character over time, making it a luxurious choice for iconic architectural projects​.',
    images: ['assets/Allproducts/MetaParametric/metahydra/metahydra1.png',
      'assets/Allproducts/MetaParametric/metahydra/metahydra2.png',
      'assets/Allproducts/MetaParametric/metahydra/metahydra3.png',
      'assets/Allproducts/MetaParametric/metahydra/cover/metahydra.png',
    ]
  }, {
    name: 'MetaLouver',
    description: 'MetaLouver offers a harmonious balance of form and functionality. Its adjustable, angular metal panels allow for optimal control of light and ventilation while shielding interiors from rain and harsh sunlight. Whether used for facades or shading systems, MetaLouver adds a distinctive architectural rhythm to buildings​​.',
    images: ['assets/Allproducts/MetaForm/metalouver/metalouver1.jpg',
      'assets/Allproducts/MetaForm/metalouver/metalouver2.png',
      'assets/Allproducts/MetaForm/metalouver/metalouver3.jpg',
      'assets/Allproducts/MetaForm/metalouver/metalouver4.png',
      'assets/Allproducts/MetaForm/metalouver/metalouver5.jpg',
      'assets/Allproducts/MetaForm/metalouver/metalouver6.jpg',
      'assets/Allproducts/MetaForm/metalouver/metalouver7.jpg',
      'assets/Allproducts/MetaForm/metalouver/metalouver8.jpg',
      'assets/Allproducts/MetaForm/metalouver/metalouver9.jpg'
    ]
  }, {
    name: 'MetaPlank',
    description: 'MetaPlank combines the natural appeal of wood with the resilience of metal, offering a durable, weather-resistant cladding solution. Its earthy tones and realistic textures bring warmth to any structure, while its maintenance-free properties make it a sustainable and cost-effective alternative to traditional wood​​.',
    images: ['assets/Allproducts/MetaForm/metaplank/metaplank1.png',
      'assets/Allproducts/MetaForm/metaplank/metaplank3.jpg',
       'assets/Allproducts/MetaForm/metaplank/metaplank4.jpg',
        'assets/Allproducts/MetaForm/metaplank/metaplank5.jpg',
         'assets/Allproducts/MetaForm/metaplank/metaplank6.jpg',
    ]
  }, {
    name: 'MetaGate',
    description: 'A stylish and functional entry solution, MetaGate is crafted from lightweight aluminum and can be customized with manual or automated sliding, swinging, or folding mechanisms. Offering sleek aesthetics and robust performance, it’s the perfect addition to both contemporary and classic architectural designs​.',
    images: ['assets/Allproducts/MetaFunction/metagate/metagate1.png',
      'assets/Allproducts/MetaFunction/metagate/metagate2.png',
      'assets/Allproducts/MetaFunction/metagate/metagate3.jpg',
      'assets/Allproducts/MetaFunction/metagate/metagate5.jpg',
      'assets/Allproducts/MetaFunction/metagate/metagate6.jpg',
      'assets/Allproducts/MetaFunction/metagate/metagate7.jpg',
    ]
  }, {
    name: 'MetaSlider',
    description: ' MetaSlider integrates sliding facade technology to create dynamic architectural expressions. Whether open to embrace natural light or closed for privacy, it adapts seamlessly to climatic and aesthetic needs. MetaSlider’s versatility makes it a go-to solution for modern facades that balance functionality and design​.',
    images: ['assets/Allproducts/MetaFunction/metaslider/metaslider1.png',
      'assets/Allproducts/MetaFunction/metaslider/metaslider3.jpg',
      'assets/Allproducts/MetaFunction/metaslider/cover/metaslider.png',
    ]
  }, {
    name: 'MetaBlox',
    description: 'The first-ever shape-changing facade system, MetaBlox combines cutting-edge parametric technology with visually mesmerizing designs. Made from pure aluminum, it offers a unique, customizable facade solution that adapts to light and perspective, making every project a masterpiece​.',
    images: ['assets/Allproducts/MetaParametric/metablox/metablox1.png',
      'assets/Allproducts/MetaParametric/metablox/metablox2.jpg',
      'assets/Allproducts/MetaParametric/metablox/cover/metablox.png',
    ]
  }, {
    name: 'MetaCopper',
    description: 'A timeless material reimagined, MetaCopper integrates the warmth and character of copper into modern architectural designs. Its rustic ochre-red hues, combined with its durability and resistance to corrosion, make it a stunning choice for facades that exude both tradition and innovation​.',
    images: [
      'assets/Allproducts/MetaSurface/metacopper/metacopper2.png',
      'assets/Allproducts/MetaSurface/metacopper/metacopper3.png',
      'assets/Allproducts/MetaSurface/metacopper/metacopper4.png',
      'assets/Allproducts/MetaSurface/metacopper/metacopper5.png',
      'assets/Allproducts/MetaSurface/metacopper/metacopper6.png',
      'assets/Allproducts/MetaSurface/metacopper/metacopper7.png',
      'assets/Allproducts/MetaSurface/metacopper/metacopper8.png',
      'assets/Allproducts/MetaSurface/metacopper/metacopper9.png',
      'assets/Allproducts/MetaSurface/metacopper/metacopper10.png',
      'assets/Allproducts/MetaSurface/metacopper/metacopper11.png',
      'assets/Allproducts/MetaSurface/metacopper/metacopper12.png'
    ]
  }, {
    name: 'MetaCorten',
    description: 'Embracing the raw beauty of weathered steel, MetaCorten offers a rich reddish-brown facade that evolves aesthetically over time. Its advanced coating ensures maintenance-free performance, making it a sustainable, modern choice for architectural cladding​.',
    images: ['assets/Allproducts/MetaSurface/metacorten/metacorten1.png',
      'assets/Allproducts/MetaSurface/metacorten/metacorten2.png',
      'assets/Allproducts/MetaSurface/metacorten/metacorten4.png',
      'assets/Allproducts/MetaSurface/metacorten/metacorten5.png',
      'assets/Allproducts/MetaSurface/metacorten/metacorten6.jpg',
      'assets/Allproducts/MetaSurface/metacorten/metacorten7.jpg',
    ]
  }, {
    name: 'MetaGrey',
    description: 'A sophisticated grayscale facade system, MetaGrey blends seamlessly with contemporary architecture. Its subtle tones provide visual balance and versatility, making it ideal for projects that require understated elegance with a modern edge​.',
    images: ['assets/Allproducts/MetaSurface/metagrey/metagrey1.png',
      'assets/Allproducts/MetaSurface/metagrey/metagrey2.png',
      'assets/Allproducts/MetaSurface/metagrey/metagrey3.png',
      'assets/Allproducts/MetaSurface/metagrey/metagrey4.png',
      'assets/Allproducts/MetaSurface/metagrey/metagrey5.png',
      'assets/Allproducts/MetaSurface/metagrey/metagrey7.png',
      'assets/Allproducts/MetaSurface/metagrey/metagrey8.png',
      'assets/Allproducts/MetaSurface/metagrey/metagrey9.png',
      'assets/Allproducts/MetaSurface/metagrey/metagrey10.png',
      'assets/Allproducts/MetaSurface/metagrey/metagrey6.png'
    ]
  }, {
    name: 'MetaPatina',
    description: ' MetaPatina showcases the artistry of oxidized metals, featuring verdigris tints on copper and brass for a luxurious, aged look. With its antimicrobial properties and striking color contrasts, MetaPatina is perfect for interior and exterior applications that demand both beauty and functionality​.',
    images: ['assets/Allproducts/MetaSurface/metapatina/metapatina1.png',
      'assets/Allproducts/MetaSurface/metapatina/metapatina2.png',
      'assets/Allproducts/MetaSurface/metapatina/metapatina3.png',
      'assets/Allproducts/MetaSurface/metapatina/metapatina4.png',
      'assets/Allproducts/MetaSurface/metapatina/metapatina5.png',
      'assets/Allproducts/MetaSurface/metapatina/metapatina6.png',
      'assets/Allproducts/MetaSurface/metapatina/metapatina7.png',
      'assets/Allproducts/MetaSurface/metapatina/metapatina8.png'
    ]
  }, {
    name: 'MetaWood',
    description: 'A sustainable reimagining of natural wood, MetaWood combines the visual appeal of earthy textures with the strength of metal. Resistant to weather, fire, and termites, it is an environmentally friendly, durable solution for cladding and decorative applications​.',
    images: ['assets/Allproducts/MetaSurface/metawood/metawood1.png',
      'assets/Allproducts/MetaSurface/metawood/metawood2.png',
      'assets/Allproducts/MetaSurface/metawood/metawood3.png',
      'assets/Allproducts/MetaSurface/metawood/metawood4.png',
      'assets/Allproducts/MetaSurface/metawood/metawood5.png',
      'assets/Allproducts/MetaSurface/metawood/metawood6.png',
      'assets/Allproducts/MetaSurface/metawood/metawood7.png',
      'assets/Allproducts/MetaSurface/metawood/metawood8.png',
      'assets/Allproducts/MetaSurface/metawood/metawood9.png',
      'assets/Allproducts/MetaSurface/metawood/metawood10.png',
      'assets/Allproducts/MetaSurface/metawood/metawood11.png'
    ]
  }, {
    name: 'SolidPanel',
    description: 'Durable and versatile, Solid Panels are crafted from premium metals for seamless, modern facades. With exceptional weather resistance and low maintenance, they suit both bold designs and intricate architectural projects. Fully customizable in size, finish, and color, Solid Panels blend strength with aesthetic appeal for a variety of applications.',
    images: ['assets/Allproducts/MetaForm/SolidPanel/solidpanel1.png',
      'assets/Allproducts/MetaForm/SolidPanel/solidpanel2.jpg',
      'assets/Allproducts/MetaForm/SolidPanel/solidpanel3.jpg',
      'assets/Allproducts/MetaForm/SolidPanel/solidpanel4.jpg',
      'assets/Allproducts/MetaForm/SolidPanel/solidpanel5.jpg',
       'assets/Allproducts/MetaForm/SolidPanel/solidpanel7.jpg',
        'assets/Allproducts/MetaForm/SolidPanel/solidpanel8.jpg',
         'assets/Allproducts/MetaForm/SolidPanel/solidpanel9.jpg'
    ]
  }
  ];

  const images = [
    { imgPath: 'assets/Allproducts/MetaParametric/metacoin/cover/metacoin.jpg', imgText: 'MetaCoin' },
    { imgPath: 'assets/Allproducts/MetaParametric/metasequin/cover/metasequin1.jpg', imgText: 'MetaSequin' },
    { imgPath: 'assets/Allproducts/MetaForm/metapyramid/cover/metapyramid.jpg', imgText: 'MetaPyramid' },
    { imgPath: 'assets/Allproducts/MetaForm/metashingle/cover/metashingle.png', imgText: 'MetaShingles' },
    { imgPath: 'assets/Allproducts/MetaForm/CascadingKeys/cover/caskey1.png', imgText: 'Cascading Keys' },
    { imgPath: 'assets/Allproducts/MetaForm/metacassette/cover/metacassette.png', imgText: 'MetaCassette' },
    { imgPath: 'assets/Allproducts/MetaForm/metaflute/cover/metaflute.png', imgText: 'MetaFlute' },
    { imgPath: 'assets/Allproducts/MetaFunction/metafold/cover/metafold1.jpg', imgText: 'MetaFold' },
    { imgPath: 'assets/Allproducts/MetaParametric/metafin/cover/metafin.png', imgText: 'MetaFin' },
    { imgPath: 'assets/Allproducts/MetaParametric/metahydra/cover/metahydra.png', imgText: 'MetaHydra' },
    { imgPath: 'assets/Allproducts/MetaForm/metalouver/cover/metalouver.png', imgText: 'MetaLouver' },
    { imgPath: 'assets/Allproducts/MetaForm/metaplank/cover/metaplank.png', imgText: 'MetaPlank' },
    { imgPath: 'assets/Allproducts/MetaFunction/metagate/cover/metagate4.jpg', imgText: 'MetaGate' },
    { imgPath: 'assets/Allproducts/MetaFunction/metaslider/cover/metaslider.png', imgText: 'MetaSlider' },
    { imgPath: 'assets/Allproducts/MetaParametric/metablox/cover/metablox.png', imgText: 'MetaBlox' },
    { imgPath: 'assets/Allproducts/MetaSurface/metacopper/cover/metacopper1.png', imgText: 'MetaCopper' },
    { imgPath: 'assets/Allproducts/MetaSurface/metacorten/cover/metacorten3.png', imgText: 'MetaCorten' },
    { imgPath: 'assets/Allproducts/MetaSurface/metagrey/cover/metagrey.png', imgText: 'MetaGrey' },
    { imgPath: 'assets/Allproducts/MetaSurface/metapatina/cover/metapatina.png', imgText: 'MetaPatina' },
    { imgPath: 'assets/Allproducts/MetaSurface/metawood/cover/metawood.png', imgText: 'MetaWood' },
    { imgPath: 'assets/Allproducts/MetaForm/SolidPanel/cover/solidpanel.jpg', imgText: 'SolidPanel' },

  ];


  function productClickHandler(index) {
    const selectedProduct = singleProductDetail[index];
    navigate('/single-product', { state: { selectedProduct } }); // Redirect to SingleProduct page
  }

  function filterImagesByCategory(category) {
    setSelectedCategory(category);
  }

  // Filter images based on selected category
  const filteredImages = selectedCategory
    ? images.filter((img) => img.imgPath.includes(selectedCategory))
    : images;

    const location = useLocation();

    useEffect(() => {
      if (location.pathname === '/all-products') {
        // Hide vertical scroll for the gallery page
        document.body.style.overflowY = 'hidden';
      } else {
        // Restore default overflow for other pages
        document.body.style.overflowY = 'auto';
      }
  
      // Cleanup to ensure no lingering styles
      return () => {
        document.body.style.overflowY = 'auto';
      };
    }, [location]);
  return (
    <Container className="app-container text-white" style={{ marginTop: '100px' }}>
      <Row>
        <Col md={9} className="gallery">
            {filteredImages.map((img, index) => (
              <div key={index} className="gallery-item" onClick={() => productClickHandler(index)}>
                <img src={`${process.env.PUBLIC_URL}/${img.imgPath}`} alt={`Gallery ${index}`} />
                <div className="image-text">{img.imgText}</div>
              </div>
            ))}
        </Col>
        <Col md={3} className='sidebar-section'>
          <h3>Our Products</h3>
          <div className="sidebar p-4">
            <ListGroup variant="flush">
              {/* <ListGroup.Item action variant="dark" style={{color: "#fff"}}>Section</ListGroup.Item> */}
              <ListGroup.Item action variant="dark" onClick={() => filterImagesByCategory('')}>
                All
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" onClick={() => filterImagesByCategory('MetaParametric')}>
                MetaParametric
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" onClick={() => filterImagesByCategory('MetaForm')}>
                MetaForm
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" onClick={() => filterImagesByCategory('MetaFunction')}>
                MetaFunction
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" onClick={() => filterImagesByCategory('MetaSurface')}>
                MetaSurfaces
              </ListGroup.Item>
            </ListGroup>
          </div>
          <button class="dream-button"><span>Build Your Dream</span></button>
        </Col>
        </Row>
      <Footer />
    </Container>
  );
};

export default Allproducts;
