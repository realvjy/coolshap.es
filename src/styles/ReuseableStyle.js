'use client'
import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 1180px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin: 0 16px;
  }
`;


export const Button = styled.button`


`;
export const LinkButton = styled.a`
    display: flex;
    align-items: center;
    color: var(--white);
    text-decoration: none;
    justify-content: center;
    cursor: pointer;
    outline: none;
    gap: 8px;
    background: linear-gradient(180deg, rgba(65, 65, 65, 0.22) 0%, rgba(35, 35, 35, 0) 100%);
    box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.12);
    padding: 12px 24px;
    border-radius: 24px;
    font-size: 16px;
    span{
      line-height: 24px;
      font-size: 18px;
      font-weight: 500;
    }
    &.blue{
        background: linear-gradient(274.9deg, #5418FF -37.07%, #451FD9 78.43%);
        box-shadow: inset 0px 2px 3.1px rgba(255, 255, 255, 0.2);
        &:hover{
          background: linear-gradient(274.9deg, #5418FF -37.07%, #451FD9 78.43%);
          box-shadow: inset 0px 3px 4px rgba(255, 255, 255, 0.2);

        }
    }
    &:hover{
      background: linear-gradient(180deg, rgba(65, 65, 65, 0.42) 0%, rgba(35, 35, 35, 0) 100%);
      color: var(--light-white);
    }
    @media screen and (max-width: 768px) {
      min-width: 250px;
      font-size: 14px;
      padding: 10px 24px;
    }
`;

export const GhostButton = styled.a`
    display: flex;
    align-items: center;
    color: var(--text-gray);
    text-decoration: none;
    cursor: pointer;
    outline: none;
    gap: 2px;
    padding: 6px;
    border-radius: 24px;
    font-size: 14px;
    opacity: 0.8;

    font-weight: 500;
    &:hover{
        color: var(--light-white);
      }
    @media screen and (max-width: 768px) {
        font-size: 13px;
        padding: 4px;
        gap: 2px;
        svg{
          transform: scale(0.8);
        }

    }
`;

export const SocialShare = styled.a`
    display: flex;
    align-items: center;
    color: var(--text-gray);
    text-decoration: none;
    cursor: pointer;
    outline: none;
    gap: 4px;
    background: linear-gradient(180deg, rgba(65, 65, 65, 0.22) 0%, rgba(35, 35, 35, 0) 100%);
    box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.12);
    padding: 6px 16px;
    border-radius: 24px;
    span{
      line-height: 24px;
      font-size: 14px;
      font-weight: 500;
    }

    &:hover{
        color: var(--light-white);
      }
    @media screen and (max-width: 768px) {
        font-size: 12px;
        padding: 4px 12px;
        gap: 2px;
        svg{
          transform: scale(0.8);
        }
        span{
          font-size: 13px;
          line-height: 18px;
        }
    }
`;

export const EarlyButton = styled.a`
    background: var(--main-btn-color);
    border-radius: 16px;
    padding: 8px 18px;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    box-shadow: var(--main-btn-box-shadow);
`;


export const Tag = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    padding: 4px 12px;
    border-radius: 14px;
    display: inline-flex;
    border: 1px solid var(--black);
    
    &.red{
        background: var(--red);
    }
    &.blue{
        background: var(--blue);
    }
    &.yellow{
        background: var(--yellow);
    }
`

export const StyledLink = styled.a`
    line-height: normal;
    cursor: pointer;
`

export const IssueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 20px;
  }
`

export const ButtonLink = styled.a`
    font-size: 24px;
    display: inline-flex;
    line-height: normal;
    padding: 16px 32px;
    border-style: none;
    outline: none;
    cursor: pointer;
    border-radius: 36px;
    background: rgb(228, 232, 236);
    background: linear-gradient(262.31deg, #06F1F8 1.86%, #2F8FFF 27.73%, #FF3382 68.97%, #FFBD6F 99.88%);
    transition: all .3s;
    position: relative;
 

`

export const ToggleButton = styled.div`
  position: relative;
  width: 132px;
  height: 36px;
  overflow: hidden;
  .layer {
    width: 100%;
    background-color: transparent;
    box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1);
    transition: 0.3s ease all;
    z-index: 1;
    border-radius: 18px;
  }
  
  
  .knobs {
    z-index: 2;
  }
  
  .knobs,
  .layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }



  .checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }
  

  .knobs:before,
  .knobs:after,
  .knobs span {
    position: absolute;
    top: 0;
    width: 50%;
    height: 36px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    line-height: 1;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease all;
  }

  .knobs:before {
    content: "";
    left: 0;
    background: linear-gradient(180deg, rgba(65, 65, 65, 0.22) 0%, rgba(35, 35, 35, 0) 100%);
    box-shadow: inset 0px 0px 0px 1px #35353B;
  }
  
  .knobs:after {
    content: "Solid";
    right: 0;
    color: #4e4e4e;
  }
  
  .knobs span {
    display: flex;
    color: #fff;
    z-index: 1;
  }
  
  .checkbox:checked + .knobs span {
    color: #4e4e4e;
  }
  
  .checkbox:checked + .knobs:before {
    left: 66px;
    background: linear-gradient(180deg, rgba(65, 65, 65, 0.22) 0%, rgba(35, 35, 35, 0) 100%);
    box-shadow: inset 0px 0px 0px 1px #35353B;
  }

  .checkbox:checked + .knobs:after {
    color: #fff;
  }

`;


export const BoxButton = styled.a`
  padding: 8px 16px;
  line-height: 14px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--white);
  color: var(--main-black);
  box-shadow: 0px 0px 0px 1px #EBEBEB, 0px 1px 3px rgba(143, 143, 143, 0.3), inset 0px -2px 0.4px rgba(62, 62, 62, 0.04);
  &:hover{
      opacity: 0.8;
      box-shadow: 0px 0px 0px 1px #EBEBEB, 0px 1px 3px rgba(143, 143, 143, 0.3), inset 0px 0px 0.4px rgba(62, 62, 62, 0.04);
    }
`

export const GridBackground = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  box-sizing: border-box;
  background-image: radial-gradient(circle at 13px 13px, rgba(243,243,243, 0.1) 1px, transparent 1px);
  background-size: 30px 30px; /* Adjust to change the grid spacing */
  
  -webkit-mask: radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0) 100%);
  mask: radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0) 100%);
  
`