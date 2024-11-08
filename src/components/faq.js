"use client";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { TwitterIcon, PlusIcon, ArrowUpIcon } from "./icons";
import { Container, GridBackground, Seprator } from "@/styles/ReuseableStyle";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleCollapsibleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <FAQSection id="usage">
      <GridBackground />
      <Container>
        <FAQWrap>
          <FAQHeader>
            <h2>How to use?</h2>
            <p>If you have any more questions or suggestion you can reach me at <a href="https://x.com/realvjy">@realvjy</a>  or open <a href="https://github.com/realvjy/coolshapes-react/issues">issue</a> on <a href="https://github.com/realvjy/coolshapes-react">github</a> .</p>
            <p><a href="https://github.com/realvjy/coolshapes-react?tab=readme-ov-file#readme">Detailed Documentation <ArrowUpIcon size={16} /></a></p>
            <div className="product">
              <Family>
                <h4>Other projects</h4>
                <div className="wrap">
                  <a href="https://illlustrations.co?cs">
                    <img src="illlustrations.png" className="il" />
                  </a>
                  <a href="https://3dicons.co?cs">
                    <img src="3dicons.png" className="td" />
                  </a>
                </div>
              </Family>
            </div>
          </FAQHeader>
          <FAQListWrap>
            <Questions>
              <Question>
                <h3>
                  What the hell is this?
                </h3>
                <p>
                  A simple, fun project for the sake of creating some cool-looking abstract shapes with little grainy gradients crafted by realvjy. CoolShapes is a completely open-source set of 100+ abstract shapes crafted for any design and development projects. Free for both commercial and personal use.
                </p>
              </Question>
              <Question>
                <h3>
                  What is the license?
                </h3>
                <p>
                  Licensed under <a href="https://github.com/realvjy/coolshapes-react/blob/main/LICENSE">MIT</a>. Free for both personal & commercial use.
                </p>
              </Question>
              <Question>
                <h3>
                  How to use in Design project?
                </h3>
                <p>
                  Grab the figma file. Or simply copy the svg and paste in your design tool (Figma, Sketch etc). You can download png as well to use anywhere.
                </p>
              </Question>

              <Question className="dev">
                <h3>
                  How to use in Dev project?
                </h3>
                <p>
                  You can grab react package and follow the <a href="https://github.com/realvjy/coolshapes-react?tab=readme-ov-file#readme">documentation</a> to use in your project. Also check the code snippets here <a href="https://demo.coolshap.es">demo.coolshap.es</a>
                </p>
                <DevWrap>
                  <DevBox>
                    <h2>1. Install package</h2>
                    <div className="code">
                      <div className="code-bg">
                        <h3> <span style={{ color: 'var(--code-purple)' }}>yarn add</span>  <span style={{ color: 'var(--code-sky)' }}>coolshapes-react</span> </h3>
                      </div>
                      <span style={{ color: 'var(--text-gray2)' }}>OR</span>
                      <div className="code-bg">
                        <h3> <span style={{ color: 'var(--code-purple)' }}>npm i</span>  <span style={{ color: 'var(--code-sky)' }}>coolshapes-react</span> </h3>
                      </div>
                    </div>
                  </DevBox>
                  <DevBox>
                    <h2>2. Import it to Your React</h2>
                    <div className="code ver">
                      <div className="code-bg">
                        <h3> <span style={{ color: 'var(--code-purple)' }}>import</span>  <span style={{ color: 'var(--code-yellow)' }}>{'{'}</span> <span style={{ color: 'var(--code-red)' }}>Coolshape</span> <span style={{ color: 'var(--code-yellow)' }}>{'}'}</span> <span style={{ color: 'var(--code-purple)' }}>from</span>  <span style={{ color: 'var(--code-sky)' }}>&quot;coolshapes-react&quot;</span></h3>
                      </div>
                      <span style={{ color: 'var(--text-gray2)' }}>OR</span>
                      <div className="code-bg">
                        <h3> <span style={{ color: 'var(--code-purple)' }}>import</span>  <span style={{ color: 'var(--code-yellow)' }}>{'{'}</span> <span style={{ color: 'var(--code-red)' }}>Star<span style={{ color: 'var(--code-grey)' }}>,</span> Star<span style={{ color: 'var(--code-grey)' }}>,</span> Circle</span> <span style={{ color: 'var(--code-yellow)' }}>{'}'}</span> <span style={{ color: 'var(--code-purple)' }}>from</span>  <span style={{ color: 'var(--code-sky)' }}>&quot;coolshapes-react&quot;</span></h3>
                      </div>
                    </div>
                  </DevBox>
                  <DevBox>
                    <h2>3. Here some example</h2>
                    <div className="code ver">
                      <div className="code-bg">
                        <h3> <span style={{ color: 'var(--code-grey)' }}>&lt;</span><span style={{ color: 'var(--code-purple)' }}>Coolshape</span> <span style={{ color: 'var(--code-sky)' }}>type=&quot;</span><span style={{ color: 'var(--code-grey)' }}>star</span><span style={{ color: 'var(--code-sky)' }}>&quot;</span>  <span style={{ color: 'var(--code-sky)' }}>index=&quot;</span><span style={{ color: 'var(--code-grey)' }}>1</span><span style={{ color: 'var(--code-sky)' }}>&quot;</span> <span style={{ color: 'var(--code-sky)' }}>noise=&quot;</span><span style={{ color: 'var(--code-grey)' }}>true</span><span style={{ color: 'var(--code-sky)' }}>&quot;</span>   <span style={{ color: 'var(--code-grey)' }}>/&gt;</span> </h3>
                      </div>
                      <div className="code-bg">
                        <h3> <span style={{ color: 'var(--code-grey)' }}>&lt;</span><span style={{ color: 'var(--code-purple)' }}>Star</span> <span style={{ color: 'var(--code-sky)' }}>noise=&quot;</span><span style={{ color: 'var(--code-grey)' }}>true</span><span style={{ color: 'var(--code-sky)' }}>&quot;</span>   <span style={{ color: 'var(--code-grey)' }}>/&gt;</span> </h3>
                      </div>
                      <div className="code-bg">
                        <h3> <span style={{ color: 'var(--code-grey)' }}>&lt;</span><span style={{ color: 'var(--code-purple)' }}>Circle</span> <span style={{ color: 'var(--code-sky)' }}>size=&quot;</span><span style={{ color: 'var(--code-grey)' }}>24</span><span style={{ color: 'var(--code-sky)' }}>&quot;</span> <span style={{ color: 'var(--code-sky)' }}>index=&quot;</span><span style={{ color: 'var(--code-grey)' }}>4</span><span style={{ color: 'var(--code-sky)' }}>&quot;</span>  <span style={{ color: 'var(--code-grey)' }}>/&gt;</span> </h3>
                      </div>
                      <div className="code-bg">
                        <h3> <span style={{ color: 'var(--code-grey)' }}>&lt;</span><span style={{ color: 'var(--code-purple)' }}>Polygon</span> <span style={{ color: 'var(--code-sky)' }}>index=&quot;</span><span style={{ color: 'var(--code-grey)' }}>1</span><span style={{ color: 'var(--code-sky)' }}>&quot;</span>   <span style={{ color: 'var(--code-grey)' }}>/&gt;</span> </h3>
                      </div>
                    </div>
                  </DevBox>
                </DevWrap>
              </Question>
            </Questions>
          </FAQListWrap>
        </FAQWrap>
      </Container>
    </FAQSection>
  )
}

