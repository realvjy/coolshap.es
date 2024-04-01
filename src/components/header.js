"use client";

import {
  Container, GhostButton,
  LinkButton, SocialShare,
} from "@/styles/ReuseableStyle";
import Link from "next/link";
import styled from "styled-components"

import SIcon, { ArrowUpIcon, CoolShapeLogo, CoolShapeLogoColor, DownloadIcon, FigmaIcon, HeartIcon, NpmIcon, RotatingGradient, TwitterIcon } from "./icons";
import { Test_P } from "./shapes/test_p";
import HeaderBG from "./header-bg";


export default function Header() {
  return (
    <HeaderSection>
      <HeaderBG />
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
                <h4>Open-Source with <a href="https://github.com/realvjy/coolshapes-react?tab=MIT-1-ov-file#readme">MIT</a> License, Check <a href="https://github.com/realvjy/coolshap.es">Github</a></h4>
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
              <LinkButton href="https://www.npmjs.com/package/coolshapes-react" target="_blank">
                <NpmIcon size={20} />
                <span>
                  react package
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
    color: var(--text-gray3);
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
  a{
    color: var(--text-gray3);
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

