import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledNavBar = styled.nav`
    width: 20%;
    padding: 1%;
    background-color: #17252a;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box; /* Ensures padding is included in the width calculation */

    @media screen and (max-width: 750px) {
        width: 100%;
    } 
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 2% 3%;
    width: 100%;
    align-items: center; 
    box-sizing: border-box; /* Ensures padding is included in the width calculation */

    @media screen and (max-width: 750px) {
        flex-direction: row;
        width: 100%;
        margin: auto;
    } 
`;

const StyledLi = styled.li`
    background-color: #2b7a78;
    padding: 3%;
    margin-bottom: 10%;
    text-align: center;
    width: 80%;
    font-size: calc(2px + 1vw);

    @media screen and (max-width: 750px) {
        font-size: calc(1px + 2vw);
        width: auto; /* Let li shrink to fit content on smaller screens */
        margin: 0 5px; /* Small margins between items on small screens */
        padding: 2%;
        text-align: center;
        max-width: 100%;
    } 
`;

// Styled component for the Link
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    return (
    <Link style={{textDecoration: "none",color: "#def2f1",fontWeight: "bold"
        ,display: "block"}} to={to}>
        {children}
    </Link>
    );
};

export default function NavBar() {
    return (
    //  Navigation Bar
    <StyledNavBar>
        <StyledUl>
            <StyledLi><NavLink to="/">Home</NavLink></StyledLi>            
            <StyledLi><NavLink to="/experience">Experience</NavLink></StyledLi>
            <StyledLi><NavLink to="/projects">Projects</NavLink></StyledLi>
            <StyledLi><NavLink to="/courses">Courses</NavLink></StyledLi>
            <StyledLi><NavLink to="/activities">Activities</NavLink></StyledLi>
            <StyledLi><NavLink to="/education">Education</NavLink></StyledLi>
        </StyledUl>
    </StyledNavBar>
    );
}