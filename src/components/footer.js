import { Container } from "@/styles/reusableStyles";
import styled from "styled-components"


export default function footer(){
    return(
        <Section>
            <Container>
                <Wrapper>
                    <LeftWrap>
                        left
                    </LeftWrap>
                    <RightWrap>
                        right
                    </RightWrap>
                </Wrapper>
            </Container>
        </Section>
    )
}

const Section = styled.section``;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid ${({theme})=> theme.colors.borderBlack};
`;
const LeftWrap = styled.div``;
const RightWrap = styled.div``;
