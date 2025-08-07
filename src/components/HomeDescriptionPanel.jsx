import woman_home from "../assets/img/home_woman.png";
import Styled from "styled-components";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";


const StyledSection = Styled.section`
  border-top: 0.5px #3C3C3C solid;
  border-bottom: 0.5px #3C3C3C solid;
  padding-left: 5em;
  padding-bottom: 5em;

  display: flex;
  justify-content: space-between;
  
  @media only screen and (max-width: 1200px) {
    text-align: center;
    flex-direction:column;
    align-items: anchor-center;
    padding-right: 5em;
  }
`;

const StyleMainDivisor = Styled.div`
  padding-top: 100px;
  padding-bottom : 100px;
`;

const StyledMainIMG = Styled.img`
  box-shadow: 0px 4px 40px 1px rgba(0 , 0, 0, 0.2);
  width: 100%;
  max-width: 803.72px;
  height: 557.5px;
  margin-left: 10px;
  border-radius: 0px 0px 0px 18px;
  @media only screen and (max-width: 1200px) {
    height: auto;
    border-radius: 18px;
  }
`;

const StyledSubTittle = Styled.h4`/* TRY TODAY */
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.08em;
  color: #000000;
  margin-bottom :10px;
`;

const StyledTittle = Styled.h1`
  font-family: 'TT Hoves';
  font-size: 45px;
  line-height: 53px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom :27px;

  & > span{
    color: #FC8800;
  }
`;

const StyledParagraph = Styled.p`

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  color: #000000;
  margin-bottom: 39px;

`;

const StyledButtonsContent = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const HomeDescriptionPanel = () => {
  const navigate = useNavigate();
  const {language} = useLanguage();

  
  const ExploreHandle = () => {
    navigate('/recipes'); 
  };
  const LogInHandle = () => {
    navigate('/login');
    
  };

  return <>
    <StyledSection>
      <StyleMainDivisor>
        <StyledSubTittle>{langData[language].homeDesSubTitle}</StyledSubTittle>
        <StyledTittle dangerouslySetInnerHTML={{ __html: langData[language].homeDesTitle }} >
        </StyledTittle>
        <StyledParagraph>
          {langData[language].homeDesParagraph}
        </StyledParagraph>

        <StyledButtonsContent>
          <Button input_text={langData[language].explore} color="#FC8800" text_color="#ffffff" on_click_function={ExploreHandle} />
          <Button input_text={langData[language].login} color="#ffffff00" text_color="#000000" on_click_function={LogInHandle} />
        </StyledButtonsContent>

      </StyleMainDivisor>


      <StyledMainIMG src={woman_home} alt="cooking woman" />

    </StyledSection>

  </>
};

export default HomeDescriptionPanel;