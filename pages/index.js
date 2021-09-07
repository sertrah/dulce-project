import React from "react";

import Head from "next/head";

import CoverPage from "./../viewLayer/Home/components/CoverPage/CoverPage";
import Updates from "./../viewLayer/Home/components/Updates/Updates";
import Menu from "./../viewLayer/Home/components/Menu/Menu";
import CompPrueba from "./../viewLayer/Home/components/Menu/Carousel";
import Locations from "./../viewLayer/Home/components/Locations/Locations";
import Footer from "../viewLayer/Utils/Footer/Footer";
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

  const carouselData = {
    timeoutTime: 5000,
    items: [
      {
        key: 1,
        image: "/img/brunchduce.jpeg",
        title: "Antojate",
        caption: "Brunch.",
      },
      {
        key: 2,
        image: "https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/141101530_3685687651498645_3141728605389386242_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=vP738Zk_Az4AX8ovAAd&_nc_ht=scontent.feoh1-1.fna&oh=a246c136e368f054ebb2d0a9353f1ea0&oe=615462B0",
        title: "Antojate",
        caption: "Postres",
      },
      {
        key: 3,
        image: "https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/136992679_3650493041684773_3155486283856968335_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_ohc=ugLj-AUOeGYAX__OT69&_nc_ht=scontent.feoh1-1.fna&oh=ea9d2161618226bfbbac11d5a5de0408&oe=61540EC9",
        title: "Antojate",
        caption: "Tortas",
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
