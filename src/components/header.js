import { Container } from "@/styles/reusableStyles";
import Link from "next/link";
import styled from "styled-components"


export default function header(){
    return (
      <Section>
        <Container>
          <Wrapper>
            <LeftWrap>
              <LogoWrap>
                <Logo src="/images/logo/coolshapes.svg" />
              </LogoWrap>
              <Text>
                <span>100 Abstract</span> shapes with cool grainy gradient.
                Ready to use with any design dev project.
              </Text>
            </LeftWrap>
            <RightWrap>
              <NoiseWrap>
                <NoiseBtn type="checkbox" name="noise" />
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
      </Section>
    );
}

const Section = styled.section`
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 30px 0;
    border-bottom: 1px solid ${({theme})=> theme.colors.borderBlack};
`;
const RightWrap = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
const LinkBtn = styled(Link)`
    text-decoration: none;
    color: ${({theme})=> theme.colors.fontgray};
    margin-left: 26px;
`;
const NoiseWrap = styled.label`
    color: rgb(255,255,255,0.79);
`;
const NoiseBtn = styled.input`
    margin-right: 5px;
`;
const LeftWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
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
  color: ${({theme}) => theme.colors.fontgray};
  margin-left: 20px;
  span{
    font-weight: 700;
  }
`;
