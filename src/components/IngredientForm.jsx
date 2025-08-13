import Styled from "styled-components";

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

const IngredientForm = ({ ingredient, setActiveIngredient }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const newIngredient = {
      nameEN: e.target[0].value,
      nameES: e.target[1].value,
      nameCA: e.target[2].value,
    };

    console.log(newIngredient);
    setActiveIngredient(null);
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
