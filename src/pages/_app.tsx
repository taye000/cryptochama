import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import { useTheme, ThemeProvider as CustomThemeProvider } from '../../context/ThemeContext';
import Navbar from '@/components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  );
}

const AppWrapper = (props: AppProps) => (
  <CustomThemeProvider>
    <MyApp {...props} />
  </CustomThemeProvider>
);

export default AppWrapper;
