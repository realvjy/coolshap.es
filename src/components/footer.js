"use client";

import { Container } from "@/styles/ReuseableStyle";
import styled from "styled-components"
import { CoolShapeLogo, Realvjy, TwitterIcon } from "./icons";


export default function Footer() {
    return (
        <FooterSection>
            <Container>
                <Wrapper>
                    <LeftWrap>
                        <CoolShapeLogo size={20} /> <span>Free for Commercial and Personal Use</span>
                    </LeftWrap>
                    <Credit><h3>made by <a href="https://x.com/realvjy"> <Realvjy /> </a> at <a href="https://x.com/overlayzstudio">overlayz</a></h3></Credit>
                    <RightWrap>
                        <a href="https://x.com/overlayzstudio"><TwitterIcon size={16} /></a>
                    </RightWrap>
                </Wrapper>
            </Container>
        </FooterSection>
    )
}

const FooterSection = styled.section``;
const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 0;
    margin-top: 80px;
    align-items: center;
    border-top: 1px solid var(--gray);
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 24px;
    }
`;
const LeftWrap = styled.div`
    display: flex;
    align-items: center;
    span{
        margin-left: 11px;
        font-size: 18px;
        color: var(--text-gray2);
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 24px;
        span{
            margin-left: unset;
            margin-top: 10px;
        }
    }
`;
const RightWrap = styled.div``;
const Credit = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 768px) {
        position: relative;
        transform: unset;
        left: unset;
        margin-bottom: 20px;
    }
    h3{
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 400;
        color: var(--text-gray);
    }
    a{
        display: flex;
        align-items: center;
        padding: 6px;
        font-weight: 500;
        &:hover{
            color: var(--white);
        }
        .tw-icon{
            transform: scale(0.8);
        }
    }
    .realvjy-icon{
        margin: 0 8px;
        transform: scale(1.3);
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
