import React from "react";
import Head from "next/head";

import { motion } from "framer-motion";

import Footer from "../viewLayer/Utils/Footer/Footer";
import NavBar from "../viewLayer/Utils/NavBar/NavBar";
import Card from "../viewLayer/Utils/Card";
import MenuTabs from "../viewLayer/Menu/compoenets/Tabs";
import { menuDetails } from "../constants/menu";


export default function Home() {
  const [activeNumberTab, setActiveNumberTab] = React.useState(0);
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <NavBar solidbg />
      <Card title="Menu" image={menuDetails.bgImages[activeNumberTab]} />
      <MenuTabs menuDetails={menuDetails} activeNumberTab={activeNumberTab} setActiveNumberTab={setActiveNumberTab} />
      <Footer />
    </motion.div>
  );
}
