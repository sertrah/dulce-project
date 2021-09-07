import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuOptions from "./MenuOptions";
import Hoja from "../../../public/img/Hoja.svg";
import styles from "../../../styles/Menu.module.scss";
import MenuDialog from "./MenuManners";

function TabPanel(props) {
  const { children, value, index, color, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      className={styles.tabPanel}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

function MenuTabs({ menuDetails, activeNumberTab, setActiveNumberTab }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  const handleChange = (event, newValue) => {
    setActiveNumberTab(newValue);
  };

  return (
    <div className={styles.tabs}>
      <AppBar className={styles.tabsHeader} position="static" color="default">
        <Tabs
          value={activeNumberTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          aria-label="Esta es la seccion que tiene el menu, has click en el menu que deseas mas informacion"
        >
          {/*           EL TAB DE CADA PESTA:A
           */}{" "}
          {menuDetails.titles.map((option, index) => (
            <Tab key={`menuTabs-${index}`} label={option} className={styles.tabsItem} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      {/*  ACA se muestra lo que se selecciona en cada pesta;a */}
      {menuDetails.products.map((option, index) => (
        <TabPanel key={`menuOptions-${index}`} value={activeNumberTab} index={index} color={menuDetails.colors[index]}>
          <MenuOptions products={option} onOpenDialog={handleClickOpen} />
        </TabPanel>
      ))}

      <MenuDialog
        title="French Toast"
        image="https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/226770404_4219714494762622_1563250833981757649_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_ohc=2XFxFNwbEFIAX-DPMFT&_nc_ht=scontent.feoh1-1.fna&oh=cb0c76115d3840f656d71c17aac7cf18&oe=61556993"
        description="Huevos fritos acompañados de jamón serrano rábano y vegetales al gusto"
        price="$24 000"
        onClose={handleClose}
        open={open}
      />
    </div>
  );
}

MenuTabs.propTypes = {
  menuDetails: PropTypes.any.isRequired,
};

export default MenuTabs;
