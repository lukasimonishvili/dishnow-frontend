import Styled from "styled-components";
import { FaCheck } from "react-icons/fa";

import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";

const StyledSection = Styled.section`
  border-top: 0.5px #3C3C3C solid;
  border-bottom: 0.5px #3C3C3C solid;
  padding-left: 5em;
  padding-right: 5em;
  padding-top: 2.5em;
  padding-bottom : 2.5em;

  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  width:100%;
`;
const StyledSingularityDiv = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
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
  const {language} = useLanguage();

  return <>
    <StyledSection>

      <StyledSingularityDiv>
        <FaCheck/>
        <StyledSingularity dangerouslySetInnerHTML={{ __html: langData[language].easyToUse}}/>
      </StyledSingularityDiv>
      
      <StyledSingularityDiv>
        <FaCheck/>
        <StyledSingularity dangerouslySetInnerHTML={{ __html: langData[language].amountRecipesPromo}}/>
      </StyledSingularityDiv>
      
      <StyledSingularityDiv>
        <FaCheck/>
        <StyledSingularity dangerouslySetInnerHTML={{ __html: langData[language].eatBetterNow}}/>
      </StyledSingularityDiv>
      
      <StyledSingularityDiv>
        <FaCheck/>
        <StyledSingularity dangerouslySetInnerHTML={{ __html: langData[language].improveYourLife}}/>
      </StyledSingularityDiv>

    </StyledSection>

  </>
};

export default HomeSingularitiesPanel;