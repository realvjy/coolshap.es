"use client";

import Link from "next/link";
import styled from "styled-components"
import { Container, GridBackground, ToggleButton } from "@/styles/ReuseableStyle";
import ShapeGrid from "./shapeGrid";
import { CoolShapes } from "@/lib/data/cool-shapes";
import { useEffect, useState } from "react";
import svgToJsx from "../lib/svg-to-jsx";
import { Coolshape, Star1, Star2, shapes } from "react-coolshapes"


export default function Landing(props) {
  const [isNoise, setNoise] = useState(true);
  // const [coolshapes, setCoolshapes] = useState(Object.keys(shapes).flat());
  const [svgName, setSvgName] = useState(null);
  const [svg, setSvg] = useState(null);
  const coolshapeskeys = Object.keys(shapes).flat();
  const handleToggleChange = () => {
    setNoise(!isNoise);
  };


  return (
    <ShapeSection>
      <GridBackground />
      <Container>
        <Seprator>
          <ToggleWrapper>
            <ToggleButton className="button">
              <input
                type="checkbox"
                className="checkbox"
                checked={!isNoise}
                onChange={handleToggleChange}
              />
              <div className="knobs">
                <span>Noise</span>
              </div>
              <div className="layer"></div>
            </ToggleButton>
          </ToggleWrapper>
        </Seprator>
        <ShapeWrapper>
          <IconListWrap>
            {
              coolshapeskeys.map((shapeType) => {
                const shapesMeta = shapes[shapeType];
                console.log(shapesMeta);
                return (
                  shapesMeta.map((_, i) => {
                    return (
                      <ShapeGrid index={i + 1} type={shapeType} noise={isNoise} size={140} key={i} />
                    );
                  })
                )
              })
            }
          </IconListWrap>
        </ShapeWrapper>
      </Container>
    </ShapeSection>
  );
}

const ShapeSection = styled.section`
position: relative;
`;
const ShapeWrapper = styled.div`
  display: flex;
  padding-top: 50px;
  justify-content: center;
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
  text-transform: uppercase;
`;


const Seprator = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  &::before{
        content: "";
        height: 1px;
        position: absolute;
        width: calc(50% - 80px);
        bottom: 50%;
        background: var(--gray);
    }
    &::after{
        content: "";
        height: 1px;
        position: absolute;
        width: calc(50% - 80px);
        right: 0;
        bottom: 50%;
        background: var(--gray);
    }
`;


const ToggleWrapper = styled.section`
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;

`;