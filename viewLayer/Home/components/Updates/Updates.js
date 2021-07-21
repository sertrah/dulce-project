import styles from "../../../../styles/Home.module.scss";
import Button from "@material-ui/core/Button";

const Updates = () => {
  return (
    <>
      <section className={styles.updates}>
        <Button
          variant="contained"
          className={styles.roundButton}
          style={{ backgroundImage: `url("/img/brunchduce.jpeg")` }}
        ></Button>
        <Button
          variant="contained"
          className={styles.roundButton}
          style={{ backgroundImage: `url("/img/dulce.jpeg")` }}
        ></Button>
        <Button
          variant="contained"
          className={styles.roundButton}
          style={{ backgroundImage: `url("/img/dulcedd.jpeg")` }}
        ></Button>
      </section>
    </>
  );
};

export default Updates;
