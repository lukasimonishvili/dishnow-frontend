import woman_home from "../assets/img/home_woman.png";
import Styled from "styled-components";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';


const StyledSection = Styled.section`
  border-top: 0.5px #3C3C3C solid;
  border-bottom: 0.5px #3C3C3C solid;
  padding-left: 86px;

  display: flex;
  justify-content: space-between;
`;

const StyleMainDivisor = Styled.div`
  padding-top: 100px;
  padding-bottom : 100px;
`;

const StyledMainIMG = Styled.img`
  width: 803.72px;
  height: 557.5px;
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
  gap: 10px;
`;

const HomeDescriptionPanel = () => {
  const navigate = useNavigate();

  const ExploreHandle = () => {
    navigate('/recipes'); 
  };
  const LogInHandle = () => {
    navigate('/login');
    
  };

  return <>
    <StyledSection>
      <StyleMainDivisor>
        <StyledSubTittle>EASY COOKING WITH WHAT YOU ALREADY HAVE</StyledSubTittle>
        <StyledTittle>
          Discover delicious recipes<br/>
          With what you already have at <span>Home</span>
        </StyledTittle>
        <StyledParagraph>
          Enter your ingredients and find quick, delicious, and hassle-free recipes.
        </StyledParagraph>

        <StyledButtonsContent>
          <Button input_text="Explore" color="#FC8800" text_color="#ffffff" on_click_function={ExploreHandle} />
          <Button input_text="Log in" color="#ffffff00" text_color="#000000" on_click_function={LogInHandle} />
        </StyledButtonsContent>

      </StyleMainDivisor>


      <StyledMainIMG src={woman_home} alt="cooking woman" />

    </StyledSection>

  </>
};

export default HomeDescriptionPanel;