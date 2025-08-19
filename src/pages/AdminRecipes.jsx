import Styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../assets/img/arrow.svg";
import { secureApi } from "../api";

const StyleAdminRecipes = Styled.div`
    width: 100%;
    
    & > h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
    }
`;

const StyledTable = Styled.div`
    width: 100%;
    margin-top: 30px;

    & > div {
        width: 100%;
        display: flex;
        padding: 15px 0;

        &:nth-child(odd) {
            background: #E0E0E0;
        }

        & > div {
            width: calc(100% / 7);
            text-align: center;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.01em;
            color: #000000;
        }
    }
`;

const AdminRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await secureApi.get("/recipe/pending");
      setRecipes(response.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <StyleAdminRecipes>
      <h2>Pending recipes</h2>
      <StyledTable>
        <div>
          <div>ID</div>
          <div>Name</div>
          <div>Category</div>
          <div>Ingredients</div>
          <div>Photos</div>
          <div>Status</div>
          <div>See more</div>
        </div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <div>{recipe.id}</div>
            <div>{recipe.nameEN}</div>
            <div>{recipe.category.nameEN}</div>
            <div>{recipe.ingredients.length}</div>
            <div>{recipe.photos.length}</div>
            <div>{recipe.status}</div>
            <div>
              <Link to={"/admin/recipe/" + recipe.id}>
                <img src={arrowIcon} alt="" />
              </Link>
            </div>
          </div>
        ))}
      </StyledTable>
    </StyleAdminRecipes>
  );
};

export default AdminRecipes;
