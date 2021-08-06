import { useState, useEffect, useMemo} from "react";

import styles from "../../../../styles/Home.module.scss";
import Button from "@material-ui/core/Button";
import TitleWithIcon from "../../../../components/TitleWithIcon";
import classnames from 'classnames';

const cardItems = [
  {
    title: "BRUNCH",
    image:
      "https://images.unsplash.com/photo-1514589868-e9e8d8b9e8a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  },
  {
    title: "POSTRES",
    image:
      "https://images.unsplash.com/photo-1514589868-e9e8d8b9e8a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  },
  {
    title: "TORTAS",
    image:
      "https://images.unsplash.com/photo-1514589868-e9e8d8b9e8a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  },
];

const Card = ({ title }) => (
  <div className={styles.menu_card}>
    <div className={styles.menu_image}> </div>
    <h2 className={styles.menu_title}>
      <span className={styles.menu_title_subtitle}>Antojate </span>
      {title}
    </h2>
    <Button size="large" variant="contained" className={styles.menu_btn}>
      probar
    </Button>
  </div>
);

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState({value: 0, isPositive: true});

  const cardItems = useMemo(
    () => [
      {
        title: "BRUNCH",
        image:
          "https://images.unsplash.com/photo-1514589868-e9e8d8b9e8a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      },
      {
        title: "POSTRES",
        image:
          "https://images.unsplash.com/photo-1514589868-e9e8d8b9e8a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      },
      {
        title: "TORTAS",
        image:
          "https://images.unsplash.com/photo-1514589868-e9e8d8b9e8a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      },
    ],
    []
  );

  useEffect(() => {
    // CODIGO A EJECUTAR CUANDO SE EJECUTE EL EFFECT
    // Cuando sea el primer ejecuto el código
    // Cuando se cambie el estado del componente
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => {
        if( prev.isPositive) {
          if( prev.value >= 2  ) {
            return { value: 2, isPositive: false };
          }
          return { value: prev.value + 1, isPositive: true };
        }
        if( prev.value === 0  ) {
          return { value: 0, isPositive: true };
        }
        return { value: prev.value - 1, isPositive: false };
      });
    }, 2000);
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [cardItems]);

  return (
    <>
      <section className={styles.menu}>
        <TitleWithIcon>Nuestros FAVORITOS </TitleWithIcon>
        <div className={styles.carousel}>
          <div className={styles.carousel_inner} style={{ transform: `translateX(-${activeIndex.value  * 100}%)` }}>
            {activeIndex.value === 0 && <div className={styles.carousel_first}>
                <Card  title="PRUEBA" />
            </div>}
            {cardItems.map((item, index) => (
              <div key={index}  className={classnames(styles.carousel_item, activeIndex.value  === index && styles.active)}>
                <Card key={`card-${index}`} {...item} />
              </div>
            ))}
            {activeIndex.value  === 2 && <div className={styles.carousel_item}>
                <Card  title="PRUEBA" />
            </div>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
