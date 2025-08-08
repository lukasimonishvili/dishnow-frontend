import Styled from "styled-components";
import { useState } from "react";

import { FaCircle, FaRegCircle, FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import defaultFoodBG from "../assets/img/test_food_carousel.jpg";


const StyledCarouselBody = Styled.div`
    height: ${(props) => props.height || "255px"};
    margin: ${(props) => props.margin || "5em 1em"};
    border-radius: ${(props) => props.border_radius || "2em"};
    overflow: hidden;
    position:relative;
    display:flex;
`;

const StyledTextsContent = Styled.div`
    width: 100%;
    height: 100%;
    position:absolute;
    padding-right: 2em;
    padding-left: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
`;

const StyledCarouselImg = Styled.div`
    background-image: linear-gradient(to Right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.0)), ${(props) => props.loaded_image ? `url(${props.loaded_image})` : "none"};
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
`;

const StyledTopSubTittle = Styled.h4`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 127%;
    /* or 30px */
    color: #DC582A;
    display: -webkit-box;
    -webkit-line-clamp: 1;        /* Número de líneas antes de cortar */
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media only screen and (max-width: 710px){
        font-size: 16px;
    }
`;

const StyledBottomSubTittle = Styled.h4`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 127%;
    color: white;
    display: -webkit-box;
    -webkit-line-clamp: 3;        /* Número de líneas antes de cortar */
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media only screen and (max-width: 710px){
        font-size: 16px;
    }
`;

const StyledTittle = Styled.h4`

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 127%;
    /* or 51px */

    color: #FFFFFF;
    
    display: -webkit-box;
    -webkit-line-clamp: 3;        /* Número de líneas antes de cortar */
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media only screen and (max-width: 710px){
        font-size: 30px;
    }

`;

const StyledButton = Styled.button`

&:focus {
    outline: 2px solid white; /* o el color que quieras */
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const StyledCenterContainer = Styled.div`
    margin-top: 4em;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: 0.5em;
    & > div{
        display:flex;
        flex-direction: raw;
        gap: 0.5em;
    }
`;

const Carousel = ({ images_list, top_subtitles, images_titles, bottom_subtittles }) => {
    var carouselSize = images_list ? images_list.length : -1;
   
    const [carouselPosition, setCarouselPosition] = useState(0);

    const LeftHandle = () => {
        UpdateCarouselPosition(-1);
    }

    const RightHandle = () => {
        UpdateCarouselPosition(1);
    }

    const UpdateCarouselPosition = (amunt_to_add) => {
        let new_position = carouselPosition + amunt_to_add;
        if (new_position < 0) {
            new_position = carouselSize > 0 ? carouselSize + new_position: 0;
        } else if (new_position >= carouselSize) {
            new_position = 0;
        }
        console.log("new pos: ", new_position);
        
        setCarouselPosition(new_position)
    }

    var buttonsSection = "";
    if (carouselSize > 0) {
        var spheres = [];
        for (let index = 0; index < carouselSize; index++) {
            if (index == carouselPosition){
               spheres.push(<FaCircle color="#DC582A"></FaCircle>)
            }else {
               spheres.push(<FaRegCircle color="white"></FaRegCircle>)
            }
        }
        const buttonLeft = <StyledButton>
                    <FaRegArrowAltCircleLeft onClick={LeftHandle} color="#DC582A" size="2em"></FaRegArrowAltCircleLeft>
                </StyledButton>
        const buttonRight = <StyledButton onClick={RightHandle}>
                    <FaRegArrowAltCircleRight color="#DC582A" size="2em"></FaRegArrowAltCircleRight>
                </StyledButton>
        buttonsSection = <StyledCenterContainer>
            <div>
                {buttonLeft}
                {buttonRight}
            </div>
            <div>
                {spheres}
            </div>

        </StyledCenterContainer>
    }
    var imageToLoad = carouselSize > 0 ? images_list[carouselPosition] : "";
    imageToLoad = imageToLoad == "" ? defaultFoodBG : imageToLoad;
    const topSubTittle = carouselSize > 0 ? top_subtitles[carouselPosition] : "Have a delicious meal";
    const bottomSubTittle = carouselSize > 0 ? bottom_subtittles[carouselPosition] : "";
    const Tittle = carouselSize > 0 ? images_titles[carouselPosition] : "Choose what you most want to cook";

    return <>
        <StyledCarouselBody>
            <StyledCarouselImg loaded_image={imageToLoad} />
            <StyledTextsContent>
                <div>
                    <StyledTopSubTittle>{topSubTittle}</StyledTopSubTittle>
                    <StyledTittle>{Tittle}</StyledTittle>
                    <StyledBottomSubTittle>{bottomSubTittle}</StyledBottomSubTittle>
                </div>
                {buttonsSection}
            </StyledTextsContent>
        </StyledCarouselBody>
    </>

}

export default Carousel;