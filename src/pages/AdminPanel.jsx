import { Link, Outlet } from "react-router-dom";
import Styled from "styled-components";
import peopleIcon from "../assets/img/people.svg";
import recipesIcon from "../assets/img/recipes.svg";
import categoriesIcon from "../assets/img/categories.svg";
import ingredientsIcon from "../assets/img/ingredients.svg";

const StyledAdminPanel = Styled.div`
    width: 100%;
    min-height: calc(100vh - 366px);
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    background: #F1F1F1;

    @media screen and (max-width: 760px) {
        min-height: calc(100vh - 486px);
    }

    & > div {
        width: calc(100vw - 350px);
        background: #ffffff;
        border-radius: 14px;
        padding: 15px 24px;
        height: fit-content;
        margin: 30px 0;
    }
`;

const StyledSidebar = Styled.aside`
    width: 256px;
    background: #ffffff;
    padding: 38px 32px;
    border-radius: 12px;
    margin: 30px 0;
    height: fit-content;

    & > a {
        width: 100%;
        display: flex;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.1px;
        color: #000000;
        height: 40px;
        display: flex;
        align-items: center;
    }

    & span {
        margin-left: 24px;
        display: block;
    }
`;

const AdminPanel = () => {
  return (
    <StyledAdminPanel>
      <StyledSidebar>
        <Link to="/admin">
          <img src={recipesIcon} alt="" />
          <span>Recipes</span>
        </Link>
        <Link to="/admin/people">
          <img src={peopleIcon} alt="" />
          <span>People</span>
        </Link>
        <Link to="/admin/categories">
          <img src={categoriesIcon} alt="" />
          <span>Categories</span>
        </Link>
        <Link to="/admin/ingredients">
          <img src={ingredientsIcon} alt="" />
          <span>Ingredients</span>
        </Link>
      </StyledSidebar>
      <div>
        <Outlet />
      </div>
    </StyledAdminPanel>
  );
};

export default AdminPanel;
