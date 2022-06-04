import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "white",
          
        },
      },
    },
  },

  typography: {
    allVariants: {
      fontFamily: "Poppins",
      textTransform: "none",
    },
  },

  palette: {
    primary: {
      main: "#0091CD",
      dark: "#37E813",
      light: "#81c784",
    },
    secondary: {
      main: "#1F1F1F",
      dark: "#0e003f",
      light: "#BEBEBE",
    },
    otherColor: {},
  },
});
