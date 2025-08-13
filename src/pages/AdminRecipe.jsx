import Styled from "styled-components";
import { useState, useEffect } from "react";

const StyledAdminRecipe = Styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
    & > h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
        width: 100%;
    }
`;

const StyledForm = Styled.form`
    width: 385px;
    margin-bottom: 50px;

    & > div {
        margin-top: 28px;

        & > label {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.01em;
            color: #000000;
            padding-bottom: 8px;
        }

        & > input {
            width: 100%;
            background: #F1F1F1;
            border-radius: 3px;
            height: 36px;
            padding: 0 14px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #000000;
        }

        & > textarea {
            width: 100%;
            height: 150px;
            background: #F1F1F1;
            border-radius: 3px;
            padding: 0 14px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #000000;
            resize: none;
        }
    }

    & > button {
        border: 2px solid #2F80ED;
        border-radius: 30px;
        padding: 8px 18px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.25px;
        color: #2F80ED;
        margin-top: 20px;
    }
`;

const StyledReject = Styled.div`
    border: 2px solid #2F80ED;
    border-radius: 30px;
    padding: 8px 18px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.25px;
    color: #2F80ED;
    display: inline-block;
    cursor: pointer;
    margin-left: 16px;
`;

const StyledData = Styled.div`
  width: 400px;
  margin-left: 50px;
  margin-top: 28px;

  & > h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 30px;
  }

  & > ul {
    margin-left: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 30px;
  }

  & > div {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
  }
`;

const StyledImage = Styled.div`
  width: 45%;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 15px;
`;

const AdminRecipe = () => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const mockData = {
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
    };

    setRecipe(mockData);
  }, []);
  return (
    <StyledAdminRecipe>
      <h2>Review recipe</h2>
      <StyledForm>
        <div>
          <label htmlFor="nameEN">English name</label>
          <input
            id="nameEN"
            type="text"
            defaultValue={!!recipe ? recipe.nameEN : ""}
          />
        </div>
        <div>
          <label htmlFor="nameES">Spanish name</label>
          <input
            id="nameES"
            type="text"
            defaultValue={!!recipe ? recipe.nameES : ""}
          />
        </div>
        <div>
          <label htmlFor="nameCA">Catalan name</label>
          <input
            id="nameCA"
            type="text"
            defaultValue={!!recipe ? recipe.nameCA : ""}
          />
        </div>
        <div>
          <label htmlFor="descriptionEN">Eglish description</label>
          <textarea
            id="descriptionEN"
            defaultValue={!!recipe ? recipe.descriptionEN : ""}
          ></textarea>
        </div>
        <div>
          <label htmlFor="descriptionES">Spanish description</label>
          <textarea
            id="descriptionES"
            defaultValue={!!recipe ? recipe.descriptionES : ""}
          ></textarea>
        </div>
        <div>
          <label htmlFor="descriptionCA">Catalan description</label>
          <textarea
            id="descriptionCA"
            defaultValue={!!recipe ? recipe.descriptionCA : ""}
          ></textarea>
        </div>
        <button>Approve</button>
        <StyledReject>Reject</StyledReject>
      </StyledForm>
      <StyledData>
        <h4>Category: {!!recipe && recipe.category.nameEN}</h4>
        <h4>Ingredients:</h4>
        <ul>
          {!!recipe &&
            recipe.ingredients.map((ing) => <li key={ing.id}>{ing.nameEN}</li>)}
        </ul>
        <div>
          {!!recipe && recipe.photos.map((url) => <StyledImage image={url} />)}
        </div>
      </StyledData>
    </StyledAdminRecipe>
  );
};

export default AdminRecipe;
