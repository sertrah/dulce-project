/* eslint-disable @next/next/no-img-element */
import styles from "../../../../styles/Home.module.scss";
import Leaf from "../Updates/Leaf";
import CollapsebleOptions from "./CollapsableOptions";


const Locations = () => {
  return (
    <>
      <section className={styles.locations}>

        <Leaf className={styles.locations_icon} />
        <h2 className={styles.locations_title}> Visitanos</h2>

        <img className={styles.locations_image} src="/img/dulcesantafe.jpeg" alt="" />

        <CollapsebleOptions />




      </section>
    </>
  );
};

export default Locations;
