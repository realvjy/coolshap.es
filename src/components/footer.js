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
                        <CoolShapeLogo />
                    </LeftWrap>
                    <Credit><h3>made by <a href="https://x.com/realvjy"> <Realvjy /> </a> at <a href="https://x.com/overlayzstudio">overlayz <TwitterIcon /></a></h3></Credit>
                </Wrapper>
            </Container>
        </FooterSection>
    )
}

const FooterSection = styled.section``;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 0;
    
    margin-top: 80px;
    border-top: 1px solid var(--gray);
`;
const LeftWrap = styled.div``;
const RightWrap = styled.div``;
const Credit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    h3{
        display: flex;
        align-items: center;
        font-size: 18px;
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
