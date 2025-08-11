import Styled, { keyframes, css } from "styled-components";
import { useState, useEffect, useRef } from "react";

import { FaCircle, FaRegCircle, FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import defaultFoodBG from "../assets/img/test_food_carousel.jpg";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";


const StyledCarouselBody = Styled.div`
    height: ${(props) => props.height || "255px"};
    margin: ${(props) => props.margin || "5em 1em 1em"};
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

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);  // Comienza fuera de la pantalla (a la derecha)
  }
  100% {
    transform: translateX(0);  // Termina en su posición original
  }
`;
const blurToClear = keyframes`
  0% {
    filter: blur(1em);
  }
  100% {
    filter: blur(0);
  }
`;

const StyledCarouselImg = Styled.div`
    background-image: linear-gradient(to Right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.0)), ${(props) => props.loaded_image ? `url(${props.loaded_image})` : "none"};
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    transition: all 1s;
    ${(props) => props.$isAnimating && css`
        animation: ${blurToClear} 1s ease-in-out forwards;
    `}
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
    & > svg{
        color: white;
    }
    &:hover > svg{
        color: #DC582A;
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
    const [isAnimating, setIsAnimating] = useState(false);
    const {language} = useLanguage();

    const LeftHandle = () => {
        UpdateCarouselPosition(-1);
    }

    const RightHandle = () => {
        UpdateCarouselPosition(1);
    }

    const intervalRef = useRef(null);
    const intervalAnimRef = useRef(null);

    const startInterval = () => {
        // Evita crear múltiples intervalos
        if (intervalRef.current === null) {
            intervalRef.current = setInterval(() => {
                RightHandle()
            }, 5000);
        }
    };

    const triggerAnimation = () => {
        setIsAnimating(true);
        if (intervalAnimRef.current !== null){
            clearInterval(intervalAnimRef.current);
            intervalAnimRef.current = null;
        }
        intervalAnimRef.current = setTimeout(() => {
            setIsAnimating(false);  // Luego, la activamos después de un pequeño retraso
        }, 1000); // Ajusta el tiempo de retraso según lo necesites
    };

    const stopInterval = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        if (carouselSize > 0) {
            startInterval();
        }
        return () => stopInterval();
    }, [carouselSize]);

    const UpdateCarouselPosition = (amount_to_add) => {
        stopInterval();
        setCarouselPosition(prevPosition => {
            let new_position = prevPosition + amount_to_add;
            if (new_position < 0) {
                new_position = carouselSize > 0 ? carouselSize + new_position : 0;
            } else if (new_position >= carouselSize) {
                new_position = 0;
            }
            return new_position;
        });
        startInterval();
        triggerAnimation();
    }

    var buttonsSection;
    if (carouselSize > 0) {
        var spheres = [];
        for (let index = 0; index < carouselSize; index++) {
            if (index == carouselPosition) {
                spheres.push(<FaCircle key={index} color="#DC582A"></FaCircle>)
            } else {
                spheres.push(<FaRegCircle key={index} color="white"></FaRegCircle>)
            }
        }
        const buttonLeft = <StyledButton onClick={LeftHandle}>
            <FaRegArrowAltCircleLeft size="2em"></FaRegArrowAltCircleLeft>
        </StyledButton>
        const buttonRight = <StyledButton onClick={RightHandle}>
            <FaRegArrowAltCircleRight size="2em"></FaRegArrowAltCircleRight>
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
    const topSubTittle = carouselSize > 0 ? top_subtitles[carouselPosition] : langData[language].carouselDefaultSubTittle;
    const bottomSubTittle = carouselSize > 0 ? bottom_subtittles[carouselPosition] : "";
    const Tittle = carouselSize > 0 ? images_titles[carouselPosition] : langData[language].carouselDefaultTittle;

    return <>
        <StyledCarouselBody>
            <StyledCarouselImg $isAnimating={isAnimating} loaded_image={imageToLoad} />
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