import Styled from "styled-components";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";
import api from "../api.jsx";

const StyledCategories = Styled.div`
    width: 100%;

    & > h2 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 33px;
      color: #252525;
    }

    & > div {
      margin-top: 30px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #253D4E;

      & > div {
          padding-bottom: 20px;
          cursor: pointer;
      }
    }
`;

const Categories = ({ setActiveCategory }) => {
  const [categories, setCategories] = useState([]);
  const { language } = useLanguage();

  const fetchCategories = async () => {
    try {
      const response = await api.get("/category/getAll");
      setCategories(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <StyledCategories>
      <h2>{langData[language].category}</h2>
      <div>
        <div onClick={() => setActiveCategory(null)}>
          {langData[language].all}
        </div>
        {categories.map((category) => (
          <div key={category.id} onClick={() => setActiveCategory(category)}>
            {category["name" + language]}
          </div>
        ))}
      </div>
    </StyledCategories>
  );
};

export default Categories;
