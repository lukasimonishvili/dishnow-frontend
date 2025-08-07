import Styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const StyledSection = Styled.section`
  border-top: 0.5px #3C3C3C solid;
  border-bottom: 0.5px #3C3C3C solid;
  padding-left: 5em;
  padding-right: 5em;
  padding-top: 2.5em;
  padding-bottom : 2.5em;

  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  width:100%;
`;
const StyledSingularityDiv = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;
const StyledSingularity = Styled.h1`
  font-family: 'TT Hoves';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: -0.02em;

  min-width: 200px;

  color: #000000;

  & > span {
    color: #FC8800;
  }
`;


const HomeSingularitiesPanel = () => {
  
  return <>
    <StyledSection>

      <StyledSingularityDiv>
        <FaCheck></FaCheck>
        <StyledSingularity>
          Easy to <span>Use</span>
        </StyledSingularity>
      </StyledSingularityDiv>
      
      <StyledSingularityDiv>
        <FaCheck></FaCheck>
        <StyledSingularity>
          1000+ <span>Recipes</span>
        </StyledSingularity>
      </StyledSingularityDiv>
      
      
      <StyledSingularityDiv>
        <FaCheck></FaCheck>
        <StyledSingularity>
          Eat <span>Better</span> now
        </StyledSingularity>
      </StyledSingularityDiv>
      
      <StyledSingularityDiv>
        <FaCheck></FaCheck>
        <StyledSingularity>
          Improve your <span>Life</span>
        </StyledSingularity>
      </StyledSingularityDiv>

    </StyledSection>

  </>
};

export default HomeSingularitiesPanel;