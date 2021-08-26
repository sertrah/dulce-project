import { useState } from "react";
import styles from "../../../styles/navBar.module.scss";

import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useScrollPosition } from "./useScrollPosition";
import Avellanas from "../../../public/img/Avellanas.svg"
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import Drawer from "@material-ui/core/Drawer";
import NavLogo from "./Logo";

import Link from "./../Link";

// Toda funcion que empieze con su primera letra en mayus
// es por que es un Componente de React === Componente funcional
const NavBar = () => {
  const [changeOnScroll, setChangeOnScroll] = useState(false);
  const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);

  const handleDrawerToggle = () => {
    setIsOpenSideMenu(false);
  };

  useScrollPosition(
    ({ currPos }) => {
      currPos.y < -350 ? setChangeOnScroll(true) : setChangeOnScroll(false);
    },
    [changeOnScroll]
  );

  return (
    <>
      <nav
        className={`${styles.nav} ${changeOnScroll ? styles.nav_change : ""}`}
      >
        <MenuIcon
          className={styles.nav_btn}
          onClick={() => {
            setIsOpenSideMenu(true);
          }}
        />
        <div className={styles.nav_brand}>
          <NavLogo className={styles.nav_logo} />
        </div>
        <ShoppingCartIcon className={styles.nav_shopping} />
      </nav>
      <Drawer
        anchor={"left"}
        open={isOpenSideMenu}
        onClose={handleDrawerToggle}
      >
        <div className={styles.nav_mobile}>
          <MenuOpenIcon
            className="nav_btn"
            onClick={() => {
              setIsOpenSideMenu(false);
            }}
          />
          <div className={styles.nav_brand}>
          <NavLogo className={styles.nav_logo} />

          </div>
        </div>
        <ul className={styles.navitem}>
          <li>
            <Link className={styles.navitemLink} href="/" color="secondary">
              Inicio
            </Link>
          </li>
          <li>
            <Link className={styles.navitemLink} href="/" color="secondary">
              Menu
            </Link>
          </li>
          <li>
            <Link className={styles.navitemLink} href="/" color="secondary">
              Conoce nuestra historia
            </Link>
          </li>
          <li>
            <Link className={styles.navitemLink} href="/" color="secondary">
              Contactanos
            </Link>
          </li>
        </ul>
        <div className={styles.navRedes}>
          <FacebookIcon />
          <InstagramIcon />
          <WhatsAppIcon />
          <p>Copyright © 2021 Dulce Avellana </p>
        </div>
      </Drawer>
    </>
  );
};

export default NavBar;
