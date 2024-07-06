import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useTheme, ThemeProvider as CustomThemeProvider } from '../../context/ThemeContext';
import Navbar from '@/components/NavBar';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer>
          <Navbar />
          <MainContent>
            <Component {...pageProps} />
          </MainContent>
          <Footer />
        </AppContainer>
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