const FAQSection = styled.div`
  position: relative;
  margin-top: 100px;
`
const FAQHeader = styled.div`
  position: relative;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2{
    color: var(--white);
    font-size: 44px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
    background: linear-gradient(90deg, #FFFFFF 0%, rgba(153, 153, 153, 0.42) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    @media screen and (max-width: 768px) {
        font-size: 30px;
        line-height: 20px;
    }
  }
  h1{
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--main-black);
    margin-bottom: 8px;
    @media screen and (max-width: 768px) {
        font-size: 36px;
        line-height: 40px;
    }
  }
  p{
    font-size: 20px;
    color: var(--text-gray2);
    margin-bottom: 12px;
    line-height: 24px;
    a{
      display: inline-flex;
      align-items: center;
      font-weight: 500;
      
      color: var(--text-gray);
      &:hover{
        color: var(--white);
      }
    }
  }
  h4{
    color: var(--text-black2);
    font-size: 18px;
    font-weight: 400;
    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 20px;
    }

  }
  @media screen and (max-width: 768px) {
      width: 100%;
      padding: 24px;
    }
`
const FAQWrap = styled.div`
  background: var(--bg-alpha-a05);
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 60px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`;

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 24px;
  }
`
const DevWrap = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 16px;
  gap: 32px;
  background: linear-gradient(180deg,rgba(255,255,255,0.01) 0%,rgba(255,255,255,0.02) 100%);
  border-radius: 24px;
  &::before, &::after{
    content: "";
    position: absolute;
    border-radius: inherit;
  }
  &::before{
    z-index: -1;
    inset: 0;
    /* box-shadow: inset 0 2px 1px 0 rgba(132,188,233, 0.1), inset 0 0px 1px 1px rgba(199,211,234,.03); */
    box-shadow: inset 0 0px 0px 1px rgba(255,255,255,.04);
  }
  &::after{
    
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`
const Family = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  border: 1px solid rgba(255,255,255,.04);
  padding: 24px;
  border-radius: 24px;
  @media screen and (max-width: 500px) {
    position: relative;
    justify-content: center;
    overflow: hidden;
  }
  h4{
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    opacity: 0.4;
  }
  .color {
    position: absolute;
    bottom: -50%;
    height: 300px;
    width: 60px;
    border-radius: 50%;
    z-index: -1;
    background: linear-gradient(
      134.41deg,
      rgba(47, 0, 255, 0.2) 0%,
      rgba(255, 0, 0, 1) 100%
    );
    filter: blur(62px);
  }
  .wrap {
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 500px) {
    }
    gap: 16px;
    a {
      transition: all ease 400ms;
      display: flex;
      width: fit-content;
      &:hover {
        transform: rotate(-4deg) scale(1.05);
      }
    }
    .cs {
      height: 54px;
    }
    .il {
      height: 40px;
    }
    .td {
      height: 44px;
    }
  }
`;

const DevBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  h2{
    font-size: 18px;
    font-weight: 400;
    color: var(--text-gray);
  }
  .code{
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: start;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: start;
    }
    &.ver{
      flex-direction: column;
      align-items: start;
      gap: 8px;
    }
  }
  .code-bg{
    display: inline-flex;
    flex-direction: column;
    background: var(--black);
    border-radius: 12px;
    padding: 18px;
    gap: 16px ;
    width: fit-content;
    h3{
      font-size: 15px;
      span{
        letter-spacing: 0.5px;
      }
    }
  }
`

const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h3{
    font-size: 21px;
    font-weight: 400;
    color: var(--white);
    opacity: 0.8;
  }
  p{
    color: var(--text-gray3);
    font-size: 17px;
    line-height: 140%;
  }
  a{
    color: var(--text-gray);
    font-weight: 500;
    &:hover{
      color: var(--white);
    }
  }
`

const FAQListWrap = styled.div`
  width: calc(100% - 400px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`