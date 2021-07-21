import Head from "next/head";

import CoverPage from "./../viewLayer/Home/components/CoverPage/CoverPage";
import Updates from "./../viewLayer/Home/components/Updates/Updates";
import AboutUs from "./../viewLayer/Home/components/AboutUs/AboutUs";
import Menu from "./../viewLayer/Home/components/Menu/Menu";
import Reservation from "./../viewLayer/Home/components/Reservation/Reservation";
import Locations from "./../viewLayer/Home/components/Locations/Locations";

import NavBar from "../viewLayer/Utils/NavBar/NavBar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <NavBar />
      <CoverPage />
      <Updates />
      <Menu />
      <Reservation />
      <Locations />
    </>
  );
};

export default Home;
