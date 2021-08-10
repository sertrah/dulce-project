import Link from "./../../../Utils/Link";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import styles from "../../../../styles/Home.module.scss";
import Leaf from "../Updates/Leaf";

const AboutUs = () => {
  return (
    <>
      <section className={styles.aboutUs}>

        <h2 className={styles.aboutUs_text}>
          Detras de cada plato hay una historia con amor...
        </h2>
        <Leaf className={styles.aboutUs_icon} />


        <Link
          className={styles.aboutUs_link}
          href="/"
          color=""
        >
          conoce mas  <ArrowRightAltIcon />
        </Link>
      </section>
    </>
  );
};

export default AboutUs;
