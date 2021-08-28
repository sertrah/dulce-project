import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuOptions from "./MenuOptions";
import Hoja from "../../../public/img/Hoja.svg";
import styles from "../../../styles/Menu.module.scss";

function TabPanel(props) {
  const { children, value, index, color, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      style={{ backgroundColor: value === index && color }}
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
  color: PropTypes.string.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function MenuTabs({ menuDetails, activeNumberTab, setActiveNumberTab }) {

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
            <Tab
              key={`menuTabs-${index}`}
              label={option}
              icon={<Hoja />}
              style={{ backgroundColor: activeNumberTab === index && menuDetails.colors[index] }}
              className={styles.tabsItem}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </AppBar>
      {/*  ACA se muestra lo que se selecciona en cada pesta;a */}
      {menuDetails.products.map((option, index) => (
        <TabPanel key={`menuOptions-${index}`} value={activeNumberTab} index={index} color={menuDetails.colors[index]}>
          <MenuOptions products={option} />
        </TabPanel>
      ))}
    </div>
  );
}

MenuTabs.propTypes = {
  menuDetails: PropTypes.array.isRequired,
};

export default MenuTabs;
