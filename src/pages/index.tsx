import Head from "next/head";
import { CssBaseline } from '@mui/material';
import FeaturesCarousel from "@/components/FeaturesCarousel";
import HeroSection from "@/components/Hero";
import IntroductionSection from "@/components/Introduction";
import SmartContractOverview from "@/components/SmartContract";
import { HomeContainer, Section } from "@/styles/styled";

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
