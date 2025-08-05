import { Link } from "react-router-dom";
import Styled from "styled-components";
import logoImage from "../assets/img/logo.png";
import { useState } from "react";

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

    @media screen and (max-width: 490px) {
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

const StyledLanguagePicker = Styled.div`
    position: relative;
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    z-index: 52;
    cursor: pointer;

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
        position: absolute;
        width: 100%;
        background: #FFFFFF;
        z-index: 52;
        transform: ${(props) =>
          props.islnaguagemenuopen ? "scale(1)" : "scale(0)"};
        transition: transform 0.3s ease-in-out;
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

    @media screen and (max-width: 490px) {
        display: block;
    }
`;

const Header = () => {
  const [isLnaguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLnaguageMenuOpen);
    if (isLnaguageMenuOpen) toggleBurgerMenu();
  };

  const handleLanguageChange = () => {
    console.log("Language changed");
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
            Home
          </Link>
          <Link onClick={toggleBurgerMenu} to="/recipes">
            Recipes
          </Link>
          <Link onClick={toggleBurgerMenu} to="/login">
            Login
          </Link>
          <Link onClick={toggleBurgerMenu} to="/register">
            Register
          </Link>
          <StyledLanguagePicker
            islnaguagemenuopen={isLnaguageMenuOpen}
            onClick={toggleLanguageMenu}
          >
            EN
            <div>
              <button onClick={handleLanguageChange}>ES</button>
              <button onClick={handleLanguageChange}>CA</button>
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
