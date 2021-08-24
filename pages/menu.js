import Head from "next/head";
import { motion } from "framer-motion";

import NavBar from "../viewLayer/Utils/NavBar/NavBar";
import Card from "../viewLayer/Utils/Card";
import MenuTabs from "../viewLayer/Menu/compoenets/Tabs";

export default function Home() {
  const menuDetails = {
    titles: ["Huevos", "Brunch", "Brunch conciente", "Tortas"],
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
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <NavBar />
      <Card title="Menu" image="https://dam.cocinafacil.com.mx/wp-content/uploads/2019/01/pastel-arcoiris.jpg" />
      <MenuTabs menuDetails={menuDetails} />
    </motion.div>
  );
}
