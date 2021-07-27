import Head from "next/head";

import CoverPage from "./../viewLayer/Home/components/CoverPage/CoverPage";
import Updates from "./../viewLayer/Home/components/Updates/Updates";
import Menu from "./../viewLayer/Home/components/Menu/Menu";
import Reservation from "./../viewLayer/Home/components/Reservation/Reservation";
import Locations from "./../viewLayer/Home/components/Locations/Locations";

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
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <NavBar />
      <CoverPage />
      <Updates />
      <Menu />
      <Reservation />
      <Locations />
    </motion.div>
  );
};

export default Home;
