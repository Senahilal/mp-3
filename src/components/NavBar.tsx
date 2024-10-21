import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledNavBar = styled.nav`
    width: 20%;
    padding: 1% 1%;
    background-color: #17252a;
    display: flex;
    flex-direction: column;
    align-items: center; /* Horizontally centers the ul */
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 10px 0;
    width: 100%; /* Ensures the ul takes up the full width of the parent */
    align-items: center; /* Centers the list items horizontally */
`;

const StyledLi = styled.li`
    background-color: #2b7a78;
    padding: 3%;
    margin-bottom: 10%;
    text-align: center;
    width: 80%;
`;

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    return (
    <Link style={{textDecoration: "none",color: "#def2f1",fontWeight: "bold",
        fontSize: "calc(2px + 1vw)",display: "block",width: "100%"}} to={to}>
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