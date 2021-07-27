import styles from "../../../../styles/Home.module.scss";
import Button from "@material-ui/core/Button";
import Leaf from "./Leaf";

const Updates = () => {
  return (
    <>
      <section className={styles.updates}>
        <Button variant="contained" className={styles.roundButton}>
          <div>
            <p>Eventos</p>
            <Leaf />
          </div>
        </Button>
        <Button variant="contained" className={styles.roundButton}>
          <div>
            <p>Eventos</p>
            <Leaf />
          </div>
        </Button>
        <Button variant="contained" className={styles.roundButton}>
          <div>
            <p>Eventos</p>
            <Leaf />
          </div>
        </Button>
      </section>
    </>
  );
};

export default Updates;
