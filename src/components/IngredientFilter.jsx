import Styled from "styled-components";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import IngredientSelect from "./IngredientSelect";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";

const StyledIngredientFilter = Styled.div`
    width: 100%;

    & > h2 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 33px;
        color: #252525;
    }
`;

const IngredientFilter = ({ setSelectedIngredients }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { language } = useLanguage();
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <StyledIngredientFilter>
      <h2>{langData[language].ingredients}</h2>
      <IngredientSelect
        name="ingredients"
        options={ingredients}
        placeholder={langData[language].ingredientsPlaceholder}
        control={control}
        onChange={setSelectedIngredients}
      />
    </StyledIngredientFilter>
  );
};

export default IngredientFilter;
