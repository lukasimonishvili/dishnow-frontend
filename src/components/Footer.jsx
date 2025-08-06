import Styled from "styled-components";
import logoImage from "../assets/img/logo.png";
import instagramIcon from "../assets/img/instagram.svg";
import twitterIcon from "../assets/img/twitter.svg";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";

const StyledFooter = Styled.footer`
    width: 100%;
    padding-top: 50px;
    padding-bottom: 80px;
    border-top: 1px solid #3C3C3C;
`;

const StyledContainer = Styled.div`
    width: 1140px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    color: #000000;
    line-height: 20px;

    & > p {
        font-size: 15px;
    }

    @media screen and (max-width: 1200px) {
      width: 100%;
      padding: 0 30px;
    }

    @media screen and (max-width: 760px) {
      flex-direction: column;
      align-items: center;
      text-align: center;

      & > p {
        margin: 30px 0;
      }
    }
`;

const StyledLogoWrapper = Styled.div`
    & > img {
        height: 50px;
        margin-bottom: 30px;
    }

    p {
        max-width: 280px;
        font-size: 14px;
    }
`;

const StyledSocials = Styled.div`
    display: flex;
    align-items: center;

    & > a  {
        margin-left: 15px;
    }
`;

const Footer = () => {
  const { language } = useLanguage();

  return (
    <StyledFooter>
      <StyledContainer>
        <StyledLogoWrapper>
          <img src={logoImage} alt="Logo" />
          <p>{langData[language].footerDescription}</p>
        </StyledLogoWrapper>
        <p>
          © {new Date().getFullYear()} DishNow.{" "}
          {langData[language].footerRights}
        </p>
        <StyledSocials>
          <Link
            to="https://www.instagram.com/dishnow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </Link>
          <Link
            to="https://www.twitter.com/dishnow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter" />
          </Link>
        </StyledSocials>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
