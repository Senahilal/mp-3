import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledH3 =styled.h3`
    color:#17252a;
`;


export default function CoursesPage() {
    return (
    <>
        <div>
            <StyledH3>&nbsp;&nbsp;&nbsp;&nbsp;<Link to="https://www.bu.edu/academics/cas/courses/cas-cs-412/">CS-412 Full-Stack Application Design and Development</Link></StyledH3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Introduction to design and development of full-stack web applications. 
                Topics include asynchronous programming; non-relational data stores; use of APIs; 
                serverless (cloudbased) applications; decoupled client/server architectures; performance; 
                testing; packaging; and deployment. Examines current and proposed technology stacks.</p>
        </div>
        <div>
            <StyledH3>&nbsp;&nbsp;&nbsp;&nbsp;<Link to="https://www.bu.edu/academics/cas/courses/cas-cs-440/">CS-440 Introduction to Artificial Intelligence</Link></StyledH3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; Introduction to computer systems that exhibit intelligent behavior, in particular, perceptual and robotic systems. 
                Topics include human computer interfaces, computer vision, robotics, game playing, pattern recognition, knowledge 
                representation, planning.</p>
        </div>
        <div>
            <StyledH3>&nbsp;&nbsp;&nbsp;&nbsp;<Link to="https://www.bu.edu/academics/cas/courses/cas-cs-332/">CS-332 Elements of the Theory of Computation</Link></StyledH3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;The basic concepts of the theory of computation are studied. Topics include models of computation, polynomial time,
                Church's thesis; universal algorithms, undecidability and intractability; 
                time and space complexity, nondeterminism, probabilistic computation and reductions of computational problems.</p>
        </div>
        <div>
            <StyledH3>&nbsp;&nbsp;&nbsp;&nbsp;<Link to="https://www.bu.edu/academics/cas/courses/cas-cs-391/">Web Application Development course Elements of the Theory of Computation</Link></StyledH3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Web Application Development is a comprehensive course empowering students to build dynamic web apps. 
                Through hands-on projects, they learn essential code management with Git/GitHub, frontend languages like HTML/CSS, and interactive
                    app development with JavaScript. React is introduced to simplify UI creation and promote code reusability. Students explore 
                    industry-standard tools like Next.js for efficient API handling and Vercel for deployment. MongoDB ensures secure data storage. 
                    Advanced topics include React Native with GraphQL/Apollo for mobile app development and React-VR with Three.js for immersive web 
                    experiences. Graduates master full-stack development and deployment.</p>
        </div>
    </>
    );
}