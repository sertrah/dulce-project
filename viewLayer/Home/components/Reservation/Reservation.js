import Button from "@material-ui/core/Button";

import "./style.scss";

import styles from "../../../../styles/Home.module.scss";

const Reservation = () => {
  return (
    <>
      <section className={styles.reservation}>
      <Button variant="contained" color="primary">
            Reservar ahora! 
          </Button>
      </section>
    </>
  );
};

export default Reservation;
