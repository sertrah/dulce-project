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
    htmlFontSize: 9,
    h2: {
      fontSize: 24,

    },
    body1: {
      fontWeight: 500,
      fontSize: 18,
    },
    button: {
      textTransform: 'none'
    }
  },
});

export default theme;
