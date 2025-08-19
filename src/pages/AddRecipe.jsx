import Styled from "styled-components";
import { useForm } from "react-hook-form";
import { useLanguage } from "../contexts/languageContext.jsx";
import { useUser } from "../contexts/userContext.jsx";
import langData from "../assets/lang.json";
import { useState, useEffect } from "react";
import CategorySelect from "../components/CategorySelect.jsx";
import IngredientSelect from "../components/IngredientSelect.jsx";
import ImagePicker from "../components/ImagePicker.jsx";
import api, { secureApi } from "../api.jsx";
import { useNotification } from "../contexts/notificationContext.jsx";

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
  const { user } = useUser();
  const { setNotification } = useNotification();

  const onSubmit = async (data) => {
    const formData = new FormData();
    const payload = data;
    payload.ingredients = payload.ingredients.map(
      (ingredient) => ingredient.value
    );
    payload.user = user.id;
    const files = payload.photos;
    delete payload.photos;

    const recipeJson = JSON.stringify(payload);
    formData.append(
      "recipe",
      new Blob([recipeJson], { type: "application/json" })
    );
    files.forEach((file) => {
      formData.append("photos", file);
    });

    try {
      console.log(payload, files);
      const response = await secureApi.post("/recipe/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setNotification({ text: "Recipe created", status: "success" });
    } catch (err) {
      console.log(err);
      setNotification({ text: "creating recipe faield", status: "error" });
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get("/category/getAll");
      setCategories(response.data);
    } catch (err) {
      console.log("err");
    }
  };

  const fetchIngredients = async () => {
    try {
      const response = await api.get("/ingredient/getAll");
      setIngredients(
        response.data.map((ingredient) => {
          return { value: ingredient.id, label: ingredient["name" + language] };
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchIngredients();
  }, []);

  return (
    <StyledAddRecipe>
      <h2>{langData[language].addRecipe}</h2>
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
            placeholder={langData[language].ingredientsPlaceholder}
            rules={{
              required: langData[language].ingredientsRequired,
            }}
            error={errors.ingredients}
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
        <button>{langData[language].addRecipe}</button>
      </StyledForm>
    </StyledAddRecipe>
  );
};

export default AddRecipe;
