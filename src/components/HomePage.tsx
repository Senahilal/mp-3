import styled from "styled-components";
import { Link } from "react-router-dom";
import me from '../assets/me.jpg';


const StyledImg =styled.img`
    display: block;
    margin: 0 auto;
    max-width: 70%;
`;


export default function HomePage() {
    return (
    <>
        <div>
            
            <StyledImg id="me" src={me}/>
        </div>

        <div > 
            {/* <!-- Short Intro --> */}
            <p>Hi! Welcome to my page. My name is Sena Bayram. I'm currently studying computer science at Boston University 
                and excited to gain experience in web development through the CS391 Web Application Development course. 
                I also have a growing interest in AI/ML. 
                This semester, I'm taking four computer science <Link to="/courses">Courses</Link>: CS412, CS440, CS391, and CS332.</p> 
        </div>
    </>
    );
}