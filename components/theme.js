import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#99E6D8",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    htmlFontSize: 10,
    h2: {
      fontSize: 1,

    },
    body1: {
      fontWeight: 500,
      fontSize: 1,
    },
  },
});

export default theme;
