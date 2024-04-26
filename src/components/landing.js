"use client";

import Link from "next/link";
import styled from "styled-components"
import { Container, GridBackground, ToggleButton } from "@/styles/ReuseableStyle";
import ShapeGrid from "./shapeGrid";
import { useEffect, useState } from "react";
import svgToJsx from "../lib/svg-to-jsx";
import { Coolshape, Star1, Star2, shapes } from "coolshapes-react"


export default function Landing(props) {
  const [isNoise, setNoise] = useState(true);
  const coolshapeskeys = Object.keys(shapes).flat();
  const [shapeSize, setShapeSize] = useState(140);
  const handleToggleChange = () => {
    setNoise(!isNoise);
  };

  useEffect(() => {
    const handleResize = () => {
      // Update itemsPerRow based on screen size
      if (window.innerWidth >= 768) {
        // Desktop view
        setShapeSize(140);
      } else {
        // Mobile view
        setShapeSize(120);
      }
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial call to set itemsPerRow based on the initial screen size
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount
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
                return (
                  shapesMeta.map((_, i) => {
                    return (
                      <ShapeGrid index={i} type={shapeType} noise={isNoise} size={shapeSize} key={i} />
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