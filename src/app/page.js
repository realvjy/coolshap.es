'use client';

import Header from "@/components/header";
import Landing from "@/components/landing";
import styled from "styled-components"
import { Shape2, Shape3, Shape4 } from "@/components/shapes";
import Footer from "@/components/footer";
import { Container, GridBackground } from "@/styles/ReuseableStyle";
import Faq from "@/components/faq";

import Moon_1 from "@/components/shapes/moon_1";
import Moon_2 from "@/components/shapes/moon_2";
import Moon_3 from "@/components/shapes/moon_3";
import Moon_4 from "@/components/shapes/moon_4";
import Moon_5 from "@/components/shapes/moon_5";
import Moon_6 from "@/components/shapes/moon_6";
import Moon_7 from "@/components/shapes/moon_7";
import Moon_8 from "@/components/shapes/moon_8";
import Moon_9 from "@/components/shapes/moon_9";
import Moon_10 from "@/components/shapes/moon_10";
import Moon_11 from "@/components/shapes/moon_11";
import Moon_12 from "@/components/shapes/moon_12";
import Moon_13 from "@/components/shapes/moon_13";
import Moon_14 from "@/components/shapes/moon_14";
import Moon_15 from "@/components/shapes/moon_15";



export default function Home() {
  return (
    <Main>
      <Header />
      <Container>
        <Moon_1 size={160} />
        <Moon_2 size={160} />
        <Moon_3 size={160} />
        <Moon_4 size={160} />
        <Moon_5 size={160} />
        <Moon_6 size={160} />
        <Moon_7 size={160} />
        <Moon_8 size={160} />
        <Moon_9 size={160} />
        <Moon_10 size={160} />
        <Moon_11 size={160} />
        <Moon_12 size={160} />
        <Moon_13 size={160} />
        <Moon_14 size={160} />
        <Moon_15 size={160} />
      </Container>
      {/* <Landing /> */}
      <Faq />
      <Footer />
    </Main>
  );
}



const Main = styled.main`
  position: relative;
`;

