import Layout from "@/components/layout"
import { Container } from "@/styles/reusableStyles";
import styled from "styled-components"



export default function Home() {
  const Data = 10;
  return (
    <Layout>
      <IconSection>
        <Container>
          <Wrapper>
            <IconListWrap>
              {[...Array(100)].map((_, i) => (
                <IconWrap>
                  <Icon src="/images/test-1.png"></Icon>
                  <IconBtnWrap className="copy-btn">
                    <SvgBtn>
                      <img src="/images/logo/copy.svg" />
                      svg
                    </SvgBtn>
                    <JsxBtn>
                      <img src="/images/logo/copy.svg" />
                      jsx
                    </JsxBtn>
                  </IconBtnWrap>
                </IconWrap>
              ))}
            </IconListWrap>
          </Wrapper>
        </Container>
      </IconSection>
    </Layout>
  );
}

const IconSection = styled.section``;
const Wrapper = styled.div`
  display: flex;
  padding-top: 50px;
`;
const IconListWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
`;
const IconWrap = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.borderBlack};
  border-radius: 36px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s all ease-out;
  &:hover {
    transition: 1s all ease-out;
    .copy-btn {
      height: auto;
    }
  }
`;
const IconBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  overflow: hidden;
  height: 0;
  transition: 1s all ease-out;
`;
const CopyBtn = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 114.1%;
  padding: 10px 15px;
  border-radius: 20px;
  background: red;
  text-transform: uppercase
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
const Icon = styled.img`
  max-width: 156px;
`;



