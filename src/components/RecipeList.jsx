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

const StyledListItem = Styled(Link)`
  display: block;
  width: 305px;
  height: 315px;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 16px;
  margin-top: 33px;
  margin-left: 14px;
  overflow: hidden;
  padding: 8px;
  position: relative;

  &:nth-child(3n + 1) {
    margin-left: 0;
  }

  & > div {
    width: 100%;
    height: 200px;
    border-radius: 16px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    margin-bottom: 4px;
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

  & > img {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`;

const RecipeList = ({ category }) => {
  const { language } = useLanguage();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    let result = [...recipeData];
    if (!!category) {
      result = result.filter((recipe) => recipe.category.id === category.id);
    }
    console.log(result);
    setRecipes(result);
  }, [category]);

  return (
    <StyledListWrapper>
      <h3>
        {!!category ? category["name" + language] : langData[language].all}
      </h3>
      <StyledList>
        {recipes.map((recipe) => (
          <StyledListItem
            to={"/recipe/" + recipe.id}
            key={recipe.id}
            image={recipe.photos[0]}
          >
            <div />
            <h5>{recipe.category["name" + language]}</h5>
            <h3>{recipe["name" + language]}</h3>
            <img src={heartIcon} />
          </StyledListItem>
        ))}
      </StyledList>
    </StyledListWrapper>
  );
};

export default RecipeList;
