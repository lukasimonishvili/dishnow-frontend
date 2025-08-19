import Styled from "styled-components";
import { useState, useEffect } from "react";
import RecipeSlider from "../components/RecipeSlier";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";
import { useParams } from "react-router-dom";
import api from "../api.jsx";

const StyledRecipe = Styled.div`
    width: 760px;
    padding-top: 55px;
    margin: 0 auto;

    @media screen and (max-width: 820px) {
        width: 100%;
        padding: 0 30px;
    }

    & > h2 {
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 41px;
        color: #1F1D1B;
        margin-bottom: 16px;
    }

    & > h4 {
        margin-top: 40px;
        margin-bottom: 16px;
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 33px;
        color: #1F1D1B;
    }

    & > p {
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 29px;
        color: #1F1D1B;
        margin-bottom: 40px;
    }
`;

const StyledCategory = Styled.span`
    padding: 4px 8px;
    background: rgba(31, 29, 27, 0.15);
    border-radius: 1000px;
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #1F1D1B;
`;

const StyledIngredients = Styled.ul`
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #1F1D1B;
    padding-left: 30px;
`;

const Recipe = () => {
  const { language } = useLanguage();
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  const fetchRecipe = async () => {
    try {
      const response = await api.get("/recipe/get/" + id);
      setRecipe(response.data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <StyledRecipe>
      <h2>{recipe && recipe["name" + language]}</h2>
      <StyledCategory>
        {recipe && recipe.category["name" + language]}
      </StyledCategory>
      <RecipeSlider photos={recipe ? recipe.photos : []} />
      <h4>{langData[language].ingredients}</h4>
      <StyledIngredients>
        {recipe &&
          recipe.ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient["name" + language]}</li>
          ))}
      </StyledIngredients>
      <h4>{langData[language].description}</h4>
      <p>{recipe && recipe["description" + language]}</p>
    </StyledRecipe>
  );
};

export default Recipe;
