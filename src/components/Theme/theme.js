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
});
