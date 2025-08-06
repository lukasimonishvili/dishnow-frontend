import woman_home from "../assets/img/home_woman.png";
import Styled from "styled-components";
import Button from "./Button";


const StyledSection = Styled.section`
  background-color: #ffffff00;
  border-top: 0.5px #3C3C3C solid;
  border-bottom: 0.5px #3C3C3C solid;
`;

const HomeDescriptionPanel = () => {

  const ExploreHandle = () => {
    
  };
  const LogInHandle = () => {
    
  };

  return <>
    <StyledSection>
      <div>
        <h4>TRY TODAY</h4>
        <h1>
          Fun and Easy Recipes
          Made for <strong>You</strong>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

        <div>
          <Button input_text="Explore" color="#FC8800" text_color="#ffffff" on_click_function={ExploreHandle}/>
          <Button input_text="Log in" color="#ffffff00" text_color="#000000" on_click_function={LogInHandle}/>
        </div>

      </div>


      <img src={woman_home} alt="cooking woman" />

    </StyledSection>

  </>
};

export default HomeDescriptionPanel;