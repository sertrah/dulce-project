import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import MenuOptions from "./MenuOptions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <p p={3}>
          <Typography>{children}</Typography>
        </p>
      )}
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function MenuTabs({ menuDetails }) {
  const classes = useStyles();
  const [activeNumberTab, setActiveNumberTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setActiveNumberTab(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={activeNumberTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          aria-label="Esta es la seccion que tiene el menu, has click en el menu que deseas mas informacion"
        >
{/*           EL TAB DE CADA PESTA:A
 */}          {menuDetails.titles.map((option, index) => (
            <Tab
              key={`menuTabs-${index}`}
              label={option}
              {...a11yProps(index)}
            />
          ))}
          
        </Tabs>
      </AppBar>
  {/*  ACA se muestra lo que se selecciona en cada pesta;a */}
      {menuDetails.products.map((option, index) => (
        <TabPanel
          key={`menuOptions-${index}`}
          value={activeNumberTab}
          index={index}
        >
          <MenuOptions products={option} />
        </TabPanel>
      ))}
    </div>
  );
}

MenuTabs.propTypes = {
  menuDetails: PropTypes.array.isRequired,
}

export default MenuTabs;