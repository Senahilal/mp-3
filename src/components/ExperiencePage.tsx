import styled from "styled-components";


const StyledH3 =styled.h3`
    color:#17252a;
`;

const StyledH4 =styled.h4`
    color:#2b7a78;
`;

const StyledUl =styled.ul`
    list-style-type:square;
`;

export default function ExperiencePage() {
    return (
    <>
        <StyledH3>Boston University |Boston, MA</StyledH3>
        <StyledH4>TTBU Mentor</StyledH4>
        <StyledUl>
            <li>Guided new transfer students, supporting their academic and social integration through regular meetings and communication.</li>
            <li>Participated in university events and community activities to foster a welcoming environment and promote student success.</li>
        </StyledUl>

        

        <StyledH3>Boston University, Department of Computer Science| Boston, MA</StyledH3>
        <StyledH4>Course Grader for CS330 - Introduction to Algorithms</StyledH4>
        <StyledUl>
            <li>Evaluated complex algorithmic solutions of 280+ students, demonstrating attention to detail and adherence to academic standards, and provided feedback to students to enhance their understanding and performance.</li>
            <li>Collaborated with faculty to ensure fair and accurate grading, enhancing understanding of algorithmic concepts.</li>
        </StyledUl>

        

        <StyledH3>Target Corporation | Voorhees, NJ</StyledH3>
        <StyledH4>Fulfillment Expert</StyledH4>
        <StyledUl>
            <li>Managed a dynamic order processing system, showcasing the ability to adapt to new processes efficiently and contribute to a high-paced team environment.</li>
            <li>Delivered exceptional guest service, focusing on customer satisfaction and prompt issue resolution.</li>
        </StyledUl>

        

        <StyledH3>Turkish Foundation</StyledH3>
        <StyledH4>Turkish Teacher and Mentor (Volunteering)</StyledH4>
        <StyledUl>
            <li>Developed interactive curriculum and taught Turkish language to 15 elementary school students for a year.</li>
            <li>Provided mentorship, supporting the academic and personal development of students through one-on-one sessions.</li>
        </StyledUl>
    </>
    );
}