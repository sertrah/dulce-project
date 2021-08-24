/* eslint-disable @next/next/no-img-element */
import styles from "../../../../styles/Home.module.scss";


const Locations = () => {
  return (
    <>
      <section className={styles.locations}>

        <h2 className={styles.locations_title}> Conoce Nuestros Puntos de Atencion</h2>
        <div className={styles.locationsOverlay}> </div>

        <div className={styles.locations_descriptions}>
          <h3>Planta de Produccion</h3>
          <p> Envigado </p>

          <h3>Punto de Venta</h3>
          <p> Cc Santa Fe </p>
        </div>






      </section>
    </>
  );
};

export default Locations;
