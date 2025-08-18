import Styled from "styled-components";
import { secureApi } from "../api.jsx";
import { useNotification } from "../contexts/notificationContext.jsx";

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

const StyledDiscard = Styled.div`
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

const IngredientForm = ({
  ingredient,
  setActiveIngredient,
  setFetchTrigger,
}) => {
  const { setNotification } = useNotification();

  const onSubmit = async (e) => {
    e.preventDefault();
    const newIngredient = {
      nameEN: e.target[0].value,
      nameES: e.target[1].value,
      nameCA: e.target[2].value,
    };

    let url = "add";
    let notify = "created";
    let apiCall = secureApi.post;
    if (!!ingredient) {
      newIngredient.id = ingredient.id;
      url = "update/" + newIngredient.id;
      notify = "updated";
      apiCall = secureApi.put;
    }
    try {
      const result = await apiCall("/ingredient/" + url, newIngredient);
      setNotification({ text: "Ingredient is " + notify, status: "success" });
      setFetchTrigger((prev) => prev + 1);
    } catch (err) {
      console.log(err);
      setNotification({
        text: "Something went wrong! please try again.",
        status: "error",
      });
    }

    setActiveIngredient(null);
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="nameEN">English name</label>
        <input
          id="nameEN"
          type="text"
          defaultValue={!!ingredient ? ingredient.nameEN : ""}
        />
      </div>
      <div>
        <label htmlFor="nameES">Spanish name</label>
        <input
          id="nameES"
          type="text"
          defaultValue={!!ingredient ? ingredient.nameES : ""}
        />
      </div>
      <div>
        <label htmlFor="nameCA">Catalan name</label>
        <input
          id="nameCA"
          type="text"
          defaultValue={!!ingredient ? ingredient.nameCA : ""}
        />
      </div>
      <button>{!!ingredient ? "Save" : "Create"}</button>
      {!!ingredient && (
        <StyledDiscard onClick={() => setActiveIngredient(null)}>
          Discard
        </StyledDiscard>
      )}
    </StyledForm>
  );
};

export default IngredientForm;
