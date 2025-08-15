import Styled from "styled-components";
import bannerImage from "../assets/img/test_food_carousel.jpg";
import Categories from "../components/Categories";
import RecipeList from "../components/RecipeList";
import { useState } from "react";
import IngredientFilter from "../components/IngredientFilter";
import SearchBar from "../components/SearchBar";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";

const StyledContainer = Styled.div`
  width: 1264px;
  margin: 0 auto;
  padding-top: 50px;

  @media screen and (max-width: 1324px) {
    width: 100%;
    padding: 0 30px;
  }
`;

const StyledBanner = Styled.div`
  width: 100%;
  height: 355px;
  border-radius: 30px;
  background: linear-gradient(90deg, #252525 -16.65%, rgba(0, 0, 0, 0) 100%), url(${(
    props
  ) => props.image});
  background-position: center;
  background-size: cover;
  padding: 80px;

  & > h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 127%;
    color: #FFFFFF;
  }

  & > p {
    padding-top: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 127%;
    color: #FFFFFF;
  }

  @media screen and (max-width: 455px) {
    padding: 40px;

    & > h2 {
    font-size: 32px;
  }

  & > p {
    font-size: 18px;
  }
  }
`;

const StyledContent = Styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 50px;
  
  @media screen and (max-width: 570px) {
    position: relative;
  }
`;

const StyledSidebar = Styled.aside`
  width: 284px;

  @media screen and (max-width: 1004px) {
    width: 170px;
  }

  @media screen and (max-width: 570px) {
    position: absolute;
    top: 0;
    left: ${(props) => props.left};
    transition: 0.3s;
    background: #ffffff;
    padding: 10px;
  }
`;

const StyledList = Styled.div`
  width: calc(100% - 320px);

  @media screen and (max-width: 1004px) {
    width: calc(100% - 190px);
  }

  @media screen and (max-width: 570px) {
    width: calc(100% - 35px);
  }
`;

const StyledBurgerMenu = Styled.div`
  width: 20px;
  height: 20px;
  display: none;
  position: relative;
  margin-top: 18px;

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

  @media screen and (max-width: 570px) {
    display: block;
  }
`;

const StyledCloseMenuButton = Styled.button`
  position: absolute;
  right: 10px;
  top: 20px;
  display: none;

  @media screen and (max-width: 570px) {
    display: block;
  }
`;

const Recipes = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <StyledContainer>
      <StyledBanner image={bannerImage}>
        <h2>{langData[language].bannerTitle}</h2>
        <p>{langData[language].bannerText}</p>
      </StyledBanner>
      <StyledContent>
        <StyledBurgerMenu onClick={() => setIsMenuOpen(true)}>
          <div></div>
          <div></div>
          <div></div>
        </StyledBurgerMenu>
        <StyledSidebar left={isMenuOpen ? "-30px" : "calc(-100% + 30px)"}>
          <StyledCloseMenuButton onClick={() => setIsMenuOpen(false)}>
            X
          </StyledCloseMenuButton>
          <Categories setActiveCategory={setActiveCategory} />
          <IngredientFilter setSelectedIngredients={setSelectedIngredients} />
        </StyledSidebar>
        <StyledList>
          <SearchBar setSearch={setSearch} />
          <RecipeList
            category={activeCategory}
            ingredients={selectedIngredients}
            search={search}
          />
        </StyledList>
      </StyledContent>
    </StyledContainer>
  );
};

export default Recipes;
