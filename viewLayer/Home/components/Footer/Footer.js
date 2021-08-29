import styles from "../../../../styles/Home.module.scss";
import logoCompleto from "../../../../public/img/logoCompleto.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";


const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
      <logoCompleto />    

        <div className={styles.footer_info}>    

        <h2>dulce</h2>
        <h3>3234565610</h3>
        <h3>dulce-avellana@hotmail.com</h3>

        <div className={styles.footer_icon}>
          <FacebookIcon />
          <InstagramIcon />
          <WhatsAppIcon />
          <p>Copyright © 2021 Dulce Avellana </p>
        </div>
        </div>
      </section>

    </>
  );
}

export default Footer;