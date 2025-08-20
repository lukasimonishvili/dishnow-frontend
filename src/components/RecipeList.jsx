import Styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import langData from "../assets/lang.json";
import { useLanguage } from "../contexts/languageContext.jsx";
import heartIcon from "../assets/img/heart.svg";
import hearFulltIcon from "../assets/img/heart-full.svg";
import api from "../api.jsx";
import { useUser } from "../contexts/userContext.jsx";

const StyledListWrapper = Styled.div`
  width: 100%;

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

  @media screen and (max-width: 1322px) {
    justify-content: center;
  }

  @media screen and (max-width: 870px) {
    flex-direction: column;
  }

  & h4 {
    width: 100%;
    text-align: center;
    margin-top: 100px;
    font-size: 32px;
    color: gray;
  }
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

  @media screen and (max-width: 1322px) {
    margin-left: 14px !important;

    &:nth-child(2n + 1) {
      margin-left: 0 !important;;
    }
  }

  @media screen and (max-width: 870px) {
    margin-left: 0 !important;
  }

  @media screen and (max-width: 365px) {
    width: 100%;
  }

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

const RecipeList = ({ category, ingredients, search }) => {
  const { language } = useLanguage();
  const [recipes, setRecipes] = useState([]);
  const { user } = useUser();

  const fetchRecipes = async () => {
    let query = new URLSearchParams();
    if (!!category) query.append("categoryId", category.id);
    if (ingredients.length)
      query.append(
        "ingredientIds",
        ingredients.map((ing) => ing.value).join(",")
      );
    if (search.length) query.append("keyword", search);

    try {
      const response = await api.get("/recipe/all?" + query.toString());
      setRecipes(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [category, ingredients.length, search]);

  return (
    <StyledListWrapper>
      <h3>
        {!!category ? category["name" + language] : langData[language].all}
      </h3>
      <StyledList>
        {recipes.length ? (
          recipes.map((recipe) => (
            <StyledListItem key={recipe.id} image={recipe.photos[0]}>
              <div className="cover" />
              <h5>{recipe.category["name" + language]}</h5>
              <h3>{recipe["name" + language]}</h3>
              <div className="footer">
                <Link to={"/recipe/" + recipe.id}>
                  {langData[language].seeMore}
                </Link>
                {user && user.favoriteRecipes.includes(recipe.id) ? (
                  <img src={hearFulltIcon} />
                ) : (
                  <img src={heartIcon} />
                )}
              </div>
            </StyledListItem>
          ))
        ) : (
          <h4>{langData[language].dataNotFound}</h4>
        )}
      </StyledList>
    </StyledListWrapper>
  );
};

export default RecipeList;
