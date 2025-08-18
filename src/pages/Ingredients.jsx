import { useState, useEffect } from "react";
import Styled from "styled-components";
import editIcon from "../assets/img/edit.svg";
import deleteIcon from "../assets/img/delete.svg";
import IngredientForm from "../components/IngredientForm";
import api from "../api.jsx";
import { useNotification } from "../contexts/notificationContext.jsx";

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
  const [fetchTrigger, setFetchTrigger] = useState(0);
  const { setNotification } = useNotification();

  const fatchIngredients = async () => {
    try {
      const result = await api.get("/ingredient/getAll");
      console.log(result);
      setIngredients(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fatchIngredients();
  }, [fetchTrigger]);

  const deleteIngredient = async () => {
    const idOfIngredientToDelete = ingredients[deletingIndex].id;
    try {
      await api.delete("/ingredient/remove/" + idOfIngredientToDelete);
      setNotification({ text: "ingredient was deleted", status: "success" });
      setFetchTrigger((prev) => prev + 1);
    } catch (err) {
      setNotification({ text: "Failed to delete ingredient", status: "error" });
      console.log(err);
    }
    setDeletingIndex(-1);
  };

  return (
    <StyledIngredients>
      <h2>Ingredients</h2>
      <IngredientForm
        ingredient={activeIngredient}
        setActiveIngredient={setActiveIngredient}
        setFetchTrigger={setFetchTrigger}
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
