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

const CategoryForm = ({ category, setActiveCategory, setFetchTrigger }) => {
  const { setNotification } = useNotification();

  const onSubmit = async (e) => {
    e.preventDefault();
    const newCategory = {
      nameEN: e.target[0].value,
      nameES: e.target[1].value,
      nameCA: e.target[2].value,
    };

    let url = "add";
    let notify = "created";
    let apiCall = secureApi.post;
    if (!!category) {
      newCategory.id = category.id;
      url = "update/" + newCategory.id;
      notify = "updated";
      apiCall = secureApi.put;
    }
    try {
      const result = await apiCall("/category/" + url, newCategory);
      setNotification({ text: "Category is " + notify, status: "success" });
      setFetchTrigger((prev) => prev + 1);
    } catch (err) {
      console.log(err);
      setNotification({
        text: "Something went wrong! please try again.",
        status: "error",
      });
    }

    setActiveCategory(null);
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
          defaultValue={!!category ? category.nameEN : ""}
        />
      </div>
      <div>
        <label htmlFor="nameES">Spanish name</label>
        <input
          id="nameES"
          type="text"
          defaultValue={!!category ? category.nameES : ""}
        />
      </div>
      <div>
        <label htmlFor="nameCA">Catalan name</label>
        <input
          id="nameCA"
          type="text"
          defaultValue={!!category ? category.nameCA : ""}
        />
      </div>
      <button>{!!category ? "Save" : "Create"}</button>
      {!!category && (
        <StyledDiscard onClick={() => setActiveCategory(null)}>
          Discard
        </StyledDiscard>
      )}
    </StyledForm>
  );
};

export default CategoryForm;
