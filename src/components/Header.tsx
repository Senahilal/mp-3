import styled from "styled-components";

const StyledHeader =styled.header`
    width: 100%;
    background-color:#2b7a78;
    color:#17252a;
    align-content: left;

    @media screen and (max-width: 750px) {
        align-content: center;
    }
`;
const StyledDiv =styled.div`
    max-width: 30%;
    text-align: center;
    padding: 1% 0.5%;
    font-size: 85%;

    @media screen and (max-width: 750px) {
        margin: auto;
        max-width: 50%;
    }
`;
const StyledH1 =styled.h1``;
const StyledP =styled.p``;

export default function Header() {
    return (
    <StyledHeader>
        <StyledDiv>
            <StyledH1>Sena Bayram</StyledH1>
            <StyledP>My Online Resume</StyledP> 
        </StyledDiv> 
    </StyledHeader>
    );
}