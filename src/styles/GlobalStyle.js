"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body.dark-mode {
  --img: invert(1);
  --avatar-shadow: rgba(28,22,47,.3);
}

body.light-mode {
  --img: invert(0);
  --avatar-shadow: rgba(48,52,77,.1);
} 

::selection {
  background: var(--selection-pink);
  color: var(--white);
}

*, :after, :before  {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}


* {
  --selection-sky: #00FFFF;
  --selection-pink: #f81ce5;
  --bg-light-yellow: #F2F2EE;
  --bg-light-blue: #EDF2FF;
  --bg-light-red: #F2EEEE;
  
  --light-yellow: #FFF6C5;
  --yellow: #F8C231;
    
  --light-red: #FFC5EC;
  --red: #FF6969;
  --pink: #ED81FF;
  --light-pink: #FFE9FA;
  
  --blue: #00A3FF;
  --light-blue: #B7F2FF;
  
  --white: #FFFFFF;
  --white20: #ecedee;
  --black: #0A0A0D;
  --surface-black: #131313;
  --light-gray: #858585;
  --gray: #1C1F21;
  --light-black: rgba(0,0,0,.05);
  --light-white: rgba(255,255,255,0.8);
  --text-gray: rgba(164,164, 164, 0.8);
  --text-gray2: rgba(147,147, 147, 0.4);

  --dark-color: #000;
    --dark-light: rgba(83,91,118,.28);
    --top-gradient-height: 212px;
    --top-gradient-half-height: calc(var(--top-gradient-height) / 2);
    --max-desktop: 800px;
    --coming-soon-color: linear-gradient(180deg,rgba(0,255,163,.19),rgba(0,255,194,.163));
    --coming-soon-text-color: linear-gradient(270deg,#ef9d21 2.16%,#21ef8c 53.63%,rgba(33,227,239,.58));
    --main-btn-box-shadow: -2px 1px 3px 0.5px #9f81f4,0px -2px 3px 1px rgba(36,0,255,.7),2px 0px 3px 1px hsla(15,84%,73%,.8),0px 0px 3px 2px rgba(48,255,243,.7),0px 0px 6px 2px hsla(0,0%,100%,.8);
    --main-btn-color: transparent;
    --text-color: hsla(180,1%,69%,.58);
    --text-logo: invert(1);
    --emo: cubic-bezier(.4,0,.2,1);
    --emo-in-out: cubic-bezier(.4,0,.2,1);
    --emo-out: cubic-bezier(0,.2,.2,1);
    --head-gradient-size: 2000px;
    --card-bg: linear-gradient(rgba(18, 18, 20, 1) 0%, rgba(12, 12, 14, 1) 100%);
}

html{
    scroll-behavior: smooth;
}
body {
  font-family: var(--font-outfit);
  background: var(--black);
  margin: 0;
  padding: 0;
  font-weight: 400;
  color: var(--white);
  text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

a{
  color: inherit;
  text-decoration: unset;
}

main{
    min-height: 100vh;
    
}
.toast-container {
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
}
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
}

.nft-clipped{
  clip-path: url(#hex);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.oval-clipped{
  clip-path: url(#oval);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@-webkit-keyframes gradient {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes gradient {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes gradient {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}


@keyframes rotate-gradient {
  from {
        transform: translateX(-50%) rotate(0deg);
      }
      to {
        transform: translateX(-50%) rotate(360deg);
      }
}

@keyframes border-shine {
  0% {
      background-position: 0% 50%;
  }
  100% {
      background-position: 100% 50%;
  }
}

.header-gradient {
  width: 200px; /* Adjust the width and height as needed */
  height: 200px;
  border-radius: 50%; /* Creates a circular shape */
  background: radial-gradient(circle, #ffcc00, #ff6600);
  background-size: 200% 200%;
  animation: rotate-gradient 5s linear infinite; /* Adjust the duration and timing function as needed */
}


.Collapsible{
    font-size: 22px;
    font-weight: 500;
    padding: 20px 0;
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px; /* Set the height of the bottom border */
      background: radial-gradient(50% 50% at 50% 50%, #EBEBEB 0%, rgba(235, 235, 235, 0) 100%);
    }
    &:last-child{
      &::after{
        background: none;
        height: 0;
      }
    }
    .details{
      ul{
        display: flex;
        flex-direction: column;
        li{
          font-size: 16px;
          margin: 8px 0;
          font-weight: 400;
          color: var(--text-black2);
        }
      }
    }
    p{  
        margin-top: 24px;
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
        opacity: 0.6;
        color: var(--text-black2);
        span{
          color: var(--white);
          opacity: 0.6;
        }
        @media screen and (max-width: 768px) {
          width: auto;
          font-size: 16px;
        }
    }
    .collapsible-title{
      width: 100%;
      display: flex;
      justify-content: space-between;
      transition: all 0.3s ease;
      span{
        font-size: 20px;
        cursor: pointer;
        font-weight: 500;
        color: var(--text-black2);
        @media screen and (max-width: 768px) {
          width: auto;
          font-size: 18px;
        }
      }
    }
    .Collapsible__trigger{
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        .plus-icon{
          color: var(--blue);
          transition: all 0.3s ease;
          transform: scale(0.8);
        }
        &.is-open{
            transition: all 0.3s ease;
            .plus-icon{
                transform: scale(0.8) rotateZ(45deg); 
            }
        }
    }
}


`;

export default GlobalStyle;
