import Styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const StyledSection = Styled.section`
  border-top: 0.5px #3C3C3C solid;
  border-bottom: 0.5px #3C3C3C solid;
  padding: 42.5px;
  padding-left: 86px;
  padding-right: 86px;
  padding-top: 100px;
  padding-bottom : 100px;

  display: flex;
  justify-content: space-between;
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

  color: #000000;

  & > span {
    color: #FC8800;
  }
`;


const HomeWhyUs = () => {

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

export default HomeWhyUs;