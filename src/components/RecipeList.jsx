import Styled from "styled-components";
import { useLanguage } from "../contexts/languageContext.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import langData from "../assets/lang.json";
import recipeData from "../assets/recipes.json";
import heartIcon from "../assets/img/heart.svg";

const StyledListWrapper = Styled.div`
    width: calc(100% - 320px);

    & > h3 {
      text-align: center;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 33px;
      color: #252525;
    }
`;

const StyledList = Styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

const StyledListItem = Styled.div`
  display: block;
  width: 305px;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 16px;
  margin-top: 33px;
  margin-left: 14px;
  overflow: hidden;
  padding: 8px;

  &:nth-child(3n + 1) {
    margin-left: 0;
  }

  & > div.cover {
    width: 100%;
    height: 200px;
    border-radius: 16px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    margin-bottom: 4px;
  }

  & > div.footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
  }

  & > h5 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 24px;
    color: #A2A2A2;
  }

  & > h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #252525;
  }

  &  img {
    cursor: pointer;
  }
`;

const RecipeList = ({ category, ingredients }) => {
  const { language } = useLanguage();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    let result = [...recipeData];
    if (!!category) {
      result = result.filter((recipe) => recipe.category.id === category.id);
    }

    if (ingredients.length) {
      console.log(ingredients);
    }
    setRecipes(result);
  }, [category, ingredients.length]);

  return (
    <StyledListWrapper>
      <h3>
        {!!category ? category["name" + language] : langData[language].all}
      </h3>
      <StyledList>
        {recipes.map((recipe) => (
          <StyledListItem key={recipe.id} image={recipe.photos[0]}>
            <div className="cover" />
            <h5>{recipe.category["name" + language]}</h5>
            <h3>{recipe["name" + language]}</h3>
            <div className="footer">
              <Link to={"/recipe/" + recipe.id}>See more</Link>
              <img src={heartIcon} />
            </div>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledListWrapper>
  );
};

export default RecipeList;
