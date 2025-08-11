import Styled from "styled-components";
import { useState } from "react";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";
import Carousel from "../components/Carousel.jsx";
import CheckBoxList from "../components/CheckBoxList.jsx";

const StyledOptionsTitle = Styled.h1`
font-family: 'TT Hoves';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 33px;
/* identical to box height */

color: #252525;
`;

const StyledFilterContent = Styled.div`
    width: fit-content;
    padding-right: 2em;
    display:flex;
    flex-direction:column;
    gap: 2em;
`;
const StyledDualContent = Styled.div`
    margin: 1em;
    display:flex;
    background-color: red;
    justify-content: space-between;
    @media only screen and (max-width: 600px){
        flex-direction:column;
        align-items: center;
        & h3, h1{
            text-align: center;
        }
    }
`;
const StyledRecipeContents = Styled.div`
    display:flex;
    background-color: blue;
    width: 100%;
    max-width: 950px;
    min-height: 320px;
    
`;

const Recipes = () => {
    var images_list = [
    ];

    var top_subtitles = [
    ];

    var images_titles = [
    ];

    var bottom_subtittles = [
    ];


    return <>
        <Carousel top_subtitles={top_subtitles} images_titles={images_titles} images_list={images_list} bottom_subtittles={bottom_subtittles}></Carousel>
        <StyledDualContent>
            <StyledFilterContent>
                <StyledOptionsTitle>Filters</StyledOptionsTitle>


                <CheckBoxList id={"r_c"} title="Alergias" optionsList={
                    [
                        "Pastas", "Ensaladas"
                    ]
                }/>
                <CheckBoxList id={"r_i"} title="Cocaina" optionsList={
                    [
                        "Tomates", "Cebolla"
                    ]
                }/>


            </StyledFilterContent>
            <StyledRecipeContents>

            </StyledRecipeContents>
        </StyledDualContent>
    
    </>

}

export default Recipes;