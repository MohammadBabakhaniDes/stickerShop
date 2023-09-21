import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      main: '#8be9fd',
      dark: '#01bee6'
    },
    secondary: {  
      main: '#bd93f9',
      dark: '#5e00e5'
    }
  },
  typography: {
    fontFamily: "tanha, vazir, Roboto",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none"
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
    primary: {
      main: '#8be9fd',  
    },
    secondary: {
      main: '#bd93f9'
    }
  },
  typography: {
    fontFamily: "vazir, tahoma, Roboto",
  },
  
});
