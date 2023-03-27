import { Container } from "@/components/reusableStyles";
import styled from "styled-components"


export default function footer() {
    return (
      <Section>
        <Container>
          <Wrapper>
            <LeftWrap>
              <Text>
                Crafted by
                <span>
                  <a href="https://vjy.me"> @realvjy </a>
                </span>
                at
                <span>
                  <a href="https://overlayz.studio"> @overlayz </a>
                </span>
              </Text>
            </LeftWrap>
            <RightWrap>
                <ImgWrap href="https://twitter.com/realvjy">
                 <Image src="/images/logo/twitter.png"/>
                </ImgWrap>
            </RightWrap>
          </Wrapper>
        </Container>
      </Section>
    );
}

const Section = styled.section`
    margin-top: auto;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid var(--gray);
  margin-top: 100px;
`;
const LeftWrap = styled.div``;
const RightWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const ImgWrap = styled.a`
   text-decoration: none;
   cursor: pointer;
`;
const Image = styled.img``
const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${({ theme }) => theme.text.quarternary};
  span {
    font-weight: 600;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text.tertiary};
    }
  }
`;
