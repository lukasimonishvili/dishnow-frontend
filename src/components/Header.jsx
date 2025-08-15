import { Link } from "react-router-dom";
import Styled from "styled-components";
import logoImage from "../assets/img/logo.png";
import { useState } from "react";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";

const StyledComponents = Styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ffffff;
    z-index: 50;
`;

const StyledContainer = Styled.div`
    width: 1140px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    & img {
        height: 50px;
    }

    @media screen and (max-width: 1200px) {
        width: 100%;
        padding: 0 30px;
    }
`;

const StyledNavigation = Styled.nav`
    display: flex;
    align-items: center;
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    & a {
        margin-right: 48px;
        transition: 0.3s;
        color: #1F1D1B;

        &:hover {
            text-decoration: underline;
        }
    }

    @media screen and (max-width: 700px) {
        & a {
            margin-right: 20px;
        }
    }

    @media screen and (max-width: 600px) {
        position: fixed;
        top: 70px;
        left: ${(props) => (props.isburgeropen ? "0" : "-100%")};
        height: calc(100vh - 70px);
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        transition: 0.3s;

        & > a {
            margin-right: 0;
            margin-bottom: 20px;
        }
    }
`;

const StyledLanguagePicker = Styled.button`
    position: relative;
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    z-index: 52;
    padding-left:2px;
    padding-right:2px;

    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
    &:after {
        content: "";
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0; 
        left: 0;
        background: transparent;
        z-index: 51;
        display: ${(props) => (props.islnaguagemenuopen ? "block" : "none")};
    }

    & > div {
        margin-top: 0.8em;
        border-radius: 2px;
        position: absolute;
        left:-25%;
        width: 150%;
        background: white;
        box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.2);
        z-index: 52;
        transform: ${(props) =>
          props.islnaguagemenuopen ? "scale(1)" : "scale(0)"};
        transition: transform 0.3s ease-in-out;
        display:flex;
        flex-direction:column;

        padding-top: 3px;
        padding-bottom: 3px;

        & > button{
            color:black;
            &:hover{
              text-decoration: underline;
            }
            &:focus {
              outline: 2px solid #000; 
              border-radius: 2px;
              outline-offset: 0px;
            }
        }
      }

      &:focus {
        outline: 2px solid #000; 
        outline-offset: 2px;
        border-radius: 2px;
      }
`;

const StyledBurgerMenu = Styled.div`
    width: 20px;
    height: 20px;
    display: none;
    position: relative;

    & > div {
        width: 100%;
        height: 2px;
        background-color: #1F1D1B;
        border-radius: 2px;
        position: absolute;
        left: 0;
        transition: all 0.3s ease-in-out;

        &:first-child {
            top: ${(props) => (props.isburgeropen ? "50%" : "0")};
            transform: ${(props) =>
              props.isburgeropen ? "rotate(45deg) translateY(-50%)" : "none"};

        }
        
        &:nth-child(2) {
            top: 50%;
            transform: ${(props) =>
              props.isburgeropen
                ? "translateY(-50%) rotate(45deg)"
                : "translateY(-50%)"};
        }

        &:last-child {
            top: ${(props) => (props.isburgeropen ? "50%" : "18px")};
            transform: ${(props) =>
              props.isburgeropen ? "rotate(-45deg) translateY(-50%)" : "none"};
        }
    }

    @media screen and (max-width: 600px) {
        display: block;
    }
`;

const Header = () => {
  const [isLnaguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { changeLanguage, language, whiteList } = useLanguage();

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLnaguageMenuOpen);
    if (isLnaguageMenuOpen) toggleBurgerMenu();
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <StyledComponents>
      <StyledContainer>
        <Link to="/">
          <img src={logoImage} alt="" />
        </Link>
        <StyledNavigation isburgeropen={isBurgerMenuOpen}>
          <Link onClick={toggleBurgerMenu} to="/">
            {langData[language].home}
          </Link>
          <Link onClick={toggleBurgerMenu} to="/recipes">
            {langData[language].recipes}
          </Link>
          <Link onClick={toggleBurgerMenu} to="/login">
            {langData[language].login}
          </Link>
          <Link onClick={toggleBurgerMenu} to="/register">
            {langData[language].register}
          </Link>
          <StyledLanguagePicker
            islnaguagemenuopen={isLnaguageMenuOpen}
            onClick={toggleLanguageMenu}
          >
            {language}
            <div>
              {whiteList.map((lang) => {
                if (lang === language) return null;
                return (
                  <button
                    key={lang}
                    onClick={() => {
                      changeLanguage(lang);
                    }}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </StyledLanguagePicker>
        </StyledNavigation>
        <StyledBurgerMenu
          onClick={toggleBurgerMenu}
          isburgeropen={isBurgerMenuOpen}
        >
          <div />
          <div />
          <div />
        </StyledBurgerMenu>
      </StyledContainer>
    </StyledComponents>
  );
};

export default Header;
