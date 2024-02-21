'use client'
import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 1330px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


export const Button = styled.button`


`;
export const LinkButton = styled.a`
    display: flex;
    align-items: center;
    color: var(--white);
    text-decoration: none;
    cursor: pointer;
    outline: none;
    gap: 8px;
    background: linear-gradient(180deg, rgba(65, 65, 65, 0.22) 0%, rgba(35, 35, 35, 0) 100%);
    box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.12);
    padding: 12px 24px;
    border-radius: 24px;
    span{
      line-height: 24px;
      font-size: 18px;
      font-weight: 500;
    }
    &.blue{
        background: linear-gradient(274.9deg, #5418FF -37.07%, #451FD9 78.43%);
        box-shadow: inset 0px 2px 3.1px rgba(255, 255, 255, 0.2);
    }
`;

export const SocialShare = styled.a`
    display: flex;
    align-items: center;
    color: var(--text-gray2);
    text-decoration: none;
    cursor: pointer;
    outline: none;
    gap: 8px;
    background: linear-gradient(180deg, rgba(65, 65, 65, 0.22) 0%, rgba(35, 35, 35, 0) 100%);
    box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.12);
    padding: 8px 16px;
    border-radius: 24px;
    span{
      line-height: 24px;
      color: var(--text-gray);
      font-size: 14px;
      font-weight: 500;
    }
    &.blue{
        background: linear-gradient(274.9deg, #5418FF -37.07%, #451FD9 78.43%);
        box-shadow: inset 0px 2px 3.1px rgba(255, 255, 255, 0.2);
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
    box-shadow: var(--main-btn-box-shadow)
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
    color: ${({ theme }) => theme.text.primary};
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


export const Seprator = styled.div`
    height: 1px;
    background: var(--seprator-color-a01);
    position: relative;
    &.absolute{
        left: 50%;
        max-width: var(--max-container-width);
        position: absolute;
        transform: translateX(-50%);
        /* width: calc(100% - var(--container-margin-x)*2); */
    }
    &::before{
        bottom: 0;
        content: "";
        height: inherit;
        position: absolute;
        width: 300px;
        right: 100%;
        background: linear-gradient(-90deg, var(--seprator-color-a01) 0%, var(--seprator-color-a0) 100%);
    }
    &::after{
        bottom: 0;
        content: "";
        height: inherit;
        position: absolute;
        width: 300px;
        left: 100%;
        background: linear-gradient(90deg, var(--seprator-color-a01) 0%, var(--seprator-color-a0) 100%);
    }
    em{
        
        &::before{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            top: -4px;
            width: 9px;
            left: -4px;
            z-index: 999;
        }
        &::after{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            top: -4px;
            width: 9px;
            right: -4px;
            z-index: 999;
        }
    }
`;

export const BoxEm = styled.em`

    &.left-right{
        &::before{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            top: -5px;
            width: 9px;
            left: -4px;
            z-index: 999;
        }
        &::after{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            top: -5px;
            width: 9px;
            right: -4px;
            z-index: 999;
        }
    }
    &.right{
        &::after{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            top: -5px;
            width: 9px;
            right: -4px;
            z-index: 999;
        }
    }
    &.right-bottom{
        &::after{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            bottom: -4px;
            width: 9px;
            right: -5px;
            z-index: 999;
        }
    }
    &.left-bottom{
        &::before{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            bottom: -4px;
            width: 9px;
            left: -5px;
            z-index: 999;
        }
    }
    &.left-right-bottom{
        &::after{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            bottom: -4px;
            width: 9px;
            right: -4px;
            z-index: 999;
        }
        &::before{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            bottom: -4px;
            width: 9px;
            left: -5px;
            z-index: 999;
        }
    }
    &.left{
        &::before{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            top: -5px;
            width: 9px;
            left: -4px;
            z-index: 999;
        }
    }
`;

export const BoxSeprator = styled.div`
    height: 1px;
    background: var(--seprator-color-a01);
    position: relative;
    &.absolute{
        left: 50%;
        width: 100%;
        position: absolute;
        transform: translateX(-50%);
        bottom: 0;
        /* width: calc(100% - var(--container-margin-x)*2); */
    }
    &.left{
        &::before{
        bottom: 0;
        content: "";
        height: inherit;
        position: absolute;
        width: 300px;
        right: 100%;
        background: linear-gradient(-90deg, var(--seprator-color-a01) 0%, var(--seprator-color-a0) 100%);
        }
    }
    &.right{
        &::after{
            bottom: 0;
            content: "";
            height: inherit;
            position: absolute;
            width: 300px;
            left: 100%;
            background: linear-gradient(90deg, var(--seprator-color-a01) 0%, var(--seprator-color-a0) 100%);
        }
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