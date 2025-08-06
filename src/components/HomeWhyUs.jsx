import Styled from "styled-components";
import { FaCheck } from "react-icons/fa";

import CirclesOnCircles from "../assets/img/CirclesOnCircles.png";
import FoodTable from "../assets/img/FoodTable.png";
import FoodKorean from "../assets/img/FoodKorean.png";



const StyledSection = Styled.section`
  border-top: 0.5px #3C3C3C solid;
  border-bottom: 0.5px #3C3C3C solid;
  padding: 42.5px;
  padding-left: 86px;
  padding-right: 86px;
  padding-top: 100px;
  padding-bottom : 100px;

  display: flex;
  justify-content: space-between;
  width:100%
`;
const StyledSingularityDiv = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;
const StyledSingularity = Styled.h1`
  font-family: 'TT Hoves';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: -0.02em;

  color: #000000;

  & > span {
    color: #FC8800;
  }
`;

const FoodImagesContent = Styled.div`
  position: relative;
  margin-right: 80px;
`;


const ImageTemplate = Styled.img`
  width: 100%;
  height: auto;
`;  

const ImageKoreanContainer = Styled.div`
  position: absolute;
  box-shadow: 0px 4px 40px 1px rgba(0, 0, 0, 0.2);
  width: 349px;
  height: 221px;
  left: 50%;
  top: 50%;

  overflow: hidden;
  border-radius: 18px;
  `;

const ImageTableFoodContainer = Styled.div`
  position: absolute;
  top:20%;
  left:0px;

  width: 497px;
  height: 323px;

  box-shadow: 0px 4px 40px 1px rgba(0 , 0, 0, 0.2);
  overflow: hidden;
  border-radius: 18px;
  `;

const HomeWhyUs = () => {

  return <>
    <StyledSection>

    <FoodImagesContent>
      <img src={CirclesOnCircles} alt="Circles"/>

      <ImageTableFoodContainer>
        <ImageTemplate src={FoodTable} alt="Food table" />
      </ImageTableFoodContainer>
      <ImageKoreanContainer>
        <ImageTemplate src={FoodKorean} alt="Korean food"/>
      </ImageKoreanContainer>
    </FoodImagesContent>

    <div>
      <h4>Ingredient-Based Recipes</h4>
      <h1>Why Us?</h1>
      <p>Discover personalized recipes based on the ingredients you have at home.
      <br/>Save time, avoid waste, and cook delicious dishes without the hassle.</p>
      <ul>
        <li>Intuitive interface.</li>
        <li>Healthy and delicious recipes to eat.</li>
        <li>Quick and easy recipes, specially chosen for you based on what you already have available.</li>
      </ul>
    </div>

    </StyledSection>

  </>
};

export default HomeWhyUs;