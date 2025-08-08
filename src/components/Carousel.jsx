import Styled from "styled-components";
import { useState } from "react";

import { FaRegArrowAltCircleRight } from "react-icons/fa";

import testFoodBG from "../assets/img/test_food_carousel.jpg";


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
`;

const StyledBottomSubTittle = Styled.h4`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 127%;
    color: white;
`;

const StyledTittle = Styled.h4`

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 127%;
    /* or 51px */

    color: #FFFFFF;


`;

const Carousel = ({ images_list, images_top_subtitles, images_titles, images_bottom_subtittle }) => {
    const carouselSize = images_list ? images_list.length : -1;
    /*
    if (carouselSize <= 0) {
        return <>
            <h1>
                Error: No elements to show
            </h1>
        </>;
    }
    */


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
            new_position += carouselSize;
        } else if (new_position >= carouselSize) {
            new_position = 0;
        }
        setCarouselPosition(new_position)
    }

    return <>
        <StyledCarouselBody>
            <StyledCarouselImg loaded_image={testFoodBG}/>
            <StyledTextsContent>
                <StyledTopSubTittle>Trending now</StyledTopSubTittle>
                <StyledTittle>Mike’s famous salad with cheese</StyledTittle>
                <StyledBottomSubTittle>By John Mike</StyledBottomSubTittle>

                <div>
                    <FaRegArrowAltCircleRight color="orange" size="2em"></FaRegArrowAltCircleRight>
                </div>
            </StyledTextsContent>
        </StyledCarouselBody>
    </>

}

export default Carousel;