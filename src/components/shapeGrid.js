"use client";
import Link from "next/link";
import styled from "styled-components"
import { CoolShapes } from "@/lib/data/cool-shapes";
import ShapeRenderer from "./shape-renderer";
import { CopyIcon, DownloadIcon } from "./icons";
import React, { useState, useEffect } from 'react';

// Dynamic component loader function
async function getSVGComponent(name) {
  const [type, index] = name.split('-');
  const componentName = `${type.charAt(0).toUpperCase()}${type.slice(1)}${index}`;

  try {
    // Dynamically import the entire package
    const svgPackage = await import("react-coolshapes");

    // Access the specific component from the package
    const SVGComponent = svgPackage[componentName];
    // Check if SVGComponent has a render function
    if (SVGComponent && typeof SVGComponent.render === 'function') {
      // Call the render function to get the SVG content
      const svgContent = SVGComponent.render({}, null);

      console.log(svgContent, 'content');
      // Render the SVG content
      // return svgContent;
    } else {
      console.error(`Invalid component structure for ${name}.`);
      return null;
    }
  } catch (error) {
    console.error(`Component ${name} not found.`, error);
    return null;
  }
}
export default function ShapeGrid(
  { name,
    keyword,
    url,
    color,
    type,
    size,
    noise,
    slug,
  }) {
  const [infoText, setInfoText] = useState('');
  const [isCopy, setIsCopy] = useState(false);
  const shapeType = 'svg';
  const svgSrc = `shapes/${shapeType}/${slug}.svg`;
  const handleCopySvg = () => {
    fetch(svgSrc)
      .then(response => response.text())
      .then(svgCode => {
        navigator.clipboard.writeText(svgCode)
          .then(() => {
            setIsCopy(true);
            setInfoText('SVG Copied!');
            setTimeout(() => {
              setIsCopy(false);
            }, 1400);
          })
          .catch((error) => {
            console.error('Unable to copy SVG code to clipboard:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching SVG:', error);
      });
  };

  const [dynamicSVGStar1, setDynamicSVGStar1] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const svgComponent = await getSVGComponent("star-1");
      setDynamicSVGStar1(svgComponent);
    };

    fetchData();
  }, []);

  console.log(dynamicSVGStar1, 'dynamicSVGStar1');
  return (
    <ShapeWrap>
      <ShapeRenderer iconName={slug} showNoise={noise} size={size} />

      {isCopy && <Notify>
        <h4>{infoText}</h4>
      </Notify>}

      <ShapeBtnWrap className="copy-btn">
        <SvgBtn onClick={handleCopySvg}>
          <CopyIcon size={16} />
          svg
        </SvgBtn>
        <JsxBtn>
          <DownloadIcon size={16} />
          jsx
        </JsxBtn>
      </ShapeBtnWrap>
    </ShapeWrap>
  );
}


const ShapeWrap = styled.div`
  border-radius: 36px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .4s var(--emo-in-out)!important;

  /* background: radial-gradient(76% 25% at 50% -15%, rgba(32,88,233, 0.0) 0%, rgba(12,12,12,.0) 100%), var(--card-bg); */
  background: linear-gradient(180deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.02) 100%);
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding: 40px;
  }
  @media screen and (max-width: 768px) {
    padding: 30px;
  }

  &:hover {
    padding-top: 10px;
    background: radial-gradient(76% 25% at 50% -15%, rgba(32, 88, 233, 0.3) 0%, rgba(12,12,12, 0.0) 100%), linear-gradient(180deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.02) 100%);
    .copy-btn {
      bottom: 20px;
      opacity: 1;
    }
    &::before{
    }
    &::after{
      inset: 0;
      /* box-shadow: inset 0 2px 4px 0 rgba(132,188,233, 0.1), inset 0 0px 0px 1px rgba(199,211,234,.05); */
      box-shadow: inset 0 0px 0px 1px rgba(255,255,255,.04);
    }
  }
  &::before, &::after{
    content: "";
    position: absolute;
    border-radius: inherit;
  }
  &::before{
  }
  &::after{
    inset: 0;
    /* box-shadow: inset 0 2px 1px 0 rgba(132,188,233, 0.1), inset 0 0px 1px 1px rgba(199,211,234,.03); */
    box-shadow: inset 0 0px 0px 1px rgba(255,255,255,.04);
  }
`;
const ShapeBtnWrap = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  opacity: 0;
  overflow: hidden;
  transition: all .5s var(--emo-in-out)!important;
  gap: 12px;
`;

const CopyBtn = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 114.1%;
  display: flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 20px;
  background: red;
  text-transform: uppercase;
  gap: 2px;
`;

const SvgBtn = styled(CopyBtn)`
  background: linear-gradient(
      284.15deg,
      #ffc83a -201.13%,
      #ff008a -108.68%,
      #ffd600 -16.22%,
      #17bde1 76.23%
    ),
    rgba(44, 47, 58, 0.44);
`;
const JsxBtn = styled(CopyBtn)`
  background: linear-gradient(
      284.86deg,
      #ffc83a -8.52%,
      #ff008a 77.46%,
      #6100ff 163.44%,
      #178ce1 249.41%
    ),
    rgba(44, 47, 58, 0.44);
`;
const Shape = styled.img`
  width: 100%;
  height: auto;
`;

const Notify = styled.div`
  position: absolute;
  
  h4{
    background: rgba(12,12,12,0.7);
    backdrop-filter: blur(8px);
    border-radius: 6px;
    font-weight: 500;
    color: #70FFF6;
    padding: 6px 18px;
  }
`;
