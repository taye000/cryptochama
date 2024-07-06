// pages/index.tsx
import Head from "next/head";
import { CssBaseline } from '@mui/material';
import styled from 'styled-components';
import FeaturesCarousel from "@/components/Fetures";
import HeroSection from "@/components/Hero";
import IntroductionSection from "@/components/Introduction";
import SmartContractOverview from "@/components/SmartContract";

const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 20px 0;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Crypto Chama</title>
        <meta name="description" content="TaylorMade Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <HomeContainer>
        <Section>
          <HeroSection />
        </Section>
        <Section>
          <IntroductionSection />
        </Section>
        <Section>
          <FeaturesCarousel />
        </Section>
        <Section>
          <SmartContractOverview />
        </Section>
      </HomeContainer>
    </>
  );
}
