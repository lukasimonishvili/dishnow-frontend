import Styled from "styled-components";
import { useState, useEffect } from "react";
import RecipeSlider from "../components/RecipeSlier";

const StyledRecipe = Styled.div`
    width: 760px;
    padding-top: 55px;
    margin: 0 auto;

    & > h2 {
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 41px;
        color: #1F1D1B;
        margin-bottom: 16px;
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

const Recipe = () => {
  return (
    <StyledRecipe>
      <h2>Simple delicious beef tacos</h2>
      <StyledCategory>Italian</StyledCategory>
      <RecipeSlider />
    </StyledRecipe>
  );
};

export default Recipe;
