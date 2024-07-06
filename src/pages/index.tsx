import Head from "next/head";
import { Inter } from "next/font/google";
import { ThemeProvider, CssBaseline } from '@mui/material';
import styled from 'styled-components';
import { useTheme } from "../../context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Crypto Chama</title>
        <meta name="description" content="TaylorMade Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomeContainer className={inter.className}>
          <div>Crypto Chama</div>
        </HomeContainer>
      </ThemeProvider>
    </>
  );
}
