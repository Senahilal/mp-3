import {Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import styled from "styled-components";
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import ExperiencePage from './components/ExperiencePage';
import Activities from './components/Activities';
import Projects from './components/Projects';
import Education from './components/Education'; 


const ParentDiv=styled.div`
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Goudy Old Style", Garamond, "Big Caslon";
  color: #feffff;  
`;

const StyledBody = styled.body`
  align-content: center;
`;

const StyledWrapperDiv = styled.div`
  width: 80vw;
  margin: 0px auto;
  border: 1px black solid;
`;

// Navbar and Main Content
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const StyledMain =styled.main`
  background-color: #3aafa9; /*or c7ddf8*/
  width: 80%;
  padding: 3%;
  min-height: 100vh;
  font-size: 130%;
  text-align: center;
  box-sizing: border-box; /* Ensures padding is included in the width calculation */

  @media screen and (max-width: 750px) {
    width: 100%;
  } 
`;

const Root = () => {
  return (  
  <ParentDiv>
    <StyledBody>

      <StyledWrapperDiv>
        <Header></Header>

        {/* Navbar and Main Content */}
        <ContentContainer>
          
          {/* Navbar */}
          <NavBar></NavBar>

          {/* Main Content */}
          <StyledMain>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/courses" element={<CoursesPage/>}/>
              <Route path="/experience" element={<ExperiencePage/>}/>
              <Route path="/activities" element={<Activities/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/education" element={<Education/>}/>
            </Routes>
          </StyledMain>
          
        </ContentContainer>
        <Footer></Footer>
      </StyledWrapperDiv>
    </StyledBody>
  </ParentDiv>
)
}
const router = createBrowserRouter([
  {path: "*", Component: Root},
]);
function App() {
return (
  <RouterProvider router={router}/>
)
}

// function App() {

//   return (
//     <ParentDiv>

//       {/* Body */}
//       <StyledBody>
//         <Header></Header>

//         {/* Navbar and Main Content */}
//         <ContentContainer>
//           <NavBar></NavBar>
//           {/* Main Content */}
          
//         </ContentContainer>

//         <Footer></Footer>
        
//       </StyledBody>

//     </ParentDiv>
    
//   )
// }

export default App
