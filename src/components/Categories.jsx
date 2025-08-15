import Styled from "styled-components";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";

const StyledCategories = Styled.div`
    width: 284px;

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

  useEffect(() => {
    const mockData = [
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

    setCategories(mockData);
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
