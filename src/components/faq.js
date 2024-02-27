"use client";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { TwitterIcon, PlusIcon } from "./icons";
import { Container, Seprator } from "@/styles/ReuseableStyle";
import Collapsible from 'react-collapsible';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleCollapsibleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <FAQSection>
      <Container>
        <FAQWrap className="border-left-right">
          <h3>FAQs</h3>
          <h4>Answers to common questions about this uilogos</h4>
        </FAQWrap>
      </Container>
      <Container>
        <FAQListWrap className="border-left-right">
          <div className="faq-list">
            <Collapsible
              trigger={
                <div className="collapsible-title" onClick={() => handleCollapsibleClick(1)}>
                  <span>What is uilogos?</span>
                  <PlusIcon />
                </div>
              }
              key="1"
              open={openIndex === 1}
            >
              <p>
                Loreum ipusm for logos. Insert dummy logos. More than 25+ professionally designed logos and plugin that help you get dummy logos directly into your mock, design or presentations.
              </p>
            </Collapsible>



          </div>
        </FAQListWrap>

      </Container>
    </FAQSection>
  )
}

const FAQSection = styled.div`

`

const FAQWrap = styled.div`
  background: var(--bg-alpha-a05);
  display: flex;
  padding: 40px 20px;
  flex-direction: column;
  justify-content: center;
  h3{
    text-align: center;
    color: var(--blue);
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 20px;
    }
  }
  h1{
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--main-black);
    margin-bottom: 8px;
    @media screen and (max-width: 768px) {
        font-size: 36px;
        line-height: 40px;
    }
  }
  h4{
    color: var(--text-black2);
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 20px;
    }
  }
`;

const FAQListWrap = styled.div`
  max-width: 480px;
  padding: 20px;
  display: flex;
  margin: 20px auto;
`