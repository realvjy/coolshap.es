"use client";
import Link from "next/link";
import styled from "styled-components"
import ShapeRenderer from "./shape-renderer";
import { CopyIcon, DownloadIcon } from "./icons";
import React, { useState, useEffect, useRef } from 'react';
import { renderToString } from 'react-dom/server'
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

const template = require("lodash.template");


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
    try {
      copy(svg);
      // This code block will be executed after copy(viewCode) completes
      setIsCopy(true);
      setInfoText('SVG Copied!');
      setTimeout(() => {
        setIsCopy(false);
      }, 1400);
    } catch (error) {
      // Handle any errors that may occur during the copy(viewCode) operation
      console.error('Copy failed:', error);
    }

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
    setSVGandName();
  }, []);

  useEffect(() => {
    setSVGandName();
  }, [noise]);

  const setSVGandName = () => {
    const str = renderToString(<ShapeRenderer type={type} index={index} showNoise={noise} size={400} />)
    setSvg(str);

    let name = `${type}_${type === 'number' ? index : index + 1}`
    setSvgName(convertToCamelCase(name));
  }

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
  backdrop-filter: blur(22px)!important;
  -webkit-backdrop-filter: blur(22px)!important;
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
    @media screen and (max-width: 768px) {
      gap: 12px;
    }
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
  @media screen and (max-width: 768px) {
    font-size: 13px;
    min-width: 70px;
    padding: 6px 12px;
  }
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
