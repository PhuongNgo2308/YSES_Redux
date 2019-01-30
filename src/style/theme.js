import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#689f38" },
    secondary: {
      light: "#0066ff",
      main: "#43a047"
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "Gill Sans",
      "Gill Sans MT",
      "Calibri",
      "Trebuchet MS",
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    useNextVariants: true
  }
});

export default theme;
