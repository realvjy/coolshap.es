"use client";

import Link from "next/link";
import styled from "styled-components"

import { Container } from "@/styles/ReuseableStyle";
import ShapeGrid from "./shapeGrid";
import { CoolShapes } from "@/lib/data/cool-shapes";
export default function Landing(props) {
  const noise = true;
  return (
    <ShapeSection>
      <Container>
        <ShapeWrapper>
          <IconListWrap>
            {CoolShapes.map((data, i) => {
              console.log(data);
              return (
                <ShapeGrid key="s" slug={data.slug} noise={noise} size={140} />
              );
            })}
          </IconListWrap>
        </ShapeWrapper>
      </Container>
    </ShapeSection>
  );
}

const ShapeSection = styled.section``;
const ShapeWrapper = styled.div`
  display: flex;
  padding-top: 50px;
`;

const IconListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CopyBtn = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 114.1%;
  padding: 10px 15px;
  border-radius: 20px;
  background: red;
  text-transform: uppercase
`;


