import { ThemeProvider } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { darkTheme, lightTheme } from '../components/ui/theme';
import NavBar from '../components/NavBar';
import { Box } from '@mui/material';


const MainLayout = ({ children, mode }) => {

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>       
        <Box sx={{
          width: {
            xs: "80vw",
            lg: "1110px"
          }, mx: "auto"
        }}>
          <NavBar />
          <HelmetProvider>
            {children}
          </HelmetProvider>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MainLayout;
