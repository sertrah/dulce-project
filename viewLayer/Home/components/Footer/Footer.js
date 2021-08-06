import styles from "../../../../styles/Home.module.scss";
import Avellanas from "../../../../public/img/Avellanas.svg";


const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div>        
        < Avellanas className={styles.footer_logo} />

        </div>
      </section>

    </>
  );
}

export default Footer;