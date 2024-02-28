"use client";

import { Container, GhostButton, GridBackground, LinkButton, SocialShare, ToggleButton } from "@/styles/ReuseableStyle";
import Link from "next/link";
import styled from "styled-components"
import { Circle1, Coolshape, Star1, Star2 } from "react-coolshapes"
import { ArrowUpIcon, CoolShapeLogo, CoolShapeLogoColor, DownloadIcon, FigmaIcon, HeartIcon, NpmIcon, RotatingGradient, TwitterIcon } from "./icons";


export default function Header() {
  return (
    <HeaderSection>
      <GridBackground />
      <GradientBG>
        <BorderGradient />
        <MaskGradient>
          <ConicGradient className="rotate-gradient" />
        </MaskGradient>
      </GradientBG>
      <Container>
        <Wrapper>
          <NavBar>
            <LeftLogo>
              <a href="/">
                <CoolShapeLogoColor />
              </a>
            </LeftLogo>
            <RightBtn>
              <GhostButton href="#usage">
                Usage
              </GhostButton>
              <GhostButton href="https://github.com/realvjy/react-coolshapes">
                Github<ArrowUpIcon size={18} />
              </GhostButton>
              <SocialShare href="https://www.buymeacoffee.com/realvjy">
                <HeartIcon size={20} /> <span>Donate</span>
              </SocialShare>
              <SocialShare
                href="https://twitter.com/intent/tweet?text=Grab%20100%2B%20cool%20shapes%20with%20grainy%20gradients%20and%20use%20in%20your%20design%20or%20dev%20projects%20from%20https%3A%2F%2Fcoolshap.es%20by%20%40realvjy&url="
              >
                <TwitterIcon size={20} /> <span>Post</span>
              </SocialShare>
            </RightBtn>
          </NavBar>
          <HeroSection>
            <ContentWrap>
              <LogoWrap>
                <Logo src="/images/logo/coolshapes.svg" />
              </LogoWrap>
              <Text>
                <h1>
                  <span>100+ Abstract shapes </span>with cool grainy gradient.
                  Ready to use with any design dev project.
                </h1>
                <h4>Open-Source with MIT License, Check <a href="https://github.com/realvjy/coolshap.es">Github</a></h4>
              </Text>
            </ContentWrap>
            <ButtonWrap>
              <LinkButton href="/" className="blue">
                <FigmaIcon size={20} />
                <span>
                  figma file
                </span>
              </LinkButton>
              <LinkButton href="/">
                <DownloadIcon size={20} />
                <span>
                  download all
                </span>
              </LinkButton>
              <LinkButton href="/">
                <NpmIcon size={20} />
                <span>
                  npm package
                </span>
              </LinkButton>
            </ButtonWrap>
          </HeroSection>

        </Wrapper>
      </Container>
    </HeaderSection>
  );
}

const HeaderSection = styled.section`
  position: relative;
`;

const GradientBG = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BorderGradient = styled.section`
  position: absolute;
  height: 4px;
  top: 0;
    background: linear-gradient(
      to right,
      #43D764 0%, 
      #FFB72C 12%, 
      #FF5D00 22%, 
      #EC0A0A 33%, 
      #B405B7 44%, 
      #8000FF 55%, 
      #285CFF 66%, 
      #43D764 77%, 
      #FFB72C 88%, 
      #FF5D00 100%
    );
  width: 100%;
  animation: border-shine 2s linear infinite alternate;
  background-size: 300% auto;
`;

const MaskGradient = styled.div`
  /* width: var(--head-gradient-size); */
  height: 200px;
  overflow: hidden;
  width: 100%;
  text-align: center;
  position: relative;
  filter: blur(140px);
`;

const ConicGradient = styled.div`
width: var(--head-gradient-size);
height: var(--head-gradient-size);
border-radius: 50%;
position: absolute;
left: 50%;
bottom: 0;
opacity: 0.6;
transform: translateX(-50%);
background: conic-gradient(from 216.82deg at 50.09% 50.09%, #FFC700 -22.68deg, #45F677 0.36deg, #1DA0FF 20.87deg, #4643FF 37.8deg, #6D07EF 62.77deg, #FF00D6 90.22deg, #FF0000 108.65deg, #FF4C00 131.05deg, #FFC700 153.51deg, #45F777 175.84deg, #1DA0FF 198.04deg, #4643FF 215.44deg, #6D07EF 238.44deg, #FF00D6 270.64deg, #FF0000 294.96deg, #FF4C00 315.97deg, #FFC700 337.32deg, #45F677 360.36deg);
animation: rotate-gradient 8s linear infinite;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
    @media screen and (max-width: 768px) {
      padding: 30px 16px;
    }
`;
const ButtonWrap = styled.div`
  font-weight: 500;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const NoiseWrap = styled.label`
    color: rgb(255,255,255,0.79);
`;
const NoiseBtn = styled.input`
    margin-right: 5px;
`;
const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
`;
const LogoWrap = styled.a`

`;
const Logo = styled.img`
    max-height: 100px;
`;
const Text = styled.div`
  max-width: 425px;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  span{
    font-weight: 700;
  }
  h1{
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    margin: 4px 0;
    color: var(--text-gray);
    span{
      font-weight: 500;
      color: var(--white)
    }
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  h4{
    font-size: 15px;
    font-weight: 500;
    margin: 4px 0;
    color: var(--text-gray2);
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
  a{
    color: var(--text-gray2);
    &:hover{
      color: var(--light-white);
    }
  }
`;
const HeroSection = styled.div`
  position: relative;
`;
const NavBar = styled.nav`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LeftLogo = styled.div`
  display: flex;
  align-items: center;
  img{
    height: 36px;
  }
`

const RightBtn = styled.div`
  display: flex;
  gap: 10px;
`

