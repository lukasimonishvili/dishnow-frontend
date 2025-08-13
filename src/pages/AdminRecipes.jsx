import Styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../assets/img/arrow.svg";

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

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        nameEN: "Simple delicious beef tacos",
        nameES: "Simple delicious beef tacos",
        nameCA: "Simple delicious beef tacos",
        category: {
          id: 1,
          nameEN: "Italian",
          nameES: "Italian",
          nameCA: "Italian",
        },
        ingredients: [
          {
            id: 1,
            nameEN: "1 Slice onion",
            nameES: "1 Slice onion",
            nameCA: "1 Slice onion",
          },
          {
            id: 2,
            nameEN: "0.5 kg pasta",
            nameES: "0.5 kg pasta",
            nameCA: "0.5 kg pasta",
          },
          {
            id: 3,
            nameEN: "3 slices bacon",
            nameES: "3 slices bacon",
            nameCA: "3 slices bacon",
          },
          { id: 4, nameEN: "salt", nameES: "salt", nameCA: "salt" },
          { id: 5, nameEN: "water", nameES: "water", nameCA: "water" },
        ],
        descriptionEN: "Cook beef with spices and serve in tacos.",
        descriptionES: "Cook beef with spices and serve in tacos.",
        descriptionCA: "Cook beef with spices and serve in tacos.",
        photos: [
          "https://www.vincenzosplate.com/wp-content/uploads/2021/01/spaghetti-carbonara.png",
          "https://cdn6.recetasdeescandalo.com/wp-content/uploads/2015/02/Espaguetis-a-la-carbonara.-Receta-tradicional-1.jpg",
          "https://skinnyspatula.com/wp-content/uploads/2020/09/Carbonara-di-Mare4-720x405.jpg",
        ],
        status: "PENDING",
      },
      {
        id: 2,
        nameEN: "Classic spaghetti carbonara",
        nameES: "Classic spaghetti carbonara",
        nameCA: "Classic spaghetti carbonara",
        category: {
          id: 2,
          nameEN: "Italian",
          nameES: "Italian",
          nameCA: "Italian",
        },
        ingredients: [
          {
            id: 1,
            nameEN: "200g spaghetti",
            nameES: "200g spaghetti",
            nameCA: "200g spaghetti",
          },
          {
            id: 2,
            nameEN: "100g pancetta",
            nameES: "100g pancetta",
            nameCA: "100g pancetta",
          },
          { id: 3, nameEN: "2 eggs", nameES: "2 eggs", nameCA: "2 eggs" },
          {
            id: 4,
            nameEN: "Parmesan cheese",
            nameES: "Parmesan cheese",
            nameCA: "Parmesan cheese",
          },
          {
            id: 5,
            nameEN: "black pepper",
            nameES: "black pepper",
            nameCA: "black pepper",
          },
        ],
        descriptionEN:
          "Boil pasta, mix with pancetta, eggs, cheese, and pepper.",
        descriptionES:
          "Boil pasta, mix with pancetta, eggs, cheese, and pepper.",
        descriptionCA:
          "Boil pasta, mix with pancetta, eggs, cheese, and pepper.",
        photos: [
          "https://www.vincenzosplate.com/wp-content/uploads/2021/01/spaghetti-carbonara.png",
          "https://cdn6.recetasdeescandalo.com/wp-content/uploads/2015/02/Espaguetis-a-la-carbonara.-Receta-tradicional-1.jpg",
          "https://skinnyspatula.com/wp-content/uploads/2020/09/Carbonara-di-Mare4-720x405.jpg",
        ],
        status: "PENDING",
      },
      {
        id: 3,
        nameEN: "Grilled chicken salad",
        nameES: "Grilled chicken salad",
        nameCA: "Grilled chicken salad",
        category: {
          id: 3,
          nameEN: "Salads",
          nameES: "Salads",
          nameCA: "Salads",
        },
        ingredients: [
          {
            id: 1,
            nameEN: "150g grilled chicken",
            nameES: "150g grilled chicken",
            nameCA: "150g grilled chicken",
          },
          { id: 2, nameEN: "Lettuce", nameES: "Lettuce", nameCA: "Lettuce" },
          {
            id: 3,
            nameEN: "Cherry tomatoes",
            nameES: "Cherry tomatoes",
            nameCA: "Cherry tomatoes",
          },
          { id: 4, nameEN: "Cucumber", nameES: "Cucumber", nameCA: "Cucumber" },
          {
            id: 5,
            nameEN: "Olive oil",
            nameES: "Olive oil",
            nameCA: "Olive oil",
          },
        ],
        descriptionEN:
          "Mix grilled chicken with fresh vegetables and olive oil.",
        descriptionES:
          "Mix grilled chicken with fresh vegetables and olive oil.",
        descriptionCA:
          "Mix grilled chicken with fresh vegetables and olive oil.",
        photos: [
          "https://www.vincenzosplate.com/wp-content/uploads/2021/01/spaghetti-carbonara.png",
          "https://cdn6.recetasdeescandalo.com/wp-content/uploads/2015/02/Espaguetis-a-la-carbonara.-Receta-tradicional-1.jpg",
          "https://skinnyspatula.com/wp-content/uploads/2020/09/Carbonara-di-Mare4-720x405.jpg",
        ],
        status: "PENDING",
      },
      {
        id: 4,
        nameEN: "Vegetable stir fry",
        nameES: "Vegetable stir fry",
        nameCA: "Vegetable stir fry",
        category: {
          id: 4,
          nameEN: "Asian",
          nameES: "Asian",
          nameCA: "Asian",
        },
        ingredients: [
          { id: 1, nameEN: "Broccoli", nameES: "Broccoli", nameCA: "Broccoli" },
          { id: 2, nameEN: "Carrots", nameES: "Carrots", nameCA: "Carrots" },
          {
            id: 3,
            nameEN: "Bell peppers",
            nameES: "Bell peppers",
            nameCA: "Bell peppers",
          },
          {
            id: 4,
            nameEN: "Soy sauce",
            nameES: "Soy sauce",
            nameCA: "Soy sauce",
          },
          { id: 5, nameEN: "Garlic", nameES: "Garlic", nameCA: "Garlic" },
        ],
        descriptionEN: "Stir fry vegetables with soy sauce and garlic.",
        descriptionES: "Stir fry vegetables with soy sauce and garlic.",
        descriptionCA: "Stir fry vegetables with soy sauce and garlic.",
        photos: [
          "https://www.vincenzosplate.com/wp-content/uploads/2021/01/spaghetti-carbonara.png",
          "https://cdn6.recetasdeescandalo.com/wp-content/uploads/2015/02/Espaguetis-a-la-carbonara.-Receta-tradicional-1.jpg",
          "https://skinnyspatula.com/wp-content/uploads/2020/09/Carbonara-di-Mare4-720x405.jpg",
        ],
        status: "PENDING",
      },
      {
        id: 5,
        nameEN: "Pancakes with maple syrup",
        nameES: "Pancakes with maple syrup",
        nameCA: "Pancakes with maple syrup",
        category: {
          id: 5,
          nameEN: "Desserts",
          nameES: "Desserts",
          nameCA: "Desserts",
        },
        ingredients: [
          { id: 1, nameEN: "Flour", nameES: "Flour", nameCA: "Flour" },
          { id: 2, nameEN: "Milk", nameES: "Milk", nameCA: "Milk" },
          { id: 3, nameEN: "Eggs", nameES: "Eggs", nameCA: "Eggs" },
          {
            id: 4,
            nameEN: "Maple syrup",
            nameES: "Maple syrup",
            nameCA: "Maple syrup",
          },
          { id: 5, nameEN: "Butter", nameES: "Butter", nameCA: "Butter" },
        ],
        descriptionEN: "Cook pancakes and serve with maple syrup and butter.",
        descriptionES: "Cook pancakes and serve with maple syrup and butter.",
        descriptionCA: "Cook pancakes and serve with maple syrup and butter.",
        photos: [
          "https://www.vincenzosplate.com/wp-content/uploads/2021/01/spaghetti-carbonara.png",
          "https://cdn6.recetasdeescandalo.com/wp-content/uploads/2015/02/Espaguetis-a-la-carbonara.-Receta-tradicional-1.jpg",
          "https://skinnyspatula.com/wp-content/uploads/2020/09/Carbonara-di-Mare4-720x405.jpg",
        ],
        status: "PENDING",
      },
    ];

    setRecipes(mockData);
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
