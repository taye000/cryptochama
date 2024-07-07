import { useEffect, useState } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useTheme, ThemeProvider as CustomThemeProvider } from '../context/ThemeContext';
import Navbar from '@/components/NavBar';
import { Locale, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import config from '@/config/configs';
import { useRouter } from 'next/router';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { locale } = useRouter() as { locale: Locale };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Ensure no mismatches between server and client rendering
  }

  const queryClient = new QueryClient();

  return (
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        <CssBaseline />
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider locale={locale}>
              <AppContainer>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
              </AppContainer>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  );
};

const AppWrapper = (props: AppProps) => (
  <CustomThemeProvider>
    <MyApp {...props} />
  </CustomThemeProvider>
);

export default AppWrapper;
