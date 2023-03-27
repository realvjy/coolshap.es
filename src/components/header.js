import { Container } from "@/components/reusableStyles";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components"


export default function header(props) {
  return (
    <HeaderSection>
      <Container>
        <Wrapper>
          <LeftWrap>
            <LogoWrap className="logo">
              <Logo src="/images/logo/coolshapes.svg" />
            </LogoWrap>
            <Text className="head-text">
              <span>100 Abstract</span> shapes with cool grainy gradient. Ready
              to use with any design dev project.
            </Text>
          </LeftWrap>
          <RightWrap>
            <NoiseWrap>
              <NoiseBtnWrap
                onClick={() => (props.noise ? props.setNoise(false) : props.setNoise(true))}
              >
                <Logo
                  className={`checkmark_icon ${props.noise ? "" : "hidden"}`}
                  src="/images/logo/checkmark.svg"
                />
              </NoiseBtnWrap>
              Noise
            </NoiseWrap>
            <LinkBtn href="/">
              <span className="logo-wrap">
                <Logo src="/images/logo/figmalogo.svg" />
              </span>
              get figma file
            </LinkBtn>
            <LinkBtn href="/">
              <span className="logo-wrap">
                <Logo src="/images/logo/download.svg" />
              </span>
              download all
            </LinkBtn>
          </RightWrap>
        </Wrapper>
      </Container>
    </HeaderSection>
  );
}

const HeaderSection = styled.section`
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 30px 0;
    border-bottom: 1px solid var(--gray);
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tabletM}) {
      flex-direction: column;
      align-items: initial;
      justify-content: initial;
    }
`;
const RightWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tabletM}) {
    align-items: initial;
    justify-content: initial;
  }
`;
const LinkBtn = styled(Link)`
    text-decoration: none;
    margin-left: 26px;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    flex-direction: row;
    span{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
    }
`;
const NoiseWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--light-black);
`;
const NoiseBtnWrap = styled.div`
  border: 2px solid var(--blue);
  border-radius: 5px;
  display: flex;
  padding: 1px;
  justify-content: center;
  align-items: center;
  height: 12px;
  width: 12px;
  margin-right: 10px;
  cursor: pointer;
  .checkmark_icon{
    max-width: 10px;
    &.hidden{
      display: none;
    }
  }
`;
const LeftWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    .logo {
      margin-right: auto;
    }
    .head-text {
      margin: 20px 0;
    }
  }
`;
const LogoWrap = styled.a`
    background-image: url("/images/logo-gradient.png");
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
`;
const Logo = styled.img`
    max-height: 86px;
`;
const Text = styled.p`
  max-width: 425px;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  margin-left: 20px;
  span{
    font-weight: 700;
  }
`;
