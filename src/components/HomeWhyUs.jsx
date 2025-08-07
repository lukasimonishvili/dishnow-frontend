import Styled from "styled-components";
import { FaCheck } from "react-icons/fa";

import CirclesOnCircles from "../assets/img/CirclesOnCircles.png";
import FoodTable from "../assets/img/FoodTable.png";
import FoodKorean from "../assets/img/FoodKorean.png";

import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";

const StyledSection = Styled.section`
  border-top: 0.5px #3C3C3C solid;
  border-bottom: 0.5px #3C3C3C solid;

  padding-left: 5em;
  padding-right: 5em;
  padding-top: 5em;
  padding-bottom : 5em;

  display: flex;
  justify-content: space-between;
  width:100%;
  
  @media only screen and (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StyledTittle = Styled.h1`
  font-family: 'TT Hoves';
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 53px;
  /* identical to box height */
  letter-spacing: -0.02em;

  color: #000000;
  @media only screen and (max-width: 1200px) {
    text-align:center;
  }
`;

const StyledSubTittle = Styled.h4`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.08em;

  color: #000000;
  @media only screen and (max-width: 1200px) {
    text-align:center;
  }
`;

const StyledText = Styled.p`
  margin-top: 2em;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  color: #000000;
  @media only screen and (max-width: 1200px) {
    text-align:center;
  }


`;

const StyledLi = Styled.li`

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  color: #000000;

  margin-top: 1em;

  & > span {
    color: #FC8800;
  }
`;

const StyledUL = Styled.ul`
  margin-top: 3em;
  list-style: none; /* Quitamos los puntos normales */
  @media only screen and (max-width: 1200px) {
    width:50%;
  }

  & li::before {
    content: '•';          /* Añadimos el punto manualmente */
    color: #FC8800;            /* Color del punto */
    display: inline-block;
    width: 1em;
    margin-left: -1em;     /* Para colocarlo correctamente */
    font-size: 30px;
  }
`;



const StyleImageTemplate = Styled.img`
  width: 100%;
  height: auto;
`;  
const StyleImageCicles = Styled.img`
  width: 100%;
  height: 100%;
`; 

const FoodImagesContent = Styled.div`
  position: relative;
  margin-right: 15em;
  width: 542.5px;
  @media only screen and (max-width: 1200px) {
    margin-right: 0;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 342.5px;
  }
`;

const StyleImageKoreanContainer = Styled.div`
  position: absolute;
  box-shadow: 0px 4px 40px 1px rgba(0, 0, 0, 0.2);
  width: 349px;
  height: 221px;
  left: 50%;
  top: 50%;

  overflow: hidden;
  border-radius: 18px;
  @media only screen and (max-width: 800px) {
    width: 50%;
    height: 50%;
  }
  
  @media only screen and (max-width: 450px) {
    width: 50%;
    height: 30%;
  }
`;

const StyleImageTableFoodContainer = Styled.div`
  position: absolute;
  top:20%;
  left:0px;

  width: 497px;
  height: 323px;

  box-shadow: 0px 4px 40px 1px rgba(0 , 0, 0, 0.2);
  overflow: hidden;
  border-radius: 18px;

  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 70%;
  }
  
  @media only screen and (max-width: 450px) {
    width: 100%;
    height: 50%;
  }
`;

const StyledContentText = Styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    /* align-content: center; */
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1200px) {
      margin-top: 5em;
    }
`;

const HomeWhyUs = () => {
  const {language} = useLanguage();

  return <>
    <StyledSection>

      <FoodImagesContent>
        
        <StyleImageCicles src={CirclesOnCircles} alt="Food table" />
        <StyleImageTableFoodContainer>
          <StyleImageTemplate src={FoodTable} alt="Food table" />
        </StyleImageTableFoodContainer>
        <StyleImageKoreanContainer>
          <StyleImageTemplate src={FoodKorean} alt="Korean food"/>
        </StyleImageKoreanContainer>
        
      </FoodImagesContent>

      <StyledContentText>
        <StyledSubTittle>{langData[language].homeWhyUsSubTittle}</StyledSubTittle>
        <StyledTittle>{langData[language].homeWhyUsTittle}</StyledTittle>
        <StyledText dangerouslySetInnerHTML={{ __html: langData[language].homeWhyUsText }} />
        <StyledUL>
          <StyledLi dangerouslySetInnerHTML={{ __html: langData[language].homeWhyUsLiOne }} />
          <StyledLi dangerouslySetInnerHTML={{ __html: langData[language].homeWhyUsLiTwo }} />
          <StyledLi dangerouslySetInnerHTML={{ __html: langData[language].homeWhyUsLiThre }} />
        </StyledUL>
      </StyledContentText>

    </StyledSection>

  </>
};

export default HomeWhyUs;