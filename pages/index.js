import React, { useRef, useEffect } from "react";

import Head from "next/head";

import CoverPage from "./../viewLayer/Home/components/CoverPage/CoverPage";
import Updates from "./../viewLayer/Home/components/Updates/Updates";
import Menu from "./../viewLayer/Home/components/Menu/Menu";
import CompPrueba from "./../viewLayer/Home/components/Menu/Carousel";
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
  const carouselData = {
    timeoutTime: 5000,
    items: [
      {
        key: 1,
        image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?fit=crop&fm=jpg&h=825&q=80&w=1325",
        title: "Slide #1",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        key: 2,
        image: "https://images.unsplash.com/photo-1445251836269-d158eaa028a6?fit=crop&fm=jpg&h=825&q=80&w=1325",
        title: "Slide #2",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        key: 3,
        image: "https://images.unsplash.com/photo-1443926818681-717d074a57af?fit=crop&fm=jpg&h=825&q=80&w=1325",
        title: "Slide #3",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  };
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <NavBar />
      <CoverPage />
      <Updates />
      <Menu />
      <CompPrueba {...carouselData} />
      <AboutUs />
      <Locations />
      <Footer />
    </motion.div>
  );
};

export default Home;
