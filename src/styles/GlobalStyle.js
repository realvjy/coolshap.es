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

* {
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
  --black: #090A0B;
  --light-gray: #858585;
  --gray: #1C1F21;
  --light-black: rgba(0,0,0,.05);
  --light-white: rgba(255,255,255,.03);
  --text-gray: #6B6B7B;

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
  
}

html{
    scroll-behavior: smooth;
}
body {
  font-family: 'Outfit', sans-serif;
  background: ${({ theme }) => theme.bg.primary};
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.text.primary};
  text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background-image: url('/images/dots.png');

}

a{
  color: ${({ theme }) => theme.text.primary};
}

.main{
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

`;

export default GlobalStyle;
