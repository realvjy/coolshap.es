'use client';

import Header from "@/components/header";
import Landing from "@/components/landing";
import styled from "styled-components"
import Footer from "@/components/footer";
import { Container, GridBackground } from "@/styles/ReuseableStyle";
import Faq from "@/components/faq";
import Soon from "@/components/soon";
import { GoogleTagManager } from '@next/third-parties/google'


export default function Home() {
  return (
    <Main>
      <GoogleTagManager gtmId="GTM-5RDFZ5TN" />
      <Header />
      <Landing />
      <Faq />
      <Footer />

    </Main>
  );
}

const Main = styled.main`
  position: relative;
`;

