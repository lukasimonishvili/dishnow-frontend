import { useState, useEffect, useRef } from "react";
import Styled from "styled-components";

const StyledSlider = Styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 32px;
  height: 428px;
  border-radius: 24px;

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

const RecipeSlider = () => {
  const [sliderImages, setSliderImages] = useState([]);
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
    const imageList = [
      "https://www.vincenzosplate.com/wp-content/uploads/2021/01/spaghetti-carbonara.png",
      "https://cdn6.recetasdeescandalo.com/wp-content/uploads/2015/02/Espaguetis-a-la-carbonara.-Receta-tradicional-1.jpg",
      "https://skinnyspatula.com/wp-content/uploads/2020/09/Carbonara-di-Mare4-720x405.jpg",
    ];
    setSliderImages(imageList);
    startSlider();

    return () => stopSlider();
  }, []);

  useEffect(() => {
    if (activeSlider === sliderImages.length) {
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
      {sliderImages.length > 0 && (
        <div>
          {sliderImages.map((img) => (
            <StyledSliderItem key={img} image={img} />
          ))}
          <StyledSliderItem image={sliderImages[0]} />
        </div>
      )}
    </StyledSlider>
  );
};

export default RecipeSlider;
