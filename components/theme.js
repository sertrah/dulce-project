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
    h4: { fontSize: 18 },
    h5: { fontSize: 16 },
    body1: {
      fontWeight: 500,
      fontSize: 18,
    },
    a: {
      color: "#fff",
    },
    button: {
      textTransform: 'none'
    }
  },
  overrides: {
    MuiTabs: {
      root: {
        borderBottom: '1px solid var(--brown)',
        backgroundColor: 'var(--white)',
      },
      indicator: {
        backgroundColor: 'var(--brown)',
      },
    },
    MuiLink: {
      root: {
        color: "var(--brown)",
      }
    },
  
    MuiTab: {
      root: {
        textTransform: 'none',
        minWidth: 72,
        fontWeight: 500,
        fontSize: 18, 
        '&$selected': {
          color: "var(--brown)",
          fontWeight: 500,
        },
        '&:focus': {
          color: "var(--brown)",
          fontWeight: 500,
        },
      },
      textColorInherit: {
        color: "var(--brown)",
      }
    },
  },
});

export default theme;
