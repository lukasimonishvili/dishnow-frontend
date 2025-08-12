import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";
import Styled from "styled-components";
import { FaCheck } from "react-icons/fa";


const StyledInputLabel = Styled.label`
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #253D4E;


  display: inline-block;
  position: relative;
  padding-left:30px;
  cursor: pointer;

  input:checked ~ span {
    background-color: #509E2F;
  border-color: #509E2F;
    display: flex;
    & > svg{
        display: block;
        color: white;
    }
    }

    

  &:hover input ~ span {
    cursor: pointer;
  }
`;

const StyledSpan = Styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: white;
  border: solid gray 1.5px;
  border-radius: 4px;
  display:block;
  justify-content:center;
  align-items:center;
  & > svg{
    display: none;
    }
`;

const StyledCheckBox = Styled.input`
  position: absolute;
  opacity: 0;
  height: 25px;
  width: 25px;
`;

const StyledCheckBoxContent = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: fit-content;
`;

const StyledTitle = Styled.h3`
    font-family: 'TT Hoves';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */

    color: #252525;
`;




const CheckBoxList = ({ id, title, optionsList }) => {
    if (id == null || optionsList == null){
        return <></>
    }

    const navigate = useNavigate();
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);

    const [optionsSelect, setOptionsSelect] = useState( urlParams.get(id) ? urlParams.get(id).split(','): []);

    
    const updateUrl = (keyData, Data) => {

        if (Data === "" || Data == null) {
            urlParams.delete(keyData);
        } else {
            urlParams.set(keyData, Data);
        }
        const newSearch = urlParams.toString();
        const newUrl = newSearch ? `${location.pathname}?${newSearch}` : location.pathname;
        navigate(newUrl);
    };


    const HandleCheckBox = (event) => {
        setOptionsSelect(prev => {
            if (event.target.checked) {
                if (prev.includes(event.target.value)) {
                    updateUrl(id, prev.toString());
                    return prev;
                }
                prev.push(event.target.value);
            } else {
                prev = prev.filter(el => el != event.target.value);
            }
            updateUrl(id, prev.toString());
            return prev;
        }
        );

    }

    var optionsHtml = [];
    optionsHtml = optionsList.map((element, index) => {
        const name_id = index + element;
        return (
            <StyledInputLabel key={name_id} htmlFor={name_id}>
                {element}
                <StyledCheckBox
                    value={index}
                    id={name_id}
                    name={name_id}
                    type="checkbox"
                    onChange={HandleCheckBox}

                    checked={optionsSelect.includes(index.toString()) == true}
                />
                <StyledSpan>
                    <FaCheck size="12px" />
                </StyledSpan>
            </StyledInputLabel>
        );
    });


    return <>
        <StyledCheckBoxContent>
            <StyledTitle>{title}</StyledTitle>
            {optionsHtml}
        </StyledCheckBoxContent>

    </>;
}

export default CheckBoxList;