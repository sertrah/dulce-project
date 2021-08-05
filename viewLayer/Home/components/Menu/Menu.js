import styles from "../../../../styles/Home.module.scss";
import Button from "@material-ui/core/Button";
import TitleWithIcon from "../../../../components/TitleWithIcon";

/* 
import { Paper } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
function Example(props) {
  var items = [
    {
      name: "TORTA CHOCOLATE",
      img: "https://www.cakeit.com.au/wp-content/uploads/2020/11/chocolate-cake.jpg",
    },
    {
      name: "BRUNCH",
      img: "https://i.blogs.es/ce8658/brunch1/1366_2000.jpg",
    },
  ];

  return (
    <Carousel indicators={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return (
    <Paper
      elevation={0}
      className="menu-carousel-item"
      style={{ backgroundImage: `url(${item.img})` }}
    >
      <h3>{item.name}</h3>
    </Paper>
  );
} */

const Menu = () => {
  return (
    <>
      <section className={styles.menu}>
        <TitleWithIcon>Nuestros FAVORITOS </TitleWithIcon>

        <div className={styles.menu_card}>
          <div className={styles.menu_image}> </div>
          <h2 className={styles.menu_title}>
            <span className={styles.menu_title_subtitle}>Antojate </span>
            BRUNCH</h2>

          <Button size="large" variant="contained" className={styles.menu_btn}>
            probar
          </Button >
        </div>
      </section>
    </>
  );
}

export default Menu;
