import styles from "../../../../styles/Home.module.scss";

const Locations = () => {
  return (
    <section className={styles.location}>
      <div className={styles.menu_card}>
        <div className={styles.menu_image}> </div>
        <h3 className={styles.menu_subtitle}>Punto de atencion al cliente Envigado</h3>
      </div>

      <div className={styles.menu_card}>
        <div className={styles.menu_image}> </div>
        <h3 className={styles.menu_subtitle}>Punto de atencion al cliente Santafe</h3>
      </div>
    </section>
  );
};

export default Locations;
