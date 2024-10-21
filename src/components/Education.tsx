import styled from "styled-components";

const StyledH3 =styled.h3`
    color:#17252a;
`;

const StyledH4 =styled.h4`
    color:#2b7a78;
`;

const StyledUl =styled.ul`
    list-style-type:none;
`;

export default function ExperiencePage() {
    return (
    <>
        <StyledH3>Boston University</StyledH3>
        <StyledH4>B.A. in Computer Science | Dean's List in All semeters</StyledH4>
        <StyledUl>
            <li>Dean's List - All Semesters</li>
            <li>Organizations: Upsilon Pi Epsilon - Honor Society For The Computing Sciences</li>
            <li>Relevant Coursework: Database Systems, Intermediate Application Development in C#, Data 
            Structures (Java), Computer Systems, Probability in Computing, Analysis of Algorithms</li>
        </StyledUl>

        <br></br>
        <StyledH3>Camden County College</StyledH3>
        <StyledH4></StyledH4>
        <StyledUl>
            <li>Awards: President’s List | Edith Goodman Scholarship</li>
            <li>Organizations: Camden County College Honors Society</li>
        </StyledUl>
    </>
    );
}