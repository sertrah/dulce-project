import styles from "../../../../styles/Home.module.scss";

const Locations = () => {
  return (
    <section className={styles.location}>
      <div className={styles.menu_card}>
        <div className={styles.menu_image}> </div>
        <h2 className={styles.menu_title}>Punto de atencion al cliente Envigado</h2>
      </div>

      <div className={styles.menu_card}>
        <div className={styles.menu_image}> </div>
        <h2 className={styles.menu_title}>Punto de atencion al cliente Santafe</h2>
      </div>
    </section>
  );
};

export default Locations;
