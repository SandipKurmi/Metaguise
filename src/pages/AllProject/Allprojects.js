import React, { useState, useEffect } from "react";
import "./Allprojects.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

function Allprojects() {
  const images = [
    { imgPath: "assets/Allprojects/commercial/Ardete/cover/ardete5.jpg" },
    { imgPath: "assets/Allprojects/commercial/Tanishq/cover/tanishq11.jpg" },
    { imgPath: "assets/Allprojects/residential/A13-43/cover/a13-431.jpg" },
    { imgPath: "assets/Allprojects/residential/Ankit/cover/ankit1.jpg" },
    { imgPath: "assets/Allprojects/commercial/Gowri/cover/gowri2.jpg" },
    { imgPath: "assets/Allprojects/commercial/Deepak/cover/deepak1.jpg" },
    { imgPath: "assets/Allprojects/residential/A19/cover/a192.jpg" },
    { imgPath: "assets/Allprojects/residential/A18/cover/a181.jpg" },
    { imgPath: "assets/Allprojects/residential/Varun/cover/varun5.jpg" },
    { imgPath: "assets/Allprojects/commercial/Metaland/cover/metaland6.jpg" },
    { imgPath: "assets/Allprojects/commercial/Micasa/cover/micasa1.jpg" },
    { imgPath: "assets/Allprojects/commercial/Yashika/cover/yashika1.jpg" },
    { imgPath: "assets/Allprojects/residential/C76/cover/c7615.jpg" },
    { imgPath: "assets/Allprojects/residential/5107/cover/51071.jpg" },
    { imgPath: "assets/Allprojects/residential/A297/cover/a2971.jpg" },
    { imgPath: "assets/Allprojects/residential/Chandna/cover/chandna1.jpg" },
    { imgPath: "assets/Allprojects/residential/kapil/cover/kapil1.jpg" },
    { imgPath: "assets/Allprojects/residential/DLF4/cover/dlf44.jpg" },
    { imgPath: "assets/Allprojects/residential/Vishal/cover/vishal1.jpg" },
    { imgPath: "assets/Allprojects/residential/Espace/cover/espace1.jpg" },
    { imgPath: "assets/Allprojects/residential/Manoj/cover/manoj1.jpg" },
    { imgPath: "assets/Allprojects/residential/Tejbir/cover/tejbir1.jpg" },
    { imgPath: "assets/Allprojects/residential/z1012/cover/z10121.jpg" },
    { imgPath: "assets/Allprojects/commercial/E10/cover/e105.jpg" },
  ];

  const navigate = useNavigate(); // Initialize navigate function
  const [selectedCategory, setSelectedCategory] = useState("");
  const singleprojectDetail = [
    {
      name: "Ardete",
      images: [
        "assets/Allprojects/commercial/Ardete/metafin/ardete3.jpg",
        "assets/Allprojects/commercial/Ardete/metafin/ardete4.jpg",
        "assets/Allprojects/commercial/Ardete/metafin/ardete8.jpg",
        "assets/Allprojects/commercial/Ardete/metafin/ardete14.jpg",
        "assets/Allprojects/commercial/Ardete/metasequin/ardete1.jpg",
        "assets/Allprojects/commercial/Ardete/metasequin/ardete2.jpg",
        "assets/Allprojects/commercial/Ardete/metasequin/ardete6.jpg",
        "assets/Allprojects/commercial/Ardete/metasequin/ardete9.jpg",
        "assets/Allprojects/commercial/Ardete/metasequin/ardete10.jpg",
        "assets/Allprojects/commercial/Ardete/night/ardete7.jpg",
        "assets/Allprojects/commercial/Ardete/night/ardete12.jpg",
        "assets/Allprojects/commercial/Ardete/night/ardete13.jpg",
      ],
    },
    {
      name: "Tanishq",
      images: [
        "assets/Allprojects/commercial/Tanishq/metacoin/tanishq1.jpg",
        "assets/Allprojects/commercial/Tanishq/metacoin/tanishq5.jpg",
        "assets/Allprojects/commercial/Tanishq/metacoin/tanishq6.jpg",
        "assets/Allprojects/commercial/Tanishq/metacoin/tanishq7.jpg",
        "assets/Allprojects/commercial/Tanishq/metacoin/tanishq8.jpg",
        "assets/Allprojects/commercial/Tanishq/metacoin/tanishq9.jpg",
        "assets/Allprojects/commercial/Tanishq/metaflute/tanishq16.jpg",
        "assets/Allprojects/commercial/Tanishq/metaflute/tanishq3.jpg",
        "assets/Allprojects/commercial/Tanishq/metaflute/tanishq10.jpg",
        "assets/Allprojects/commercial/Tanishq/metaflute/tanishq17.jpg",
        "assets/Allprojects/commercial/Tanishq/night/tanishq2.jpg",
        "assets/Allprojects/commercial/Tanishq/night/tanishq4.jpg",
        "assets/Allprojects/commercial/Tanishq/night/tanishq12.jpg",
        "assets/Allprojects/commercial/Tanishq/night/tanishq13.jpg",
        "assets/Allprojects/commercial/Tanishq/night/tanishq14.jpg",
        "assets/Allprojects/commercial/Tanishq/night/tanishq15.jpg",
      ],
    },
    {
      name: "A13-43",
      images: [
        "assets/Allprojects/residential/A13-43/metalouver/a13-433.jpg",
        "assets/Allprojects/residential/A13-43/metalouver/a13-437.jpg",
        "assets/Allprojects/residential/A13-43/metalouver/a13-4316.jpg",
        "assets/Allprojects/residential/A13-43/metaplank/a13-434.jpg",
        "assets/Allprojects/residential/A13-43/metaplank/a13-438.jpg",
        "assets/Allprojects/residential/A13-43/metaplank/a13-4310.jpg",
        "assets/Allprojects/residential/A13-43/metaplank/a13-4312.jpg",
        "assets/Allprojects/residential/A13-43/metapyramid/a13-432.jpg",
        "assets/Allprojects/residential/A13-43/metapyramid/a13-435.jpg",
        "assets/Allprojects/residential/A13-43/metapyramid/a13-436.jpg",
        "assets/Allprojects/residential/A13-43/metapyramid/a13-439.jpg",
        "assets/Allprojects/residential/A13-43/metapyramid/a13-4311.jpg",
        "assets/Allprojects/residential/A13-43/night/a13-4313.jpg",
        "assets/Allprojects/residential/A13-43/night/a13-4314.jpg",
        "assets/Allprojects/residential/A13-43/night/a13-4315.jpg",
      ],
    },
    {
      name: "Ankit",
      images: [
        "assets/Allprojects/residential/Ankit/metacassette-grooved/ankit10.jpg",
        "assets/Allprojects/residential/Ankit/metacassette-grooved/ankit11.jpg",
        "assets/Allprojects/residential/Ankit/metacassette-grooved/ankit12.jpg",
        "assets/Allprojects/residential/Ankit/metacassette-grooved/ankit13.jpg",
        "assets/Allprojects/residential/Ankit/metaflute/ankit6.jpg",
        "assets/Allprojects/residential/Ankit/metaflute/ankit9.jpg",
        "assets/Allprojects/residential/Ankit/metaflute/ankit14.jpg",
        "assets/Allprojects/residential/Ankit/metaflute/ankit15.jpg",
        "assets/Allprojects/residential/Ankit/metafold/ankit4.jpg",
        "assets/Allprojects/residential/Ankit/metafold/ankit5.jpg",
        "assets/Allprojects/residential/Ankit/metafold/ankit7.jpg",
        "assets/Allprojects/residential/Ankit/metafold/ankit8.jpg",
        "assets/Allprojects/residential/Ankit/metalouver/ankit16.jpg",
        "assets/Allprojects/residential/Ankit/metalouver/ankit2.jpg",
        "assets/Allprojects/residential/Ankit/metalouver/ankit3.jpg",
        "assets/Allprojects/residential/Ankit/metalouver/ankit17.jpg",
      ],
    },
    {
      name: "Gowri",
      images: [
        "assets/Allprojects/commercial/Gowri/metasequin/gowri1.jpg",
        "assets/Allprojects/commercial/Gowri/metasequin/gowri3.jpg",
        "assets/Allprojects/commercial/Gowri/metasequin/gowri4.jpg",
        "assets/Allprojects/commercial/Gowri/metasequin/gowri5.jpg",
        "assets/Allprojects/commercial/Gowri/metasequin/gowri6.jpg",
        "assets/Allprojects/commercial/Gowri/metasequin/gowri7.jpg",
        "assets/Allprojects/commercial/Gowri/metasequin/gowri8.jpg",
        "assets/Allprojects/commercial/Gowri/metasequin/gowri9.jpg",
      ],
    },
    {
      name: "E10",
      images: [
        "assets/Allprojects/commercial/E10/metafin/e101.jpg",
        "assets/Allprojects/commercial/E10/metafin/e103.jpg",
        "assets/Allprojects/commercial/E10/metafin/e107.jpg",
        "assets/Allprojects/commercial/E10/metafin/e1010.jpg",
        "assets/Allprojects/commercial/E10/metafin/e1011.jpg",
        "assets/Allprojects/commercial/E10/night/e102.jpg",
        "assets/Allprojects/commercial/E10/night/e104.jpg",
        "assets/Allprojects/commercial/E10/night/e106.jpg",
        "assets/Allprojects/commercial/E10/night/e108.jpg",
        "assets/Allprojects/commercial/E10/night/e109.jpg",
        "assets/Allprojects/commercial/E10/night/e1012.jpg",
      ],
    },
    {
      name: "Deepak",
      images: [
        "assets/Allprojects/commercial/Deepak/metacassette-perforated/deepak6.jpg",
        "assets/Allprojects/commercial/Deepak/metacassette-perforated/deepak13.jpg",
        "assets/Allprojects/commercial/Deepak/metacassette-perforated/deepak16.jpg",
        "assets/Allprojects/commercial/Deepak/metacassette-perforated/deepak20.jpg",
        "assets/Allprojects/commercial/Deepak/metacassette-perforated/deepak21.jpg",
        "assets/Allprojects/commercial/Deepak/metapyramid/deepak3.jpg",
        "assets/Allprojects/commercial/Deepak/metapyramid/deepak5.jpg",
        "assets/Allprojects/commercial/Deepak/metapyramid/deepak8.jpg",
        "assets/Allprojects/commercial/Deepak/metapyramid/deepak15.jpg",
        "assets/Allprojects/commercial/Deepak/metapyramid/deepak18.jpg",
        "assets/Allprojects/commercial/Deepak/metapyramid/deepak19.jpg",
        "assets/Allprojects/commercial/Deepak/metasequin/deepak17.jpg",
        "assets/Allprojects/commercial/Deepak/metasequin/deepak2.jpg",
        "assets/Allprojects/commercial/Deepak/metasequin/deepak11.jpg",
        "assets/Allprojects/commercial/Deepak/metasequin/deepak22.jpg",
        "assets/Allprojects/commercial/Deepak/metasequin/deepak14.jpg",
        "assets/Allprojects/commercial/Deepak/metasequin/deepak23.jpg",
        "assets/Allprojects/commercial/Deepak/night/deepak4.jpg",
        "assets/Allprojects/commercial/Deepak/night/deepak7.jpg",
        "assets/Allprojects/commercial/Deepak/night/deepak9.jpg",
        "assets/Allprojects/commercial/Deepak/night/deepak10.jpg",
        "assets/Allprojects/commercial/Deepak/night/deepak12.jpg",
      ],
    },
    {
      name: "A19",
      images: [
        "assets/Allprojects/residential/A19/metacassette-grooved/a1910.jpg",
        "assets/Allprojects/residential/A19/metacassette-grooved/a1911.jpg",
        "assets/Allprojects/residential/A19/metacassette-grooved/a1912.jpg",
        "assets/Allprojects/residential/A19/metacassette-grooved/a1913.jpg",
        "assets/Allprojects/residential/A19/metacassette-perforated/a199.jpg",
        "assets/Allprojects/residential/A19/metacassette-perforated/a1914.jpg",
        "assets/Allprojects/residential/A19/metacassette-perforated/a1915.jpg",
        "assets/Allprojects/residential/A19/metacassette-perforated/a1917.jpg",
        "assets/Allprojects/residential/A19/metaflute/a191.jpg",
        "assets/Allprojects/residential/A19/metaflute/a193.jpg",
        "assets/Allprojects/residential/A19/metaflute/a195.jpg",
        "assets/Allprojects/residential/A19/metaflute/a196.jpg",
        "assets/Allprojects/residential/A19/metalouver/a194.jpg",
        "assets/Allprojects/residential/A19/metalouver/a197.jpg",
        "assets/Allprojects/residential/A19/metalouver/a198.jpg",
        "assets/Allprojects/residential/A19/metalouver/a1916.jpg",
      ],
    },
    {
      name: "A18",
      images: [
        "assets/Allprojects/residential/A18/metacassette-perforated/a182.jpg",
        "assets/Allprojects/residential/A18/metacassette-perforated/a184.jpg",
        "assets/Allprojects/residential/A18/metacassette-perforated/a185.jpg",
        "assets/Allprojects/residential/A18/metacassette-perforated/a186.jpg",
        "assets/Allprojects/residential/A18/metacassette-perforated/a188.jpg",
        "assets/Allprojects/residential/A18/metacassette-perforated/a1812.jpg",
        "assets/Allprojects/residential/A18/metacassette-perforated/a1817.jpg",
        "assets/Allprojects/residential/A18/metacassette-perforated/a1819.jpg",
        "assets/Allprojects/residential/A18/metaflute/a189.jpg",
        "assets/Allprojects/residential/A18/metaflute/a1813.jpg",
        "assets/Allprojects/residential/A18/metaflute/a1814.jpg",
        "assets/Allprojects/residential/A18/metaflute/a1815.jpg",
        "assets/Allprojects/residential/A18/metaflute/a1816.jpg",
        "assets/Allprojects/residential/A18/metalouver/a183.jpg",
        "assets/Allprojects/residential/A18/metalouver/a1810.jpg",
        "assets/Allprojects/residential/A18/metalouver/a1811.jpg",
        "assets/Allprojects/residential/A18/metalouver/a1818.jpg",
      ],
    },
    {
      name: "Varun",
      images: [
        "assets/Allprojects/residential/Varun/metacassette-grooved/varun2.jpg",
        "assets/Allprojects/residential/Varun/metacassette-grooved/varun3.jpg",
        "assets/Allprojects/residential/Varun/metacassette-grooved/varun7.jpg",
        "assets/Allprojects/residential/Varun/metacassette-grooved/varun8.jpg",
        "assets/Allprojects/residential/Varun/metacassette-grooved/varun9.jpg",
        "assets/Allprojects/residential/Varun/metacassette-grooved/varun11.jpg",
        "assets/Allprojects/residential/Varun/metacassette-grooved/varun13.jpg",
        "assets/Allprojects/residential/Varun/metagate/varun10.jpg",
        "assets/Allprojects/residential/Varun/metagate/varun12.jpg",
        "assets/Allprojects/residential/Varun/metagate/varun14.jpg",
        "assets/Allprojects/residential/Varun/metagate/varun16.jpg",
        "assets/Allprojects/residential/Varun/night/varun1.jpg",
        "assets/Allprojects/residential/Varun/night/varun4.jpg",
        "assets/Allprojects/residential/Varun/night/varun6.jpg",
        "assets/Allprojects/residential/Varun/night/varun15.jpg",
      ],
    },
    {
      name: "Metaland",
      images: [
        "assets/Allprojects/commercial/Metaland/metasequin/metaland14.jpg",
        "assets/Allprojects/commercial/Metaland/metasequin/metaland8.jpg",
        "assets/Allprojects/commercial/Metaland/metasequin/metaland9.jpg",
        "assets/Allprojects/commercial/Metaland/metasequin/metaland10.jpg",
        "assets/Allprojects/commercial/Metaland/metasequin/metaland11.jpg",
        "assets/Allprojects/commercial/Metaland/night/metaland1.jpg",
        "assets/Allprojects/commercial/Metaland/night/metaland2.jpg",
        "assets/Allprojects/commercial/Metaland/night/metaland3.jpg",
        "assets/Allprojects/commercial/Metaland/night/metaland4.jpg",
        "assets/Allprojects/commercial/Metaland/night/metaland5.jpg",
        "assets/Allprojects/commercial/Metaland/night/metaland7.jpg",
        "assets/Allprojects/commercial/Metaland/night/metaland12.jpg",
        "assets/Allprojects/commercial/Metaland/night/metaland13.jpg",
      ],
    },
    {
      name: "Micasa",
      images: [
        "assets/Allprojects/commercial/Micasa/metacoin/micasa2.jpg",
        "assets/Allprojects/commercial/Micasa/metacoin/micasa3.jpg",
        "assets/Allprojects/commercial/Micasa/metacoin/micasa4.jpg",
        "assets/Allprojects/commercial/Micasa/metacoin/micasa5.jpg",
        "assets/Allprojects/commercial/Micasa/metacoin/micasa6.jpg",
        "assets/Allprojects/commercial/Micasa/metacoin/micasa7.jpg",
        "assets/Allprojects/commercial/Micasa/metacoin/micasa8.jpg",
        "assets/Allprojects/commercial/Micasa/metacoin/micasa9.jpg",
      ],
    },
    {
      name: "Yashika",
      images: [
        "assets/Allprojects/commercial/Yashika/metacoin/yashika2.jpg",
        "assets/Allprojects/commercial/Yashika/metacoin/yashika3.jpg",
        "assets/Allprojects/commercial/Yashika/metacoin/yashika4.jpg",
        "assets/Allprojects/commercial/Yashika/metacoin/yashika5.jpg",
        "assets/Allprojects/commercial/Yashika/metacoin/yashika6.jpg",
        "assets/Allprojects/commercial/Yashika/metacoin/yashika7.jpg",
        "assets/Allprojects/commercial/Yashika/metacoin/yashika8.jpg",
        "assets/Allprojects/commercial/Yashika/metacoin/yashika9.jpg",
        "assets/Allprojects/commercial/Yashika/metacoin/yashika10.jpg",
      ],
    },
    {
      name: "C76",
      images: [
        "assets/Allprojects/residential/C76/metacassette-grooved/c769.jpg",
        "assets/Allprojects/residential/C76/metacassette-grooved/c7612.jpg",
        "assets/Allprojects/residential/C76/metacassette-grooved/c7614.jpg",
        "assets/Allprojects/residential/C76/metacassette-grooved/c7619.jpg",
        "assets/Allprojects/residential/C76/metaflute/c762.jpg",
        "assets/Allprojects/residential/C76/metaflute/c763.jpg",
        "assets/Allprojects/residential/C76/metaflute/c768.jpg",
        "assets/Allprojects/residential/C76/metaflute/c7611.jpg",
        "assets/Allprojects/residential/C76/metaflute/c7613.jpg",
        "assets/Allprojects/residential/C76/metaflute/c7617.jpg",
        "assets/Allprojects/residential/C76/metaflute/c7618.jpg",
        "assets/Allprojects/residential/C76/night/c761.jpg",
        "assets/Allprojects/residential/C76/night/c764.jpg",
        "assets/Allprojects/residential/C76/night/c765.jpg",
        "assets/Allprojects/residential/C76/night/c767.jpg",
      ],
    },
    {
      name: "5107",
      images: [
        "assets/Allprojects/residential/5107/metacassette-perforated/51072.jpg",
        "assets/Allprojects/residential/5107/metacassette-perforated/51073.jpg",
        "assets/Allprojects/residential/5107/metacassette-perforated/51074.jpg",
        "assets/Allprojects/residential/5107/metacassette-perforated/51078.jpg",
        "assets/Allprojects/residential/5107/metacassette-perforated/510710.jpg",
        "assets/Allprojects/residential/5107/metacassette-perforated/510711.jpg",
        "assets/Allprojects/residential/5107/night/51074.jpg",
        "assets/Allprojects/residential/5107/night/51075.jpg",
        "assets/Allprojects/residential/5107/night/51077.jpg",
        "assets/Allprojects/residential/5107/night/51079.jpg",
        "assets/Allprojects/residential/5107/night/510712.jpg",
        "assets/Allprojects/residential/5107/night/510713.jpg",
        "assets/Allprojects/residential/5107/night/510714.jpg",
      ],
    },
    {
      name: "A297",
      images: [
        "assets/Allprojects/residential/A297/metaflute/a2973.jpg",
        "assets/Allprojects/residential/A297/metaflute/a2975.jpg",
        "assets/Allprojects/residential/A297/metaflute/a2976.jpg",
        "assets/Allprojects/residential/A297/metaflute/a2979.jpg",
        "assets/Allprojects/residential/A297/metaflute/a29713.jpg",
        "assets/Allprojects/residential/A297/metagate/a2974.jpg",
        "assets/Allprojects/residential/A297/metagate/a29715.jpg",
        "assets/Allprojects/residential/A297/metagate/a29716.jpg",
        "assets/Allprojects/residential/A297/metalouver/a2977.jpg",
        "assets/Allprojects/residential/A297/metalouver/a29712.jpg",
        "assets/Allprojects/residential/A297/metalouver/a29714.jpg",
        "assets/Allprojects/residential/A297/metalouver/a29717.jpg",
        "assets/Allprojects/residential/A297/metashingle/a2972.jpg",
        "assets/Allprojects/residential/A297/metashingle/a2978.jpg",
        "assets/Allprojects/residential/A297/metashingle/a29710.jpg",
        "assets/Allprojects/residential/A297/metashingle/a29711.jpg",
      ],
    },
    {
      name: "Chandna",
      images: [
        "assets/Allprojects/residential/Chandna/metaflute/chandna2.jpg",
        "assets/Allprojects/residential/Chandna/metaflute/chandna3.jpg",
        "assets/Allprojects/residential/Chandna/metaflute/chandna4.jpg",
        "assets/Allprojects/residential/Chandna/metaflute/chandna5.jpg",
        "assets/Allprojects/residential/Chandna/metaflute/chandna6.jpg",
        "assets/Allprojects/residential/Chandna/metaflute/chandna7.jpg",
        "assets/Allprojects/residential/Chandna/metaflute/chandna8.jpg",
        "assets/Allprojects/residential/Chandna/metaflute/chandna9.jpg",
      ],
    },
    {
      name: "kapil",
      images: [
        "assets/Allprojects/residential/kapil/metacoin/kapil2.jpg",
        "assets/Allprojects/residential/kapil/metacoin/kapil3.jpg",
        "assets/Allprojects/residential/kapil/metacoin/kapil4.jpg",
        "assets/Allprojects/residential/kapil/metacoin/kapil6.jpg",
        "assets/Allprojects/residential/kapil/metacoin/kapil8.jpg",
        "assets/Allprojects/residential/kapil/metacoin/kapil9.jpg",
        "assets/Allprojects/residential/kapil/metacoin/kapil10.jpg",
        "assets/Allprojects/residential/kapil/metashingle/kapil11.jpg",
        "assets/Allprojects/residential/kapil/metashingle/kapil5.jpg",
        "assets/Allprojects/residential/kapil/metashingle/kapil7.jpg",
        "assets/Allprojects/residential/kapil/metashingle/kapil12.jpg",
      ],
    },
    {
      name: "DLF4",
      images: [
        "assets/Allprojects/residential/DLF4/metaflute/dlf15.jpg",
        "assets/Allprojects/residential/DLF4/metaflute/dlf16.jpg",
        "assets/Allprojects/residential/DLF4/metaflute/dlf17.jpg",
        "assets/Allprojects/residential/DLF4/metaflute/dlf48.jpg",
        "assets/Allprojects/residential/DLF4/night/dlf42.jpg",
        "assets/Allprojects/residential/DLF4/night/dlf43.jpg",
        "assets/Allprojects/residential/DLF4/night/dlf45.jpg",
        "assets/Allprojects/residential/DLF4/night/dlf46.jpg",
        "assets/Allprojects/residential/DLF4/night/dlf47.jpg",
        "assets/Allprojects/residential/DLF4/night/dlf49.jpg",
        "assets/Allprojects/residential/DLF4/night/dlf412.jpg",
        "assets/Allprojects/residential/DLF4/solid-panel/dlf14.jpg",
        "assets/Allprojects/residential/DLF4/solid-panel/dlf410.jpg",
        "assets/Allprojects/residential/DLF4/solid-panel/dlf411.jpg",
        "assets/Allprojects/residential/DLF4/solid-panel/dlf413.jpg",
      ],
    },
    {
      name: "Vishal",
      images: [
        "assets/Allprojects/residential/Vishal/metacassette-perforated/vishal2.jpg",
        "assets/Allprojects/residential/Vishal/metacassette-perforated/vishal9.jpg",
        "assets/Allprojects/residential/Vishal/metacassette-perforated/vishal13.jpg",
        "assets/Allprojects/residential/Vishal/metacassette-perforated/vishal14.jpg",
        "assets/Allprojects/residential/Vishal/metaflute/vishal3.jpg",
        "assets/Allprojects/residential/Vishal/metaflute/vishal4.jpg",
        "assets/Allprojects/residential/Vishal/metaflute/vishal5.jpg",
        "assets/Allprojects/residential/Vishal/metaflute/vishal6.jpg",
        "assets/Allprojects/residential/Vishal/metaflute/vishal8.jpg",
        "assets/Allprojects/residential/Vishal/metaflute/vishal11.jpg",
        "assets/Allprojects/residential/Vishal/metalouver/vishal7.jpg",
        "assets/Allprojects/residential/Vishal/metalouver/vishal21.jpg",
        "assets/Allprojects/residential/Vishal/metalouver/vishal22.jpg",
        "assets/Allprojects/residential/Vishal/metalouver/vishal23.jpg",
        "assets/Allprojects/residential/Vishal/night/vishal10.jpg",
        "assets/Allprojects/residential/Vishal/night/vishal12.jpg",
        "assets/Allprojects/residential/Vishal/night/vishal20.jpg",
        "assets/Allprojects/residential/Vishal/night/vishal24.jpg",
      ],
    },
    {
      name: "Espace",
      images: [
        "assets/Allprojects/residential/Espace/metacassette-perforated/espace2.jpg",
        "assets/Allprojects/residential/Espace/metacassette-perforated/espace5.jpg",
        "assets/Allprojects/residential/Espace/metacassette-perforated/espace8.jpg",
        "assets/Allprojects/residential/Espace/metacassette-perforated/espace12.jpg",
        "assets/Allprojects/residential/Espace/metalouver-grey/espace3.jpg",
        "assets/Allprojects/residential/Espace/metalouver-grey/espace6.jpg",
        "assets/Allprojects/residential/Espace/metalouver-grey/espace9.jpg",
        "assets/Allprojects/residential/Espace/metalouver-grey/espace15.jpg",
        "assets/Allprojects/residential/Espace/metalouver-wood/espace17.jpg",
        "assets/Allprojects/residential/Espace/metalouver-wood/espace4.jpg",
        "assets/Allprojects/residential/Espace/metalouver-wood/espace14.jpg",
        "assets/Allprojects/residential/Espace/metalouver-wood/espace16.jpg",
        "assets/Allprojects/residential/Espace/metaplank-wood/espace7.jpg",
        "assets/Allprojects/residential/Espace/metaplank-wood/espace18.jpg",
        "assets/Allprojects/residential/Espace/metaplank-wood/espace19.jpg",
        "assets/Allprojects/residential/Espace/metaplank-wood/espace20.jpg",
      ],
    },
    {
      name: "Manoj",
      images: [
        "assets/Allprojects/residential/Manoj/metacoin/manoj8.jpg",
        "assets/Allprojects/residential/Manoj/metacoin/manoj10.jpg",
        "assets/Allprojects/residential/Manoj/metacoin/manoj11.jpg",
        "assets/Allprojects/residential/Manoj/metacoin/manoj4.jpg",
        "assets/Allprojects/residential/Manoj/metalouver/manoj2.jpg",
        "assets/Allprojects/residential/Manoj/metalouver/manoj5.jpg",
        "assets/Allprojects/residential/Manoj/metalouver/manoj7.jpg",
        "assets/Allprojects/residential/Manoj/metalouver/manoj9.jpg",
        "assets/Allprojects/residential/Manoj/metaplank/manoj3.jpg",
        "assets/Allprojects/residential/Manoj/metaplank/manoj6.jpg",
        "assets/Allprojects/residential/Manoj/metaplank/manoj12.jpg",
        "assets/Allprojects/residential/Manoj/metaplank/manoj13.jpg",
      ],
    },
    {
      name: "Tejbir",
      images: [
        "assets/Allprojects/residential/Tejbir/metaflute/tejbir4.jpg",
        "assets/Allprojects/residential/Tejbir/metaflute/tejbir6.jpg",
        "assets/Allprojects/residential/Tejbir/metaflute/tejbir7.jpg",
        "assets/Allprojects/residential/Tejbir/metaflute/tejbir14.jpg",
        "assets/Allprojects/residential/Tejbir/metalouver/tejbir2.jpg",
        "assets/Allprojects/residential/Tejbir/metalouver/tejbir3.jpg",
        "assets/Allprojects/residential/Tejbir/metalouver/tejbir8.jpg",
        "assets/Allprojects/residential/Tejbir/metalouver/tejbir11.jpg",
        "assets/Allprojects/residential/Tejbir/metalouver/tejbir13.jpg",
        "assets/Allprojects/residential/Tejbir/solid-panel/tejbir5.jpg",
        "assets/Allprojects/residential/Tejbir/solid-panel/tejbir9.jpg",
        "assets/Allprojects/residential/Tejbir/solid-panel/tejbir10.jpg",
        "assets/Allprojects/residential/Tejbir/solid-panel/tejbir12.jpg",
      ],
    },
    {
      name: "z1012",
      images: [
        "assets/Allprojects/residential/z1012/metaflute/z10122.jpg",
        "assets/Allprojects/residential/z1012/metaflute/z10123.jpg",
        "assets/Allprojects/residential/z1012/metaflute/z10128.jpg",
        "assets/Allprojects/residential/z1012/metaflute/z101210.jpg",
        "assets/Allprojects/residential/z1012/metaflute/z101211.jpg",
        "assets/Allprojects/residential/z1012/metashingle/z10124.jpg",
        "assets/Allprojects/residential/z1012/metashingle/z10125.jpg",
        "assets/Allprojects/residential/z1012/metashingle/z10126.jpg",
        "assets/Allprojects/residential/z1012/metashingle/z10127.jpg",
        "assets/Allprojects/residential/z1012/metashingle/z10129.jpg",
      ],
    },
  ];

  function projectClickHandler(img) {
    const selectedSubProjectCat = img.imgPath.split("/")[3];
    const selectedProject = singleprojectDetail.find(
      (item) => item.name === selectedSubProjectCat
    );
    navigate("/single-project", { state: { selectedProject } }); // Redirect to SingleProduct page
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
    if (location.pathname === "/all-projects") {
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
    <Container
      className="app-container text-white"
      style={{ marginTop: "100px" }}
    >
      <Row>
        <Col md={9} className="gallery-project">
          <Row>
            {filteredImages.map((img, index) => (
              <Col
                key={index}
                sm={12}
                md={6}
                lg={4}
                onClick={() => projectClickHandler(img)}
                style={{ padding: "7px" }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/${img.imgPath}`}
                  alt={`Gallery ${index}`}
                  className="img-fluid"
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={3} className="sidebar-section">
          <h2 className="text-justify">Our Projects</h2>
          <div className="sidebar p-4">
            <ListGroup variant="flush">
              {/* <ListGroup.Item action variant="dark" style={{color: "#fff"}}>Section</ListGroup.Item> */}
              <ListGroup.Item
                action
                variant="dark"
                className={selectedCategory === "" ? "highlight" : "dim"}
                onClick={() => filterImagesByCategory("")}
              >
                All
              </ListGroup.Item>
              <ListGroup.Item
                action
                variant="dark"
                className={
                  selectedCategory === "residential" ? "highlight" : "dim"
                }
                onClick={() => filterImagesByCategory("residential")}
              >
                residential
              </ListGroup.Item>
              <ListGroup.Item
                action
                variant="dark"
                className={
                  selectedCategory === "commercial" ? "highlight" : "dim"
                }
                onClick={() => filterImagesByCategory("commercial")}
              >
                commercial
              </ListGroup.Item>
            </ListGroup>
          </div>
          <button className="dream-button">
            <span>Build Your Dream</span>
          </button>
        </Col>
      </Row>
      <Footer className="all-projects-footer" />
    </Container>
  );
}

export default Allprojects;
