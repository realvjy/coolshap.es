"use client";
import Link from "next/link";
import styled from "styled-components"
import { CoolShapes } from "@/lib/data/cool-shapes";
import ShapeRenderer from "./shape-renderer";
import { CopyIcon, DownloadIcon } from "./icons";
import React, { useState, useEffect } from 'react';
import { renderToString } from 'react-dom/server'
import { Coolshape, Star1, Star2 } from "react-coolshapes"
import svgToJsx from 'svg-to-jsx';

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
    slug,
  }) {
  const [infoText, setInfoText] = useState('');
  const [isCopy, setIsCopy] = useState(false);
  const shapeType = 'svg';
  const str = renderToString(<Coolshape shape={slug} noise={true} size={140} />)
  const handleCopySvg = () => {
    console.log('cling');
    navigator.clipboard.writeText(str)
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

  const handleCopyJsx = () => {
    console.log('cling');
    svgToJsx(str, function (error, jsx) {
      navigator.clipboard.writeText(jsx)
        .then(() => {
          setIsCopy(true);
          setInfoText('PNG Copied!');
          setTimeout(() => {
            setIsCopy(false);
          }, 1400);
        })
        .catch((error) => {
          console.error('Unable to copy SVG code to clipboard:', error);
        });
    });


  };



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
        <JsxBtn onClick={handleCopyJsx}>
          <CopyIcon size={16} />
          png
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
    z-index: -1;
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
