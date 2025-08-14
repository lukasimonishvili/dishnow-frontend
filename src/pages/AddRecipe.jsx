import Styled from "styled-components";
import { useForm } from "react-hook-form";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";
import { useState, useEffect } from "react";
import CategorySelect from "../components/CategorySelect.jsx";
import IngredientSelect from "../components/IngredientSelect.jsx";
import ImagePicker from "../components/ImagePicker.jsx";

const StyledAddRecipe = Styled.div`
    width: 454px;   
    margin: 0 auto;
    padding-top: 90px;
    margin-bottom: 40px;

    @media screen and (max-width: 514px) {
        width: 100%;
        padding: 0 30px;
    }

    & > h2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 120%;
        text-align: center;
        letter-spacing: -0.04em;
        color: #1B1818;
        margin-bottom: 32px;
    }
`;

const StyledForm = Styled.form`
  width: 100%;

  & > button {
    display: block;
    margin-top: 46px;
    width: 100%;
    height: 55px;
    background: #EB5017;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: #CD3700;
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    color: #FFFFFF;
  }
`;

const StyledInputWrapper = Styled.div`
  width: 100%;
  margin-bottom: 8px;

  & > span {
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    color: ${(props) => (props.error ? "#D92D2A" : "transparent")};
    display: block;
    margin-top: 4px;
    padding-left: 16px;
  }

  & > label {
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 500;
    line-height: 145%;
    font-style: normal;
    color: #101928;
    display: block;
    margin-bottom: 4px;
  }

  & > input {
    width: 100%;
    height: 56px;
    background: #FFFFFF;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: ${(props) => (props.error ? "#D92D2A" : "#E3E3E3")};
    border-radius: 15px;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    line-height: 145%;
    padding-left: 16px;
  }

  & > textarea {
    width: 100%;
    height: 150px;
    background: #FFFFFF;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: ${(props) => (props.error ? "#D92D2A" : "#E3E3E3")};
    border-radius: 15px;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    line-height: 145%;
    padding: 16px;
    resize: none;
  }
`;

const AddRecipe = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { language } = useLanguage();
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const onSubmit = (data) => {
    const payload = data;
    payload.ingredients = payload.ingredients.map(
      (ingredient) => ingredient.value
    );
    console.log(payload);
  };

  useEffect(() => {
    const mockCategories = [
      { id: 1, nameEN: "Italian", nameES: "Italiano", nameCA: "Italià" },
      { id: 2, nameEN: "Mexican", nameES: "Mexicana", nameCA: "Mexicana" },
      { id: 3, nameEN: "Japanese", nameES: "Japonesa", nameCA: "Japonesa" },
      { id: 4, nameEN: "Indian", nameES: "India", nameCA: "Índia" },
      { id: 5, nameEN: "French", nameES: "Francesa", nameCA: "Francesa" },
      { id: 6, nameEN: "Spanish", nameES: "Española", nameCA: "Espanyola" },
      { id: 7, nameEN: "Greek", nameES: "Griega", nameCA: "Grega" },
      { id: 8, nameEN: "Chinese", nameES: "China", nameCA: "Xinesa" },
      { id: 9, nameEN: "Thai", nameES: "Tailandesa", nameCA: "Tailandesa" },
      {
        id: 10,
        nameEN: "American",
        nameES: "Estadounidense",
        nameCA: "Estatunidenca",
      },
    ];

    const mockIngredients = [
      {
        id: 1,
        nameEN: "onion",
        nameES: "cebolla",
        nameCA: "ceba",
      },
      {
        id: 2,
        nameEN: "pasta",
        nameES: "pasta",
        nameCA: "pasta",
      },
      {
        id: 3,
        nameEN: "bacon",
        nameES: "bacon",
        nameCA: "bacon",
      },
      {
        id: 4,
        nameEN: "salt",
        nameES: "sal",
        nameCA: "sal",
      },
      {
        id: 5,
        nameEN: "water",
        nameES: "agua",
        nameCA: "aigua",
      },
    ];
    setIngredients(
      mockIngredients.map((ingredient) => {
        return { value: ingredient.id, label: ingredient["name" + language] };
      })
    );
    setCategories(mockCategories);
  }, []);

  return (
    <StyledAddRecipe>
      <h2>{langData[language].addIngredients}</h2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputWrapper error={errors.name}>
          <label htmlFor="name">{langData[language].name}</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: langData[language].nameRequired,
            })}
          />
          <span>{errors && errors.name ? errors.name.message : "NA"}</span>
        </StyledInputWrapper>
        <StyledInputWrapper error={errors.description}>
          <label htmlFor="description">{langData[language].description}</label>
          <textarea
            type="text"
            id="description"
            {...register("description", {
              required: langData[language].descriptionRequired,
            })}
          ></textarea>
          <span>
            {errors && errors.description ? errors.description.message : "NA"}
          </span>
        </StyledInputWrapper>
        <StyledInputWrapper error={errors.category}>
          <label htmlFor="category">{langData[language].category}</label>
          <CategorySelect
            id="category"
            error={errors.category}
            options={categories}
            {...register("category", {
              required: langData[language].categoryRequired,
            })}
          />
          <span>
            {errors && errors.category ? errors.category.message : "NA"}
          </span>
        </StyledInputWrapper>
        <StyledInputWrapper error={errors.ingredients}>
          <label htmlFor="category">{langData[language].ingredients}</label>
          <IngredientSelect
            control={control}
            name="ingredients"
            options={ingredients}
            rules={{
              required: langData[language].ingredientsRequired,
            }}
            error={errors.ingredients}
            placeholder={langData[language].ingredientsPlaceholder}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <ImagePicker
            control={control}
            name="photos"
            rules={{ required: langData[language].imageError }}
            error={errors.images}
            placeholder={langData[language].chooseImages}
          />
        </StyledInputWrapper>
        <button>{langData[language].addIngredients}</button>
      </StyledForm>
    </StyledAddRecipe>
  );
};

export default AddRecipe;
