import React, { useRef, useEffect } from "react";

import Head from "next/head";

import CoverPage from "./../viewLayer/Home/components/CoverPage/CoverPage";
import Updates from "./../viewLayer/Home/components/Updates/Updates";
import Menu from "./../viewLayer/Home/components/Menu/Menu";
import CompPrueba from "./../viewLayer/Home/components/Menu/FlatSlider";
import Locations from "./../viewLayer/Home/components/Locations/Locations";
import Footer from "./../viewLayer/Home/components/Footer/Footer";
import AboutUs from "./../viewLayer/Home/components/AboutUs/AboutUs";
import NavBar from "../viewLayer/Utils/NavBar/NavBar";
import { motion } from "framer-motion";

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Home = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      desc: "Silent Waters in the mountains in midst of Himilayas",
    },
    {
      image:
        "https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80",
      desc: "Red fort in India New Delhi is a magnificient masterpeiece of humans",
    },
    {
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      desc: "Sample Description below the image for representation purpose only",
    },
    
  ];
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <NavBar />
      <CoverPage />
      <Updates />
      <Menu />
      <CompPrueba data={data} />
      <AboutUs />
      <Locations />
      <Footer />
    </motion.div>
  );
};

export default Home;
