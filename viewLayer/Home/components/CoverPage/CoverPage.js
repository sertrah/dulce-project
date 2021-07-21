import styles from "../../../../styles/Home.module.scss";

const CoverPage = () => {
  return (
    <>
      <section className={styles.coverpage}>
          <h2 className={styles.coverpageTitle}>
              Mas que una reposteria somos una <br/> <span className={styles.coverpageTitle_handwrite}> Familia</span>
          </h2>
          <div className={styles.coverpageOverlay}></div>
      </section>

    </>
  );
}

export default CoverPage;