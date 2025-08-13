import { useState, useEffect } from "react";
import Styled from "styled-components";
import editIcon from "../assets/img/edit.svg";
import deleteIcon from "../assets/img/delete.svg";
import CategoryForm from "../components/categoryForm";

const SyledCategories = Styled.div`
    width: 100%;

    & > h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
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

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [deletingIndex, setDeletingIndex] = useState(-1);

  useEffect(() => {
    const mockData = [
      { id: 1, nameEN: "name 1", nameES: "nombre 1", nameCA: "nom 1" },
      { id: 2, nameEN: "name 2", nameES: "nombre 2", nameCA: "nom 2" },
      { id: 3, nameEN: "name 3", nameES: "nombre 3", nameCA: "nom 3" },
      { id: 4, nameEN: "name 4", nameES: "nombre 4", nameCA: "nom 4" },
      { id: 5, nameEN: "name 5", nameES: "nombre 5", nameCA: "nom 5" },
      { id: 6, nameEN: "name 6", nameES: "nombre 6", nameCA: "nom 6" },
      { id: 7, nameEN: "name 7", nameES: "nombre 7", nameCA: "nom 7" },
    ];

    setCategories(mockData);
  }, []);

  const deleteCategory = () => {
    const idOfCategoryToDelete = categories[deletingIndex].id;
    console.log(
      "here will be locgic to delete category with id " + idOfCategoryToDelete
    );
    setDeletingIndex(-1);
  };

  return (
    <SyledCategories>
      <h2>Categories</h2>
      <CategoryForm
        category={activeCategory}
        setActiveCategory={setActiveCategory}
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
        {categories.map((category, index) => (
          <div key={category.id}>
            <div>{category.id}</div>
            <div>{category.nameEN}</div>
            <div>{category.nameES}</div>
            <div>{category.nameCA}</div>
            <div>
              <img
                src={editIcon}
                alt=""
                onClick={() => {
                  setActiveCategory(category);
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
                <button onClick={deleteCategory}>Yes</button>
                <button onClick={() => setDeletingIndex(-1)}>No</button>
              </StyledDeletePopup>
            </div>
          </div>
        ))}
      </StyledTable>
    </SyledCategories>
  );
};

export default Categories;
