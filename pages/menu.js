import Head from "next/head";
import { motion } from "framer-motion";

import NavBar from "../viewLayer/Utils/NavBar/NavBar";
import Card from "../viewLayer/Utils/Card";
import MenuTabs from "../viewLayer/Menu/compoenets/Tabs";

export default function Home() {
  const menuDetails = {
    titles: ["Huevos", "Brunch", "Brunch conciente", "Bowl", "Crepes", "Sandiwch", "Croissants", "Tortas", "Postres", "Bebidas Calientes", "Bebidas Fria"],
    colors: ["#F2958F", "#C094D7", "#94d7a5", "#d79494"],
    icons: ["egg", "egg", "egg", "egg", "egg", "egg", "egg", "egg", "egg", "egg", "egg"],
    bgImages: ["/images/menu/menu-1.jpg", "/images/menu/menu-2.jpg", "/images/menu/menu-3.jpg", "/images/menu/menu-4.jpg", "/images/menu/menu-5.jpg", "/images/menu/menu-6.jpg", "/images/menu/menu-7.jpg", "/images/menu/menu-8.jpg", "/images/menu/menu-9.jpg", "/images/menu/menu-10.jpg", "/images/menu/menu-11.jpg"],
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

  const menuDetails2 = { 
    titles: ["Huevos", "Brunch", "Brunch conciente", "Bowl", "Crepes", "Sandiwch", "Croissants", "Tortas", "Postres", "Bebidas Calientes", "Bebidas Fria"],
    products: [
      {
        color: "#F2958F",
        icon: "🥚",
        bgImage: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        items: [ 
          { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" }
        ]
      },
      {
        color: "#C094D7",
        icon: "ICONBRUNCH",
        bgImage: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        items: [ 
          { name: "Brunch", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" }
        ]
      },
    ]
  }
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
