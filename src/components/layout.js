import styled from "styled-components"
import Header from "./header";
import Footer from "./footer";
export default function layout({children}){
    return(
        <Main>
            <Header/>
            {children}
            <Footer/>
        </Main>
    )
}


const Main = styled.main`
    min-height: 100vh;
    background-image: url("/images/dots.png");
    background-repeat: repeat;
`;