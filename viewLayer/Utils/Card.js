import PropTypes from "prop-types";
import styles from "../../styles/commons.module.scss";

const CardCommon = ({ image, title }) => {
  return (
    <>
      <section className={styles.cardCommon} style={{backgroundImage: `url("${image}")`}}>
        <h1 className={styles.cardCommonTitle}>{title}</h1>
      </section>
    </>
  );
};
CardCommon.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default CardCommon;
