import styled from "styled-components";
import { useLanguage } from "../contexts/languageContext.jsx";

const SelectWrapper = styled.select`
  width: 100%;
  height: 56px;
  background: #ffffff;
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${(props) => (props.error ? "#D92D2A" : "#E3E3E3")};
  border-radius: 15px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 145%;
  padding-left: 16px;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: ${(props) => (props.error ? "#D92D2A" : "#000000")};
  }
`;

const CategorySelect = ({ options = [], onChange, error, id, ...rest }) => {
  const { language } = useLanguage();

  return (
    <SelectWrapper id={id} onChange={onChange} error={error} {...rest}>
      {options.map((opt) => (
        <option key={opt.id} value={opt.id}>
          {opt["name" + language]}
        </option>
      ))}
    </SelectWrapper>
  );
};

export default CategorySelect;
