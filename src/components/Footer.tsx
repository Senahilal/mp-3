import styled from "styled-components";
import React  from "react";

const StyledFooter =styled.footer`
    background-color:black;
    padding: 10vh 0;
    text-align: center;
    color: #def2f1;
    width: 100%;
`;


export default function Footer() {
    return (
    <StyledFooter>
        <div>
            <p>All Rights Reserved By Sena Bayram <a>Credits</a>&copy;</p>
        </div>
    </StyledFooter>
    );
}