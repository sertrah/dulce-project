import styles from "../../../../styles/Home.module.scss";
import Button from "@material-ui/core/Button";
import Leaf from "./Leaf";
import Flor from "../../../../public/img/Flor1.svg";

const Updates = () => {
  return (
    <>
      <section className={styles.updates}>
        <div className={styles.updatesFlor1}>
          <Flor />
          <Flor />
         </div>
         <div className={styles.updatesFlor2}>
          <Flor />
         </div>
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
