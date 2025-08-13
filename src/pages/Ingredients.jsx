import { useState, useEffect } from "react";
import Styled from "styled-components";
import editIcon from "../assets/img/edit.svg";
import deleteIcon from "../assets/img/delete.svg";
import IngredientForm from "../components/IngredientForm";

const StyledIngredients = Styled.div`
    width: 100%;

    & > h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-size: 20px;
        line-height: 24px;
    }
`;

const StyledTable = Styled.div`
    width: 100%;
    margin-top: 18px;

    & > div {
        width: 100%;
        display: flex;
        padding: 15px 0;

        &:nth-child(odd) {
            background: #E0E0E0;
        }

        & > div {
            width: calc(100% / 6);
            text-align: center;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.01em;
            color: #000000;

            & > img {
                cursor: pointer;
            }

            &:last-child{
                position: relative;
            }
        }
    }
`;

const StyledDeletePopup = Styled.div`
    display: ${(props) => props.displayvalue};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    border: 1px solid #2F80ED;
    padding: 7px;
    border-radius: 8px;

    & > p {
        margin-bottom: 8px;
    }

    & > button {
        width: 50%;
        text-align: center;
    }
`;

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [activeIngredient, setActiveIngredient] = useState(null);
  const [deletingIndex, setDeletingIndex] = useState(-1);

  useEffect(() => {
    const mockData = [
      { id: 1, nameEN: "name 1", nameES: "nombre 1", nameCA: "nom 1" },
      { id: 2, nameEN: "name 2", nameES: "nombre 2", nameCA: "nom 2" },
      { id: 3, nameEN: "name 3", nameES: "nombre 3", nameCA: "nom 3" },
      { id: 4, nameEN: "name 4", nameES: "nombre 4", nameCA: "nom 4" },
      { id: 5, nameEN: "name 5", nameES: "nombre 5", nameCA: "nom 5" },
      { id: 6, nameEN: "name 6", nameES: "nombre 6", nameCA: "nom 6" },
      { id: 7, nameEN: "name 7", nameES: "nombre 7", nameCA: "nom 7" },
    ];

    setIngredients(mockData);
  }, []);

  const deleteIngredient = () => {
    const idOfIngredientToDelete = ingredients[deletingIndex].id;
    console.log(
      "here will be locgic to delete ingredient with id " +
        idOfIngredientToDelete
    );
    setDeletingIndex(-1);
  };

  return (
    <StyledIngredients>
      <h2>Ingredients</h2>
      <IngredientForm
        ingredient={activeIngredient}
        setActiveIngredient={setActiveIngredient}
      />
      <StyledTable>
        <div>
          <div>ID</div>
          <div>English name</div>
          <div>Spanish name</div>
          <div>Catalan name</div>
          <div>Edit</div>
          <div>Delete</div>
        </div>
        {ingredients.map((ingredient, index) => (
          <div key={ingredient.id}>
            <div>{ingredient.id}</div>
            <div>{ingredient.nameEN}</div>
            <div>{ingredient.nameES}</div>
            <div>{ingredient.nameCA}</div>
            <div>
              <img
                src={editIcon}
                alt=""
                onClick={() => {
                  setActiveIngredient(ingredient);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </div>
            <div>
              <img
                src={deleteIcon}
                alt=""
                onClick={() => setDeletingIndex(index)}
              />
              <StyledDeletePopup
                displayvalue={index === deletingIndex ? "block" : "none"}
              >
                <p>Are you sure?</p>
                <button onClick={deleteIngredient}>Yes</button>
                <button onClick={() => setDeletingIndex(-1)}>No</button>
              </StyledDeletePopup>
            </div>
          </div>
        ))}
      </StyledTable>
    </StyledIngredients>
  );
};

export default Ingredients;
