'use client';

import Header from "@/components/header";
import Landing from "@/components/landing";
import styled from "styled-components"
import { Shape2, Shape3, Shape4 } from "@/components/shapes";
import Footer from "@/components/footer";
import { Container, GridBackground } from "@/styles/ReuseableStyle";
import Faq from "@/components/faq";
import Soon from "@/components/soon";


export default function Home() {
  return (
    <Main>
      {/* <Header />
      <Landing />
      <Faq />
      <Footer /> */}
      <Soon />
    </Main>
  );
}

const Main = styled.main`
  position: relative;
`;

