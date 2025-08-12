import { useState, useEffect, useRef } from "react";
import Styled from "styled-components";

const StyledSlider = Styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 32px;
  height: 428px;
  border-radius: 24px;

  @media screen and (max-width: 580px) {
    height: 300px;
  }

  & > div {
    display: flex;
    position: absolute;
    top: 0;
    left: ${(props) => `calc(${props.sliderindex} * -100%)`};
    min-width: 100%;
    height: 100%;
    transition: ${(props) => (props.transitionenabled ? "0.3s" : "none")};
  }
`;

const StyledSliderItem = Styled.div`
  width: 100%;
  height: 100%;
  flex: 0 0 auto;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const RecipeSlider = ({ photos }) => {
  const [activeSlider, setActiveSlider] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setActiveSlider((prev) => prev + 1);
  };

  const startSlider = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(nextSlide, 3000);
  };

  const stopSlider = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startSlider();

    return () => stopSlider();
  }, []);

  useEffect(() => {
    if (activeSlider === photos.length) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setActiveSlider(0);
        setTimeout(() => setTransitionEnabled(true), 50);
      }, 300);
    }
  }, [activeSlider]);

  return (
    <StyledSlider
      sliderindex={activeSlider}
      transitionenabled={transitionEnabled}
    >
      {photos.length > 0 && (
        <div>
          {photos.map((img) => (
            <StyledSliderItem key={img} image={img} />
          ))}
          <StyledSliderItem image={photos[0]} />
        </div>
      )}
    </StyledSlider>
  );
};

export default RecipeSlider;
