"use client";

import HeaderBG from '@/components/header-bg';
import { Container, LinkButton } from '@/styles/ReuseableStyle';
import { Coolshape } from 'coolshapes-react';
import Link from 'next/link'
import styled from "styled-components"

export default function NotFound() {
    return (
        <NoSection>
            <HeaderBG />
            <NoContainer>
                <NoWrapper>
                    <FourOh>
                        <Coolshape type="number" index={4} />
                        <Coolshape type="number" index={0} />
                        <Coolshape type="number" index={4} />
                    </FourOh>
                    <h2>Only 404 Coolshape found here</h2>
                    <LinkButton href="/">Go Back Home</LinkButton>
                </NoWrapper>
            </NoContainer>
        </NoSection>
    )
}


const NoSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  /* justify-content: center;
  align-items: center; */
`;


const NoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
    gap: 12px;
    h2{
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 20px;
        text-align: center;
    }
    /* margin: 0 auto; */
    @media screen and (max-width: 768px) {
      padding: 12px;
      h2{
        font-size: 20px;
      }
    }
`;
const NoContainer = styled(Container)`
    min-height: 100vh;
    display: flex;
    overflow: hidden;
`

const FourOh = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
    padding: 24px;
    svg{
        height: 100%!important;
        width: 100%!important;
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 12px;
      gap: 20px;
    }
`
