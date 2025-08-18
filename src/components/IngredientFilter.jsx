import Styled from "styled-components";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import IngredientSelect from "./IngredientSelect";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";
import api from "../api.jsx";

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
  const { control } = useForm();
  const { language } = useLanguage();
  const [ingredients, setIngredients] = useState([]);

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
    fetchIngredients();
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
