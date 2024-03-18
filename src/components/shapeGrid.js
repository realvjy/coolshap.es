"use client";
import Link from "next/link";
import styled from "styled-components"
import { CoolShapes } from "@/lib/data/cool-shapes";
import ShapeRenderer from "./shape-renderer";
import { CopyIcon, DownloadIcon } from "./icons";
import React, { useState, useEffect, useRef } from 'react';
import { renderToString } from 'react-dom/server'
import { Coolshape, Star1, Star2 } from "coolshapes-react"
import * as copy from "copy-to-clipboard";
import svgToJsx from "@/lib/svg-to-jsx";
import {
  convertToCamelCase,
  encodeImage,
  getImageData,
  loadImage,
  svgBase64,
  unit8toPng,
} from "@/lib/helpers";
import { camelCase } from "@/lib/svg-to-jsx/utils";

const template = require("lodash.template");

const YourComponent = () => {
  return (
    <svg className="coolshapes star-1 " height="140" width="140" fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#cs_clip_1_star-1)">
        <mask height="200" id="cs_mask_1_star-1" style={{ "maskType": "alpha" }} width="200" x="0" y="0" maskUnits="userSpaceOnUse">
          <path d="M200 100C200 44.772 155.228 0 100 0S0 44.772 0 100s44.772 100 100 100 100-44.772 100-100zm-85.203-14.797c8.22 8.22 20.701 9.966 45.664 13.461L170 100l-9.539 1.335c-24.963 3.495-37.444 5.242-45.664 13.462-8.219 8.22-9.967 20.701-13.462 45.664L100 170l-1.335-9.539c-3.495-24.963-5.243-37.444-13.462-45.664-8.22-8.22-20.701-9.967-45.664-13.462L30 100l9.539-1.336c24.963-3.495 37.444-5.242 45.664-13.462 8.22-8.22 9.967-20.7 13.462-45.663L100 30l1.335 9.538c3.495 24.963 5.243 37.445 13.462 45.665z" fill="#fff" fillRule="evenodd" />
        </mask>
        <g mask="url(#cs_mask_1_star-1)">
          <path d="M200 0H0v200h200V0z" fill="#fff" />
          <path d="M200 0H0v200h200V0z" fill="#FFF9C5" fillOpacity="0.44" />
          <g>
            <path d="M158 22H15v108h143V22z" fill="#00F0FF" fillOpacity="0.85" />
            <path d="M209 101H52v116h157V101z" fill="#FF58E4" />
            <ellipse cx="156" cy="80" fill="#FFE500" fillOpacity="0.79" rx="83" ry="57" />
          </g>
        </g>
      </g>
      <g style={{ "mixBlendMode": "overlay" }} mask="url(#cs_mask_1_star-1)">
        <path d="M200 0H0v200h200V0z" fill="gray" stroke="transparent" />
      </g>
      <defs>
        <clipPath id="cs_clip_1_star-1">
          <path d="M0 0H200V200H0z" fill="#fff" />
        </clipPath>
      </defs>
      <defs />
    </svg>
  );
};

