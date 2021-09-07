import styles from "../../../styles/footer.module.scss";
import Avellanas from "../../../public/img/Avellanas.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PhoneIcon from '@material-ui/icons/Phone';
import Link from "./../Link";


const Footer = () => {
  return (
    <>
      <section className={styles.footer}>

        <Avellanas className={styles.footer_logo} />
        <div className={styles.footer_info}>
          <Link className={styles.footer_text}  href="/#locations"> <StorefrontIcon className={styles.footer_icon} /> Visitanos</Link>
          <p className={styles.footer_text}> <PhoneIcon className={styles.footer_icon} /> (4)3318330</p>
          <p className={styles.footer_text}> <WhatsAppIcon className={styles.footer_icon} /> 3148857900</p>
          <p className={styles.footer_text}> <MailOutlineIcon className={styles.footer_icon} /> dulce-avellana@hotmail.com</p>

        </div>

        <div className={styles.footer_icons}>
          <FacebookIcon />
          <InstagramIcon />
          <p className={styles.footer_copyright}>Copyright © 2021 Dulce Avellana </p>
        </div>

      </section>

    </>
  );
}

export default Footer;