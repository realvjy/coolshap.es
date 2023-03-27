import Footer from "@/components/footer";
import Header from "@/components/header";
import Landing from "@/components/landing";
import { Container } from "@/components/reusableStyles";
import styled from "styled-components"
import { useState } from "react";



export default function Home() {
  const Data = 10;
  const [noise, setNoise] = useState(true);

  return (
    <>
      <Header noise={noise} setNoise={setNoise}/>
      <Landing noise={noise}/>
      <Footer />
    </>
  );
}