export default function ShapeGrid(
  { name,
    keyword,
    url,
    color,
    type,
    size,
    noise,
    index,
  }) {
  const [infoText, setInfoText] = useState('');
  const [imgData, setImgData] = React.useState(null);
  const [isCopy, setIsCopy] = useState(false);
  const shapeType = 'svg';
  const [svgName, setSvgName] = useState(null);
  const [svg, setSvg] = useState(null);
  const [jsxCode, setJsxcode] = useState(null);
  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageSrc, setImageSrc] = useState('');
  const pngRef = React.useRef(null);

  const handleCopySvg = () => {
    navigator.clipboard.writeText(svg)
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

  };


  const TEMPLATES = {
    functional: `// Generated from https://coolshap.es by realvjy
  import React from "react";
      
  export const <%= componentName %> = (props) => (
  <%=  svg %>
  );
  `,
  };

  function reactify(svg, { type = "functional", name }) {

    const data = {
      parentComponent: `React.Component`,
      componentName: `${svgName}`,
    };

    const compile = template(TEMPLATES[type]);
    const component = compile({
      ...data,
      svg,
    });

    return component;
  }

  useEffect(() => {
    const str = renderToString(<ShapeRenderer type={type} index={index} showNoise={noise} size={400} />)
    setSvg(str);

    let name = type + "_" + index
    setSvgName(convertToCamelCase(name));
  }, []);



  const handleCopyJsx = () => {
    console.log('copying', svg);
    svgToJsx(svg, function (error, jsx) {
      let newCode = reactify(jsx, { type: "functional", name: type });
      setJsxcode(newCode);
      console.log('svg', newCode);
      try {
        copy(newCode);
        // This code block will be executed after copy(viewCode) completes
        setIsCopy(true);
        setInfoText('JSX Copied!');
        setTimeout(() => {
          setIsCopy(false);
        }, 1400);
      } catch (error) {
        // Handle any errors that may occur during the copy(viewCode) operation
        console.error('Copy failed:', error);
      }
    });
  };



  const svgToPng = async () => {
    const imgSource = svgBase64(svg);
    const svgImg = await loadImage(imgSource, imgRef);
    const { imageData, canvas, context } = getImageData(svgImg, canvasRef);

    const imageEncoded = await encodeImage(canvas, context, imageData);
    const dataUrl = unit8toPng(imageEncoded);
    setImageSrc(dataUrl);
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'CS_' + svgName + '.png';
    document.body.appendChild(a);

    a.click();
    // Remove the anchor element from the document
    document.body.removeChild(a);
  }

  const dwnSVG = async () => {
    try {
      const svgData = svg; // Assuming svg is your SVG content
      const blob = new Blob([svgData], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'CS_' + svgName + '.svg';
      document.body.appendChild(a);

      a.click();

      // Cleanup: Remove the anchor element and revoke the URL
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading SVG:', error);
    }
  };
  return (
    <ShapeWrap>
      <ShapeRenderer type={type} index={index} showNoise={noise} size={size} />

      <ShapeBtnWrap className="copy-btn">
        {isCopy && <Notify>
          <h4>{infoText}</h4>
        </Notify>}
        <div className="copy-row">
          <SvgBtn onClick={handleCopySvg}>
            <CopyIcon size={16} />
            svg
          </SvgBtn>
          <JsxBtn onClick={handleCopyJsx}>
            <CopyIcon size={16} />
            jsx
          </JsxBtn>
        </div>
        <div className="dwn-row">
          <SvgLineBtn onClick={dwnSVG}>
            <DownloadIcon size={16} />
            svg
          </SvgLineBtn>
          <JsxLineBtn onClick={svgToPng}>
            <DownloadIcon size={16} />
            PNG
          </JsxLineBtn>
        </div>
      </ShapeBtnWrap>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <img ref={imgRef} style={{ display: "none" }} />
      <img ref={pngRef} style={{ display: 'none' }} />
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
  overflow: hidden;
  background: linear-gradient(180deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.02) 100%);
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding: 40px;
  }
  @media screen and (max-width: 768px) {
    padding: 30px;
  }

  &:hover, &.active {
    background: radial-gradient(76% 25% at 50% -15%, rgba(32, 88, 233, 0.3) 0%, rgba(12,12,12, 0.0) 100%), linear-gradient(180deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.02) 100%);
    .copy-btn {
      /* bottom: 20px; */
      opacity: 1;
    }
    .dwn-row{
      transform: translateY(0);
    }
    .copy-row{
      transform: translateY(0);
    }
    &::before{
    }
    &::after{
      inset: 0;
      box-shadow: inset 0 0px 0px 1px rgba(255,255,255,.04);
    }
  }
  &::before, &::after{
    content: "";
    position: absolute;
    border-radius: inherit;
    z-index: -1;
  }
  &::before{
  }
  &::after{
    inset: 0;
    box-shadow: inset 0 0px 0px 1px rgba(255,255,255,.04);
  }
`;
const ShapeBtnWrap = styled.div`
  border-radius: 36px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  transition: all .5s var(--emo-in-out)!important;
  gap: 12px;
  background: radial-gradient(76% 25% at 50% -15%, rgba(32, 88, 233, 0.4) 0%, rgba(12,12,12, 0.3) 100%), linear-gradient(180deg,rgba(12,12,12,0.1) 0%,rgba(12,12,12,0.2) 100%);
  backdrop-filter: blur(22px);
  &::before, &::after{
    content: "";
    position: absolute;
    border-radius: inherit;
    z-index: -1;
  }
  &::before{
  }
  &::after{
    inset: 0;
    box-shadow: inset 0 0px 0px 1px rgba(255,255,255,.04);
  }
  .dwn-row, .copy-row{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 16px;
    transition: all .5s var(--emo-in-out)!important;
  }
  .dwn-row{
    transform: translateY(20px);
  }
  .copy-row{
    transform: translateY(-20px);
  }
`;

const CopyBtn = styled.a`
  position: relative;
  font-weight: 600;
  font-size: 14px;
  line-height: 114.1%;
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 20px;
  text-transform: uppercase;
  gap: 2px;
  min-width: 78px;
  justify-content: center;
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

const SvgLineBtn = styled(CopyBtn)`
  &::before{
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px; 
    padding: 10px; 
    border: 2px solid transparent;
    background: linear-gradient(
      284.15deg,
      #ffc83a -201.13%,
      #ff008a -108.68%,
      #ffd600 -16.22%,
      #17bde1 76.23%
    ) border-box; /*3*/
    -webkit-mask: /*4*/
     linear-gradient(#fff 0 0) padding-box, 
     linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; /*5'*/
          mask-composite: exclude; /*5*/
  }
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

const JsxLineBtn = styled(CopyBtn)`
  &::before{
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px; 
    padding: 10px; 
    border: 2px solid transparent;
    background: linear-gradient(
      284.86deg,
      #ffc83a -8.52%,
      #ff008a 77.46%,
      #6100ff 163.44%,
      #178ce1 249.41%
    ) border-box; /*3*/
    -webkit-mask: /*4*/
     linear-gradient(#fff 0 0) padding-box, 
     linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; /*5'*/
          mask-composite: exclude; /*5*/
  }
`;

const Shape = styled.img`
  width: 100%;
  height: auto;
`;

const Notify = styled.div`
  position: absolute;
  top: 20px;
  h4{
    background: rgba(12,12,12,0.4);
    border-radius: 6px;
    font-weight: 500;
    color: #70FFF6;
    padding: 6px 18px;
  }
`;
