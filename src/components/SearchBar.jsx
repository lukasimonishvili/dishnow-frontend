import { useRef } from "react";
import Styled from "styled-components";
import langData from "../assets/lang.json";
import { useLanguage } from "../contexts/languageContext.jsx";

const StyledSearchBar = Styled.div`
    margin-bottom: 30px;

    & > input {
        width: 100%;
        height: 56px;
        background: #FFFFFF;
        border-width: 1px 1px 2px 1px;
        border-style: solid;
        border-color:  #E3E3E3;
        border-radius: 15px;
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 400;
        line-height: 145%;
        padding-left: 16px;
    }
`;

const SearchBar = ({ setSearch }) => {
  const { language } = useLanguage();
  const typingTimeoutRef = useRef(null);

  const handleKeyUp = (e) => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setSearch(e.target.value);
    }, 500);
  };

  return (
    <StyledSearchBar>
      <input
        type="text"
        placeholder={langData[language].search + "..."}
        onKeyUp={handleKeyUp}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
