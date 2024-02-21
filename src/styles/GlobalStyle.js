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
  --black: #0D0D0D;
  --surface-black: #121212;
  --light-gray: #858585;
  --gray: #1C1F21;
  --light-black: rgba(0,0,0,.05);
  --light-white: rgba(255,255,255,.03);
  --text-gray: rgba(164,164, 164, 0.6);
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
    background-image: url('/images/dots.png');
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





.button-cover,
.knobs,
.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.button {
  position: relative;
  width: 74px;
  height: 36px;
  overflow: hidden;
}

.button.r,
.button.r .layer {
  border-radius: 100px;
}
.button.b2 {
  border-radius: 2px;
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

.knobs {
  z-index: 2;
}

.layer {
  width: 100%;
  background-color: #ebf7fc;
  transition: 0.3s ease all;
  z-index: 1;
}
/* Button 10 */
#button-10 .knobs:before,
#button-10 .knobs:after,
#button-10 .knobs span {
  position: absolute;
  top: 4px;
  width: 20px;
  height: 10px;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  border-radius: 2px;
  transition: 0.3s ease all;
}

#button-10 .knobs:before {
  content: "";
  left: 4px;
  background-color: #03a9f4;
}

#button-10 .knobs:after {
  content: "Solid";
  right: 4px;
  color: #4e4e4e;
}

#button-10 .knobs span {
  display: inline-block;
  left: 4px;
  color: #fff;
  z-index: 1;
}

#button-10 .checkbox:checked + .knobs span {
  color: #4e4e4e;
}

#button-10 .checkbox:checked + .knobs:before {
  left: 42px;
  background-color: #f44336;
}

#button-10 .checkbox:checked + .knobs:after {
  color: #fff;
}

#button-10 .checkbox:checked ~ .layer {
  background-color: #fcebeb;
}

`;

export default GlobalStyle;
