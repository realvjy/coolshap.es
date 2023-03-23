import { Container } from "@/components/reusableStyles";
import Link from "next/link";
import styled from "styled-components"


export default function ShapeGrid(
  name,
  keyword,
  url,
  color,
  type,
  imgRef,
  canRef,
) {
  return (
    <ShapeWrap>
      <Shape src="/images/test-2a.png" />
      <ShapeBtnWrap className="copy-btn">
        <SvgBtn>
          <img src="/images/logo/copy.svg" />
          svg
        </SvgBtn>
        <JsxBtn>
          <img src="/images/logo/copy.svg" />
          jsx
        </JsxBtn>
      </ShapeBtnWrap>
    </ShapeWrap>
  );
}


const ShapeWrap = styled.div`
  border-radius: 36px;
  background: linear-gradient(180deg, rgba(17, 19, 22, 0.7) 0%, rgba(10, 12, 14, 0.7) 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .4s var(--emo-in-out)!important;
  cursor: pointer;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    padding: 40px;
  }
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.mobileL}) {
    padding: 30px;
  }
  &::before{
    content: "";
    pointer-events: none;
    user-select: none;
    position: absolute;
    inset: 0px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02));
    -webkit-mask: linear-gradient(black, black) content-box content-box, linear-gradient(black, black);
    -webkit-mask-composite: xor;
  }
  &:hover {
    padding-top: 10px;
    background: linear-gradient(180deg, rgba(15, 16, 19, 0.6) 0%, rgba(12, 12, 14, 0.6) 100%);
    box-shadow: inset 0px 8px 10px -6px rgba(32, 172, 233, 0.23);
    .copy-btn {
      bottom: 20px;
      opacity: 1;
    }
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
const Shape = styled.img`
  width: 100%;
  height: auto;
`;
