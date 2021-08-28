import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../../../styles/Home.module.scss";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const AccordionDetails = withStyles({
  root: {
    display: "block",
    textAlign: "left",
    color: "var(--brown)",

  },
})(MuiAccordionDetails);

const Accordion = withStyles({
  root: {
    borderBottom: "1px solid rgba(0, 0, 0, .005)",
    flexDirection: "row-rever",
    boxShadow: "none",
    backgroundColor: "transparent",
    marginBottom: "10px",

    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderBottom: "1px solid var(--brown)",
    border: "none",
    flexDirection: "row-reverse",
    paddingLeft: 0,
    marginBottom: -1,
    minHeight: 40,
    "&$expanded": {
      minHeight: 56,
    },
    "& .MuiAccordionSummary-content": {
      margin: 0,
      "& h3": {
        margin: 0,
        marginLeft: 12,
        color: "var(--brown)",
        fontWeight: "100",
      },
    },
  },
  content: {
    "&$expanded": {},
  },
  expandIcon: {
    transform: "translateX(-5px)",
    color: "var(--brown)",
    padding: 0,
    "&$expanded": {
      transform: "rotate(90deg) translate(0px, 5px)",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

export default function SimpleAccordion() {
  return (
    <div style={{ padding: "0 15px" }}>
      <Accordion>
        <AccordionSummary expandIcon={<ChevronRightIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <h3 className={styles.collapsableTitle}>Punto de Venta</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>Centro Comercial Santafe</p>
          <p>Carrera 43a, Calle 7 Sur - 170 Medellín</p>
          <p>Lun - Dom: 9:00am a 8:00pm</p>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ChevronRightIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <h3>Planta de Produccion</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>Transversal 31 S 32 B-25, Envigado</p>
          <p>Lun - Vier: 10:00am a 6:00pm</p>
          <p>tel. 3234565610</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
