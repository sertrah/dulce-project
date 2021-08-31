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
        { name: "Huevos Fritos", description: "Sevidos con tocineta caramelizada. ", price: "6.", decimalPrice: "900", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/222091653_4225502087517196_2479046264125928673_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_ohc=KTk5UVrKXKIAX-TZMAG&_nc_ht=scontent.feoh1-1.fna&oh=a5a7384fb114e9f3e3731833c6dc3457&oe=61541121" },
        { name: "Huevos del Campo", description: "Huevo revueltos con tradicional hogao. ", price: "7.", decimalPrice: "500", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/100539360_3028544937212923_1988083719289700352_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=a26aad&_nc_ohc=fHPEv6pAkB4AX-RQRzT&_nc_ht=scontent.feoh1-1.fna&oh=0e32520001aad2d194c6f5a7c469ce48&oe=61520782"},
        { name: "Omelette Dulce Avellana", description: "La receta de la casa, con una mezcla de vegetales... ", price: "15.", decimalPrice: "900", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/226770404_4219714494762622_1563250833981757649_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_ohc=2XFxFNwbEFIAX-DPMFT&_nc_ht=scontent.feoh1-1.fna&oh=cb0c76115d3840f656d71c17aac7cf18&oe=61556993" },
        { name: "Omelet Vegetareano", description: "Exquisita mezcla de tomate cherry, champiñones...", price: "11.", decimalPrice: "900", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/93638562_2918655964868488_5938710885735333888_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=IJrTEKUS6EMAX8yRj9a&_nc_oc=AQl8lyrnsDyWlJGZwoQC5DbcSRBdczf9adFlPtgpxlBLwttuRtlertC0KcdttHLaqhg&_nc_ht=scontent.feoh1-1.fna&oh=809d7c95352e9d785943cd19c95c449a&oe=61542844"},
        { name: "Omelette con jamon tipo york y cinco quesos", description: "Con jamon york, queso mozarella, tocineta...", price: "14.", decimalPrice: "500", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/211298247_4164906096910129_5354316647772725534_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=Sks5UATYVSAAX-WLXfP&_nc_ht=scontent.feoh1-1.fna&oh=47924f43dcc901c756d24b423c27ea8d&oe=61552B59"},
        { name: "Huevos Florentinos", description: "Huevos pochados sobre pan rustico multigranos... ", price: "17.", decimalPrice: "500", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/216965129_4173375182729887_8095316651686947480_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=a26aad&_nc_ohc=yx30ZnImQfcAX8_0qwP&_nc_ht=scontent.feoh1-1.fna&oh=7f19b254d943536eaaa53721296aa4fe&oe=6152FBCE"},
        { name: "Huevos Benedictinos", description: "Huevos pochados bañados en nuestra deliciosa... ", price: "17.", decimalPrice: "500", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/226770404_4219714494762622_1563250833981757649_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_ohc=2XFxFNwbEFIAX-DPMFT&_nc_ht=scontent.feoh1-1.fna&oh=cb0c76115d3840f656d71c17aac7cf18&oe=61556993" },
        { name: "Huevos Italianos", description: "Huevos frios dobre pan rustico multicereal...", price: "20.", decimalPrice: "900", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/222091653_4225502087517196_2479046264125928673_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_ohc=KTk5UVrKXKIAX-TZMAG&_nc_ht=scontent.feoh1-1.fna&oh=a5a7384fb114e9f3e3731833c6dc3457&oe=61541121" },
        { name: "Huevos Royal", description: "Huevos revueltos con cebollin, carpacho de ... ", price: "21.", decimalPrice: "500", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/211298247_4164906096910129_5354316647772725534_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=Sks5UATYVSAAX-WLXfP&_nc_ht=scontent.feoh1-1.fna&oh=47924f43dcc901c756d24b423c27ea8d&oe=61552B59" },

      ],
      [
        { name: "Fritata Dulce Avellana", description: "Tortilla gratinada al horno, con jamon...", price: "15.", decimalPrice: "900", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/222091653_4225502087517196_2479046264125928673_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_ohc=KTk5UVrKXKIAX-TZMAG&_nc_ht=scontent.feoh1-1.fna&oh=a5a7384fb114e9f3e3731833c6dc3457&oe=61541121" },
        { name: "Fritata de Tocineta, Jamon y queso", description: "Tortilla gratinada al horno, con jamon... ", price: "15.", decimalPrice: "200", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/211298247_4164906096910129_5354316647772725534_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=Sks5UATYVSAAX-WLXfP&_nc_ht=scontent.feoh1-1.fna&oh=47924f43dcc901c756d24b423c27ea8d&oe=61552B59" },
        { name: "New York Bagel", description: "Delicioso bagel de ajonjoli, con huvos...", price: "18.", decimalPrice: "900", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/217519196_4234258816641523_5634582345713062270_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=I79QSq5K9VQAX_7iJaZ&_nc_ht=scontent.feoh1-1.fna&oh=d0bc258acda23ab63390bcad55b6fbe0&oe=61559176" },
        { name: "Parmesan French Toast Sandwich", description: "Tortilla gratinada al horno, con jamon...", price: "22.", decimalPrice: "500", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/169922527_3903406199726788_701784508218336035_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=a26aad&_nc_ohc=9JDI8B7R0wsAX_Bs-wh&_nc_ht=scontent.feoh1-1.fna&oh=e8ef39f6e44f0f91b5713e7862589859&oe=6154367F" },
        { name: "Croque-Madame", description: "Sandwich de jamon tipo york, queso... ", price: "18.", decimalPrice: "500", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/133833402_3618609588206452_7980196893739455826_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=lnC4TTqneOcAX86Fkp3&_nc_ht=scontent.feoh1-1.fna&oh=0158507fb6a6b31eda10795a96fb3a85&oe=6154A98C" },
        { name: "Tostadas Francesas Dulces", description: "Acompañadas de tocineta crocante, frosting de...", price: "17.", decimalPrice: "400", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/125299901_3505291242871621_4390702276802899605_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=Ikih1sHVy4sAX_Nm6G_&_nc_oc=AQmt13PG4IDvcqPtrcnFxnBfT4qFIYIUixJp5J0ht3mkcj-KT1Sr46cube6Rcp133us&_nc_ht=scontent.feoh1-1.fna&oh=02076e562b4d0395487903f076fef509&oe=6154A436"},
        { name: "Pancakes con Nutella", description: "Acompañados con nutella,fresas y banano. ", price: "19.", decimalPrice: "500", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/211298247_4164906096910129_5354316647772725534_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=Sks5UATYVSAAX-WLXfP&_nc_ht=scontent.feoh1-1.fna&oh=47924f43dcc901c756d24b423c27ea8d&oe=61552B59" },
        { name: "Pancakes con Tocineta", description: "Suaves pancakes acompañados de tocineta...", price: "16.", decimalPrice: "500", img: "https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/133833402_3618609588206452_7980196893739455826_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=lnC4TTqneOcAX86Fkp3&_nc_ht=scontent.feoh1-1.fna&oh=0158507fb6a6b31eda10795a96fb3a85&oe=6154A98C" },
        { name: "Pan Multicereal o Pan Brioche tostado", description: "Dos rodajas de pan multicereal tostado... ", price: "4.", decimalPrice: "700", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/93933285_2918656064868478_8173703680642514944_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_ohc=1hLBVSDmd3QAX9PF1uV&_nc_ht=scontent.feoh1-1.fna&oh=5471092324093270f775e381e17c3805&oe=6152CA40" },

      ],
      [
        { name: "Waffle Frances", description: "Tortilla gratinada al horno, con jamon...", price: "17.", decimalPrice: "900", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/222091653_4225502087517196_2479046264125928673_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_ohc=KTk5UVrKXKIAX-TZMAG&_nc_ht=scontent.feoh1-1.fna&oh=a5a7384fb114e9f3e3731833c6dc3457&oe=61541121" },
        { name: "Waffle de Pesto", description: "Tortilla gratinada al horno, con jamon... ", price: "16.", decimalPrice: "200", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/211298247_4164906096910129_5354316647772725534_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=Sks5UATYVSAAX-WLXfP&_nc_ht=scontent.feoh1-1.fna&oh=47924f43dcc901c756d24b423c27ea8d&oe=61552B59" },
        { name: "Happy Waffle", description: "Delicioso bagel de ajonjoli, con huvos...", price: "16.", decimalPrice: "900", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/217519196_4234258816641523_5634582345713062270_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=I79QSq5K9VQAX_7iJaZ&_nc_ht=scontent.feoh1-1.fna&oh=d0bc258acda23ab63390bcad55b6fbe0&oe=61559176" },
        { name: "Avocado Toast", description: "Tortilla gratinada al horno, con jamon...", price: "12.", decimalPrice: "500", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/169922527_3903406199726788_701784508218336035_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=a26aad&_nc_ohc=9JDI8B7R0wsAX_Bs-wh&_nc_ht=scontent.feoh1-1.fna&oh=e8ef39f6e44f0f91b5713e7862589859&oe=6154367F" },
        { name: "Avocado Toast con Huevo", description: "Sandwich de jamon tipo york, queso... ", price: "9.", decimalPrice: "500", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/133833402_3618609588206452_7980196893739455826_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=lnC4TTqneOcAX86Fkp3&_nc_ht=scontent.feoh1-1.fna&oh=0158507fb6a6b31eda10795a96fb3a85&oe=6154A98C" },
        { name: "Tostadas de Banano", description: "Acompañadas de tocineta crocante, frosting de...", price: "11.", decimalPrice: "400", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/125299901_3505291242871621_4390702276802899605_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=Ikih1sHVy4sAX_Nm6G_&_nc_oc=AQmt13PG4IDvcqPtrcnFxnBfT4qFIYIUixJp5J0ht3mkcj-KT1Sr46cube6Rcp133us&_nc_ht=scontent.feoh1-1.fna&oh=02076e562b4d0395487903f076fef509&oe=6154A436"},
        { name: "Tostadas de Manzana Verde", description: "Acompañados con nutella,fresas y banano. ", price: "12.", decimalPrice: "500", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/211298247_4164906096910129_5354316647772725534_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=Sks5UATYVSAAX-WLXfP&_nc_ht=scontent.feoh1-1.fna&oh=47924f43dcc901c756d24b423c27ea8d&oe=61552B59" },
        { name: "Pancakes de Avena y Fresas", description: "Suaves pancakes acompañados de tocineta...", price: "18.", decimalPrice: "500", img: "https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/133833402_3618609588206452_7980196893739455826_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=lnC4TTqneOcAX86Fkp3&_nc_ht=scontent.feoh1-1.fna&oh=0158507fb6a6b31eda10795a96fb3a85&oe=6154A98C" },
        { name: "Pancakes de Avena y Manzana", description: "Dos rodajas de pan multicereal tostado... ", price: "18.", decimalPrice: "700", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/93933285_2918656064868478_8173703680642514944_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_ohc=1hLBVSDmd3QAX9PF1uV&_nc_ht=scontent.feoh1-1.fna&oh=5471092324093270f775e381e17c3805&oe=6152CA40" },
      ],
      [
        { name: "Frutales", description: "Fresas, banano, lychee, durazno, blueberry... ",price: "7.", decimalPrice: "700", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/71108779_2450583485009074_842392229484953600_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=nRnPle2PW68AX8lIvE0&_nc_ht=scontent.feoh1-1.fna&oh=b0cb7a6bb2fb49e9fe824f1eef0a9bed&oe=61557D84"},
        { name: "Frutos Secos y Cereales", description: "Almendras, nuez del brazil, granola de manzana... ", price: "5.", decimalPrice: "500", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/133833402_3618609588206452_7980196893739455826_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=lnC4TTqneOcAX86Fkp3&_nc_ht=scontent.feoh1-1.fna&oh=0158507fb6a6b31eda10795a96fb3a85&oe=6154A98C"},
        { name: "Salsas", price: "4.", description: "Arequipe, frosting, chocolate, confitura... ", decimalPrice: "800", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/138444149_3663688190365258_5732603882362143681_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_ohc=ga6Q3VjbxlEAX8wSep_&_nc_ht=scontent.feoh1-1.fna&oh=566119f6007c2d108962199c5fb2d1bb&oe=61552A75" },
        { name: "Salsas Especiales", description: "Miel de abejas, mantequilla de mani... ", price: "4.", decimalPrice: "800", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/92230978_2897805990286819_3187975797994422272_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a26aad&_nc_ohc=L2cE0a26qmoAX9ClM4p&_nc_ht=scontent.feoh1-1.fna&oh=1decb611a6b6be7fb565b2494c27ad32&oe=6155F73F" },
      ],
      [
        { name: "Crepe de pavo", description: "Tortilla gratinada al horno, con jamon...", price: "15.", decimalPrice: "900", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/222091653_4225502087517196_2479046264125928673_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_ohc=KTk5UVrKXKIAX-TZMAG&_nc_ht=scontent.feoh1-1.fna&oh=a5a7384fb114e9f3e3731833c6dc3457&oe=61541121" },
        { name: "Crepe Capresse y pavo", description: "Tortilla gratinada al horno, con jamon... ", price: "15.", decimalPrice: "200", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/211298247_4164906096910129_5354316647772725534_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=Sks5UATYVSAAX-WLXfP&_nc_ht=scontent.feoh1-1.fna&oh=47924f43dcc901c756d24b423c27ea8d&oe=61552B59" },
        { name: "Crepe Capresse", description: "Delicioso bagel de ajonjoli, con huvos...", price: "18.", decimalPrice: "900", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/217519196_4234258816641523_5634582345713062270_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=I79QSq5K9VQAX_7iJaZ&_nc_ht=scontent.feoh1-1.fna&oh=d0bc258acda23ab63390bcad55b6fbe0&oe=61559176" },
        { name: "Crepe de Nutella Fresas y Banano", description: "Tortilla gratinada al horno, con jamon...", price: "22.", decimalPrice: "500", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/169922527_3903406199726788_701784508218336035_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=a26aad&_nc_ohc=9JDI8B7R0wsAX_Bs-wh&_nc_ht=scontent.feoh1-1.fna&oh=e8ef39f6e44f0f91b5713e7862589859&oe=6154367F" },
        { name: "Crepe Dulce Tentacion", description: "Sandwich de jamon tipo york, queso... ", price: "18.", decimalPrice: "500", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/133833402_3618609588206452_7980196893739455826_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=lnC4TTqneOcAX86Fkp3&_nc_ht=scontent.feoh1-1.fna&oh=0158507fb6a6b31eda10795a96fb3a85&oe=6154A98C" },
        { name: "Crepe de Pulled Pork", description: "Acompañadas de tocineta crocante, frosting de...", price: "17.", decimalPrice: "400", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/125299901_3505291242871621_4390702276802899605_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=Ikih1sHVy4sAX_Nm6G_&_nc_oc=AQmt13PG4IDvcqPtrcnFxnBfT4qFIYIUixJp5J0ht3mkcj-KT1Sr46cube6Rcp133us&_nc_ht=scontent.feoh1-1.fna&oh=02076e562b4d0395487903f076fef509&oe=6154A436"},
        { name: "Crepe vegetareano", description: "Acompañados con nutella,fresas y banano. ", price: "19.", decimalPrice: "500", img:"https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/211298247_4164906096910129_5354316647772725534_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=Sks5UATYVSAAX-WLXfP&_nc_ht=scontent.feoh1-1.fna&oh=47924f43dcc901c756d24b423c27ea8d&oe=61552B59" },
      ],
      [
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
      ],
      [
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
      ],
      [
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
      ],
      [
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
      ],
      [
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
      ],
      [
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
        { name: "Torta", description: "bla bla bla bal bla ", price: "16", decimalPrice: "500" },
      ],
    ],
  };
  console.log(menuDetails.bgImages[activeNumberTab])
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <NavBar solidbg/>
      <Card title="Menu" image={menuDetails.bgImages[activeNumberTab]} />
      <MenuTabs menuDetails={menuDetails} activeNumberTab={activeNumberTab} setActiveNumberTab={setActiveNumberTab} />
    </motion.div>
  );
}
