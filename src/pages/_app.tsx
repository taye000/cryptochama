import { useEffect, useState } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import { useTheme, ThemeProvider as CustomThemeProvider } from '../context/ThemeContext';
import Navbar from '@/components/NavBar';
import { darkTheme, lightTheme, Locale, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import config from '@/config/configs';
import { useRouter } from 'next/router';
import { AppContainer } from '@/styles/styled';
import { Toaster } from 'react-hot-toast';
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = useState(false);
  const { locale } = useRouter() as { locale: Locale };
  const { theme } = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';
  const rainbowKitTheme = isDarkTheme ? darkTheme : lightTheme;

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
            <RainbowKitProvider locale={locale} theme={rainbowKitTheme()}>
              <AppContainer>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
                <Toaster
                  position="top-center"
                  reverseOrder={false}
                  toastOptions={{
                    // Define default options
                    duration: 5000,
                    style: {
                      background: isDarkTheme ? '#333' : '#fff',
                      color: isDarkTheme ? '#fff' : '#333',
                    },
                  }} />
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
