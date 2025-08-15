import Styled from "styled-components";
import bannerImage from "../assets/img/test_food_carousel.jpg";
import Categories from "../components/Categories";
import RecipeList from "../components/RecipeList";
import { useState } from "react";
import IngredientFilter from "../components/IngredientFilter";

const StyledContainer = Styled.div`
  width: 1264px;
  margin: 0 auto;
  padding-top: 50px;
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
`;

const StyledContent = Styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 50px;
`;

const StyledSidebar = Styled.aside`
  width: 284px;
`;

const Recipes = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  return (
    <StyledContainer>
      <StyledBanner image={bannerImage}>
        <h2>Your next favorite meal awaits</h2>
        <p>Explore, cook, and enjoy</p>
      </StyledBanner>
      <StyledContent>
        <StyledSidebar>
          <IngredientFilter setSelectedIngredients={setSelectedIngredients} />
          <Categories setActiveCategory={setActiveCategory} />
        </StyledSidebar>
        <RecipeList
          category={activeCategory}
          ingredients={selectedIngredients}
        />
      </StyledContent>
    </StyledContainer>
  );
};

export default Recipes;
