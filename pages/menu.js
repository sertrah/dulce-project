import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import NavBar from "../viewLayer/Utils/NavBar/NavBar";
import Card from "../viewLayer/Utils/Card";
import MenuTabs from "../viewLayer/Menu/compoenets/Tabs";

export default function Home() {
  const [activeNumberTab, setActiveNumberTab] = React.useState(0);

  const menuDetails = {
    titles: ["Huevos", "Brunch", "Brunch conciente", "Bowl", "Crepes", "Sandiwch", "Croissants", "Tortas", "Postres", "Bebidas Calientes", "Bebidas Fria"],
    colors: ["#F2958F", "#C094D7", "#94d7a5", "#d79494"],
    icons: ["egg", "egg", "egg", "egg", "egg", "egg", "egg", "egg", "egg", "egg", "egg"],
    bgImages: ["https://thefoodtech.com/wp-content/uploads/2020/10/bakery.jpg", 
    "https://dam.cocinafacil.com.mx/wp-content/uploads/2019/01/pastel-arcoiris.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBInIPRv3isewYe8vldaAvjGBJjnBhvHVbg&usqp=CAU", 
    "https://thefoodtech.com/wp-content/uploads/2020/10/bakery.jpg", 
    "/images/menu/menu-5.jpg", "/images/menu/menu-6.jpg", 
    "/images/menu/menu-7.jpg", "/images/menu/menu-8.jpg", "/images/menu/menu-9.jpg", 
    "/images/menu/menu-10.jpg", "/images/menu/menu-11.jpg"],
    products: [
      [
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
      ],
      [
        { name: "Omelette", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Omelette", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Omelette", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Omelette", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
      ],
      [
        { name: "EMPANADA", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "EMPANADA", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "EMPANADA", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "EMPANADA", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
      ],
      [
        { name: "Velvet", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Velvet", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Velvet", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Velvet", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
      ],
    ],
  };
  console.log(menuDetails.bgImages[activeNumberTab])
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <NavBar />
      <Card title="Menu" image={menuDetails.bgImages[activeNumberTab]} />
      <MenuTabs menuDetails={menuDetails} activeNumberTab={activeNumberTab} setActiveNumberTab={setActiveNumberTab} />
    </motion.div>
  );
}
