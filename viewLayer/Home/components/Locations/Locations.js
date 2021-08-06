/* eslint-disable @next/next/no-img-element */
import styles from "../../../../styles/Home.module.scss";
import TitleWithIcon from "../../../../components/TitleWithIcon";

const locationsView = [
  { img: 'https://santafesitioweb.s3.amazonaws.com/sitio-web/brand_gallery_images/951009/data_original.?1616522422', title: 'Punto de venta', text: 'CC santafe' },
  { img: 'https://santafesitioweb.s3.amazonaws.com/sitio-web/brand_gallery_images/951009/data_original.?1616522422', title: 'Planta de produccion', text: 'Evnigado' },
];

const Locations = () => {
  return (
    <section className={styles.location}>
      <TitleWithIcon className={styles.locationTitle} >VISITANOS</TitleWithIcon>
      {
        locationsView.map((location, index) => {

          return (
            <div className={styles.locationItem} key={index}>
              <img
                src={location.img}
                alt={location.title}
              />
              <h3 className={styles.locationSubTitle}>{location.title}</h3>
              <p className={styles.locationText}>{location.text}</p>
            </div>
          );
        })
      }
    </section>
  );
};

export default Locations;
