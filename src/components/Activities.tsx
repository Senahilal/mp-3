import styled from "styled-components";
import { Link } from "react-router-dom";
import React  from "react";
import volleyball from '../assets/volleyball.jpg';
import p2 from '../assets/p2.jpg';
import art from '../assets/art.jpg';

const StyledTable =styled.table`
    margin: auto; /*Centering table horizontally.*/
    text-align: center;
    background-color:#3aafa9;
`;

const StyledH4 =styled.h4`
    color:#2b7a78;
`;

const StyledTd =styled.td`
    text-align: center;
    color:#003559;
    max-width: 70%;
`;

const StyledImg =styled.img`
    border-radius: 10px;
    margin: 5% 0;
    max-width: 70%;
`;


export default function ExperiencePage() {
    return (
    <>
        <div>
            <h2>Activities and Interests</h2>
            <StyledTable> 
                {/* <!--Photography--> */}
                <tr> 
                    <StyledTd><StyledImg src={p2} alt="Photos"/></StyledTd>
                    <StyledTd> <StyledH4>Photography</StyledH4>
                        I enjoy capturing the beauty of nature, especially colorful skies and the moon. 
                        I also love taking candid shots of people and capturing their moments.</StyledTd>
                </tr>

                {/* <!--Drawing/Painting--> */}
                <tr> 
                    <StyledTd><StyledImg src={art} alt="My art"/></StyledTd>
                    <StyledTd> <StyledH4>Drawing and Painting</StyledH4>
                        I enjoy drawing and painting, working with acrylics and pencil sketches. 
                        One of my favorite challenges was painting killer whales mural for a friend's swimming pool, 
                        which has been my biggest artistic challenge so far.</StyledTd>
                </tr>

                {/* <!--Volleyball--> */}
                <tr> 
                    <StyledTd><StyledImg src={volleyball} alt="volleyball"/></StyledTd>
                    <StyledTd><StyledH4>Volleyball</StyledH4>
                        I've been playing volleyball since elementary school, and it’s been a passion of mine ever since. 
                        I enjoy the excitement of the game, whether I'm playing competitively or watching a good match.</StyledTd>
                </tr>

            </StyledTable>     
        </div> 
    </>
    );
}