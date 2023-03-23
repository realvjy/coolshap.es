import styled from "styled-components"
export default function layout({ children }) {
    return (
        <Main>
            {children}
        </Main>
    )
}


const Main = styled.main`
    min-height: 100vh;
    background-image: url("/images/dots.png");
    background-repeat: repeat;
`;