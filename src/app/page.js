'use client';

import Header from "@/components/header";
import Landing from "@/components/landing";
import styled from "styled-components"
import { Shape2, Shape3, Shape4 } from "@/components/shapes";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main >
      <Header />
      <Landing />
      <Footer />
    </main>
  );
}



const Main = styled.main`
  position: relative;
`;