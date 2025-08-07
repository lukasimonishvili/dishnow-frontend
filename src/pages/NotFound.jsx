import Styled from "styled-components";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";
import ErrorIMG from "../assets/img/ERROR_404.png";
import BGWhitePointsIMG from "../assets/img/white_bg_with_points.png";
import Button from "../components/Button.jsx";
import { useNavigate } from 'react-router-dom';

const ImgTemplate = Styled.img`
  width: 291px;
  height: 220px;
  @media only screen and (max-width: 291px) {
    width: 100%;
    height: auto;
  }
`;
const BodyPage = Styled.div`
  background-size: cover;
  background-image: url(${BGWhitePointsIMG});
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 10em;
  padding-bottom: 5em;
  padding-left: 2em;
  padding-right: 2em;

`;
const DivTextButton = Styled.div`
  width: fit-content;
  height: 100%;
  display:flex;
  flex-direction: column;
  gap: 1em;
`;

const StyledTittle = Styled.h1`
  font-family: 'TT Hoves';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 34px;
  /* identical to box height, or 200% */
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;

  color: #565872;
`;

const NotFound = () => {
  const navigate = useNavigate();
  const {language} = useLanguage();

  const HomeHandle = () => {
    navigate('/'); 
  };

  return <>

    <BodyPage>
      <ImgTemplate src={ErrorIMG} alt="Error 404 icon" />
      <DivTextButton>
        <StyledTittle>{langData[language].oppsPageNotFound}</StyledTittle>
        <Button border_radius = "20em" input_text={langData[language].goBackHome} text_color="#FFFFFF" color="#FB8133" on_click_function={HomeHandle}/>
      </DivTextButton>
    </BodyPage>

  </>;
};

export default NotFound;
