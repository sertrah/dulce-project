import Link from "./../../../Utils/Link";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import styles from "../../../../styles/Home.module.scss";

const AboutUs = () => {
  return (
    <>
      <section className={styles.aboutUs}>
        <h2 className="aboutUs_title text_handwrite">
          Detras de cada plato una historia con amor... ♡
        </h2>
        <Link
          className="aboutUs_link"
          href="/"
          color="secondary"
        >
          conoce mas <ArrowRightAltIcon />
        </Link>
      </section>
    </>
  );
};

export default AboutUs;
